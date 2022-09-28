//mui
import { Tooltip, Container } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";

//Components
import DialogDetails from "components/records/DialogDetails";
import CustomTable from "components/records/CustomTable";
import TablePerYear from "./TablePerYear/TablePerYear";

//react
import { useState, useEffect } from "react";

//records 
import { selectRows } from "../recordsGoals/RecordsGoals";

const GoalsTable = ({ title, rows, columns, isLoading , year , rowsSelection , detailsHeadquarter , openTable , setOpenTable , setRows}) => {
  const actions = (title) => {
    return {
      id: 3,
      field: "actions",
      type: "actions",
      headerName: "Acciones",
      flex: 1,
      getActions: () => [
        <GridActionsCellItem
          key={1}
          icon={
            <Tooltip title="Ir al detalle de la sede">
              <EditIcon sx={{ color: "#fff" }} />
            </Tooltip>
          }
          label="Ir al detalle de la sede"
          onClick={(e) => detailsHeadquarter(e)}
          sx={{
            backgroundColor: "#0092DD",
            "&:hover": { backgroundColor: "orange" },
          }}
        />,
      ],
    };
  };

  const headers = [...columns, actions(title)];

  const [ isOpenModalDetails, setOpenModalDetails ] = useState(false);
  const [ indicatorDetails, setIndicatorDetails ] = useState({});
  
  const handleOpenModalDetails = (indicator) => {
    setIndicatorDetails(indicator);
    setOpenModalDetails(true);
  };
  const handleCloseModalDetails = () => {
    setIndicatorDetails({});
    setOpenModalDetails(false);
  };


  return (
    <>
      <DialogDetails
        isOpenModalDetails={isOpenModalDetails}
        handleCloseModalDetails={handleCloseModalDetails}
        indicatorDetails={indicatorDetails}
        columns={columns}
      />
      <Container maxWidth={false} sx={{ height: 640, marginBottom: 50 }}>
        {openTable ? (
          <CustomTable
            handleOpenModalDetails={handleOpenModalDetails}
            isLoading={isLoading}
            rows={rows}
            headers={headers}
            pageSize={8}
            hasCheckbox={false}
            isDisableSelectionOnClick={true}
          />
        ) : (
          <TablePerYear rowsSelection={rowsSelection} />
        )}
      </Container>
    </>
  );
};

export default GoalsTable;
