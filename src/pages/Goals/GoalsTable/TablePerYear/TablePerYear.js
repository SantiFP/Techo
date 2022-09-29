import styled from 'styled-components';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useBlockLayout,
  usePagination,
} from 'react-table';
import { useSticky } from 'react-table-sticky';

import { GlobalFilter } from './GlobalFilter';
import {
  TableContainer,
  Paper,
  Grid,
  Button,
  Box,
  Typography,
} from '@mui/material';
import { forwardRef, useEffect, useRef,  useMemo, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import UpLoadFile, { DownLoadFile } from 'pages/Goals/recordsGoals/IconsGoals';
import './TablePerYear.css';
import { CSVLink } from 'react-csv';
import Header from 'layout/Header/Header';

const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <div className="cb action">
      <label>
        <input type="checkbox" ref={resolvedRef} {...rest} />
        <span>VER TODO</span>
      </label>
    </div>
  );
});

const Styles = styled.div`
  .borderLineTop {
    border-top: 2px solid white;
  }
  tbody input {
    background-color: transparent;
    border: 0px solid;
    width: 140px;
  }
  tbody input:hover {
    background-color: transparent;
    border: 1px solid grey;
  }
  .titleHeaderGroup {
    padding-left: 10px;
    display: flex !important;
    align-items: center;
    padding-right: 4rem;
    text-align: left;
    border-color: white;
  }
  .css-p2kvob-MuiInputBase-root-MuiOutlinedInput-root {
    background-color: white;
    margin-right: 1rem;
    padding-right: 8.5px;
  }
  th input {
    width: 335px;
  }
  table {
    border-spacing: 0;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    tr td:first-child {
      background-color: #e5e5e5;
      input {
        width: 380px;
      }
    }
    tr td {
      input {
        width: 100px;
      }
    }
    tr td:nth-child(3) {
      input {
        width: 150px;
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      padding-top: 15px;
      padding-bottom: 15px;
      border-right: 2px solid white;
      padding-left: 10px;
      :last-child {
        border-right: 0;
      }
    }
  }

  .dividerLine {
    margin-bottom: 1rem;
    border-top: 1px solid rgba(224, 224, 224, 1);
  }
  .buttonName .btnPageNumber:disabled {
    color: #0092dd;
    border: 1px solid rgba(0, 146, 221, 0.5);
    background-color: rgba(0, 146, 221, 0.12);
  }
  .buttonName {
    display: flex;
    justify-content: flex-end;
  }

  .buttonName button {
    border-radius: 0px;
    cursor: pointer;
  }
  .buttonName button svg {
    width: 1em;
    height: 1em;
    font-size: 1.25rem;
    margin: 0 -8px;
  }
  .buttonName .navigatePage:disabled {
    opacity: 0.38;
  }
`;

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData,
}) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    updateMyData(index, id, value);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  if (
    id === 'planannual' ||
    id === 'realannual' ||
    id === 'real1' ||
    id === 'plan1' ||
    id === 'plan2' ||
    id === 'real2' ||
    id === 'plan3' ||
    id === 'real3' ||
    id === 'plan4' ||
    id === 'real4'
  ) {
    return <input value={value} onChange={onChange} onBlur={onBlur} />;
  }
  return value;
};

const defaultColumn = {
  Cell: EditableCell,
};

const borderLineTop = 'borderLineTop';

function Table({ columns, data, updateMyData, skipPageReset }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    pageCount,
    state,
    pageOptions,
    setGlobalFilter,
    prepareRow,
    allColumns,
    getToggleHideAllColumnsProps,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      autoResetPage: !skipPageReset,
      updateMyData,
      initialState: { pageIndex: 0 },
    },
    useBlockLayout,
    useSticky,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { pageIndex } = state;
  const { globalFilter } = state;

  return (
    <>
      <Grid
        item
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
          alignItems: 'center',
          marginBottom: '1.5rem',
        }}
      >
        <Grid item sx={{ display: 'flex' }}>
          <Grid>
            <IndeterminateCheckbox {...getToggleHideAllColumnsProps()} />
          </Grid>
          <Grid className="cb action">
            <label>
              <input
                type="checkbox"
                onClick={() =>
                  allColumns.forEach(
                    (c) => c.parent.Header === 'ANUAL' && c.toggleHidden()
                  )
                }
              ></input>
              <span>ANUAL</span>
            </label>
          </Grid>

          <Grid className="cb action">
            <label>
              <input
                type="checkbox"
                onClick={() =>
                  allColumns.forEach(
                    (c) =>
                      c.parent.Header === '1ER TRIMESTRE' && c.toggleHidden()
                  )
                }
              ></input>
              <span>1ER TRIMESTRE</span>
            </label>
          </Grid>
          <Grid className="cb action">
            <label>
              <input
                type="checkbox"
                onClick={() =>
                  allColumns.forEach(
                    (c) =>
                      c.parent.Header === '2DO TRIMESTRE' && c.toggleHidden()
                  )
                }
              ></input>
              <span>2DO TRIMESTRE</span>
            </label>
          </Grid>
          <Grid className="cb action">
            <label>
              <input
                type="checkbox"
                onClick={() =>
                  allColumns.forEach(
                    (c) =>
                      c.parent.Header === '3ER TRIMESTRE' && c.toggleHidden()
                  )
                }
              ></input>
              <span>3ER TRIMESTRE</span>
            </label>
          </Grid>
          <Grid className="cb action">
            <label>
              <input
                type="checkbox"
                onClick={() =>
                  allColumns.forEach(
                    (c) =>
                      c.parent.Header === '4TO TRIMESTRE' && c.toggleHidden()
                  )
                }
              ></input>
              <span>4TO TRIMESTRE</span>
            </label>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', marginLeft: 2 }}>
          <CSVLink
            data={data}
            filename="Techo-Metas"
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="contained"
              sx={{
                marginRight: '1rem',
                paddingTop: '5px',
                paddingBottom: '5px',
                height: '39px',
              }}
              startIcon={<DownLoadFile />}
            >
              DESCARGAR
            </Button>
          </CSVLink>
          <Button
            variant="outlined"
            sx={{
              paddingRight: '25px',
              paddingLeft: '25px',
              paddingTop: '5px',
              paddingBottom: '5px',
              height: '39px',
            }}
            startIcon={<UpLoadFile />}
          >
            CARGAR
          </Button>
        </Box>
      </Grid>

      <TableContainer
        sx={{
          padding: 0,
          height: '650px',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
        }}
      >
        <table className="table-options" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className={`titleHeaderGroup ${
                      (column.Header === 'REAL' ||
                        column.Header === 'PLAN' ||
                        column.Header === '% (R/P)') &&
                      borderLineTop
                    }`}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render('Header')}
                    {column.id === 'Indicadores' && (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginRight: '1rem',
                        }}
                      >
                        {' '}
                        <GlobalFilter
                          filter={globalFilter}
                          setFilter={setGlobalFilter}
                        />{' '}
                        <p>{`(${data.length})`}</p>
                      </div>
                    )}
                    {column.Header === 'REAL' ||
                    column.Header === 'PLAN' ||
                    column.Header === '% (R/P)' ||
                    column.id === 'Indicadores' ||
                    column.Header === '' ? (
                      column.isSorted ? (
                        column.isSortedDesc ? (
                          <KeyboardArrowDownIcon />
                        ) : (
                          <KeyboardArrowUpIcon />
                        )
                      ) : (
                        <KeyboardArrowDownIcon />
                      )
                    ) : (
                      ''
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableContainer>
      <Grid className="dividerLine"></Grid>
      <Grid className="buttonName">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className={
            'css-1cw8co2-MuiButtonBase-root-MuiPaginationItem-root navigatePage'
          }
        >
          <NavigateBeforeIcon />
        </button>
        {pageOptions.map((page) => {
          return (
            <button
              key={page.id}
              onClick={() => gotoPage(page)}
              disabled={page === pageIndex}
              className={
                'btnPageNumber css-1cw8co2-MuiButtonBase-root-MuiPaginationItem-root'
              }
            >
              {page + 1}
            </button>
          );
        })}
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className={
            'css-1cw8co2-MuiButtonBase-root-MuiPaginationItem-root navigatePage'
          }
        >
          <NavigateNextIcon />
        </button>
      </Grid>
    </>
  );
}

function TablePerYear({rowsSelection}) {
  const columns = useMemo(
    () => [
      {
        Header: 'INDICADORES',
        sticky: 'left',

        columns: [
          {
            Header: '',
            accessor: 'Indicadores',
            sticky: 'left',
            width: 520,
          },
        ],
      },
      {
        Header: 'TIPO',
        columns: [
          {
            Header: '',
            accessor: 'Tipo',
            width: 180,
          },
        ],
      },
      {
        Header: 'PILAR',
        columns: [
          {
            Header: '',
            accessor: 'Pilar',
            width: 180,
          },
        ],
      },
      {
        Header: 'ANUAL',
        columns: [
          {
            Header: 'PLAN',
            accessor: 'planannual',
          },
          {
            Header: 'REAL',
            accessor: 'realannual',
          },
          {
            Header: '% (R/P)',
            accessor: 'rpannual',
          },
        ],
      },
      {
        Header: '1ER TRIMESTRE',
        columns: [
          {
            Header: 'PLAN',
            accessor: 'plan1',
          },
          {
            Header: 'REAL',
            accessor: 'real1',
          },
          {
            Header: '% (R/P)',
            accessor: 'rp1',
          },
        ],
      },
      {
        Header: '2DO TRIMESTRE',
        columns: [
          {
            Header: 'PLAN',
            accessor: 'plan2',
          },
          {
            Header: 'REAL',
            accessor: 'real2',
          },
          {
            Header: '% (R/P)',
            accessor: 'rp2',
          },
        ],
      },
      {
        Header: '3ER TRIMESTRE',
        columns: [
          {
            Header: 'PLAN',
            accessor: 'plan3',
          },
          {
            Header: 'REAL',
            accessor: 'real3',
          },
          {
            Header: '% (R/P)',
            accessor: 'rp3',
          },
        ],
      },
      {
        Header: '4TO TRIMESTRE',
        columns: [
          {
            Header: 'PLAN',
            accessor: 'plan4',
          },
          {
            Header: 'REAL',
            accessor: 'real4',
          },
          {
            Header: '% (R/P)',
            accessor: 'rp4',
          },
        ],
      },
    ],
    []
  );
  const [data, setData] = useState(rowsSelection);
  const [originalData] = useState(data);
  const [skipPageReset, setSkipPageReset] = useState(false);

  const updateMyData = (rowIndex, columnId, value) => {
    setSkipPageReset(true);

    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  useEffect(() => {
    setSkipPageReset(false);
  }, [data]);

  useEffect(() => {
    setData(rowsSelection);
  }, [rowsSelection])
  

  const resetData = () => setData(originalData);
  return (
    <Styles id="styles">
      <Table
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </Styles>
  );
}

export default TablePerYear;
