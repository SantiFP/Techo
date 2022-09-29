import * as React from 'react';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import operationalPlans from './../../data/operationalPlans';
import { Tooltip, Button, Stack } from '@mui/material';
import { GridActionsCellItem, gridClasses } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { Modal, Box } from '@mui/material';
import { ModalBody, style } from './ModalBody';
import { useEffect } from 'react';

const columns = operationalPlans.columns;

const crearObjetivo = false;

let titleModal = 'AGREGAR RESULTADO CLAVE';

const actions = (handleOpenEditModal) => {
  return {
    id: 10,
    field: 'actions',
    type: 'actions',
    headerName: 'OPCIONES',
    align: 'center',
    width: 150,
    getActions: () => [
      <GridActionsCellItem
        field="EDITAR"
        key={1}
        icon={
          <Tooltip title="Editar">
            <EditIcon sx={{ color: '#fff' }} />
          </Tooltip>
        }
        label="Editar"
        onClick={handleOpenEditModal}
        sx={{
          backgroundColor: '#0092DD',
          '&:hover': { backgroundColor: 'orange' },
        }}
      />,
      <GridActionsCellItem
        key={2}
        icon={
          <Tooltip title="Eliminar">
            <DeleteIcon sx={{ color: '#fff' }} />
          </Tooltip>
        }
        label="Eliminar"
        onClick={() => window.alert('Iría a ELIMINAR un elemento.')}
        sx={{
          backgroundColor: '#0092DD',
          '&:hover': { backgroundColor: 'orange' },
        }}
      />,
    ],
  };
};
const columnGroupingModel = [
  {
    groupId: 'REALIZAR DISEÑO DEL SISTEMA DE PLANIFICACIÓN',
    children: [
      { field: 'RESULTADOS CLAVE' },
      { field: 'RESPONSABLE' },
      {
        groupId: 'EVALUACIÓN',
        children: [
          { field: 'T1' },
          { field: 'T2' },
          { field: 'T3' },
          { field: 'T4' },
          { field: 'AÑO' },
        ],
      },
      { field: 'actions' },
    ],
  },
];

export default function BasicGroupingDemo() {
  const [isOpenModal, setOpenModal] = useState(false);
  const [isEditButton, setEditButton] = useState(false);
  const [rows, setRows] = useState(operationalPlans.rows);
  const [modalData, setModalData] = useState({
    id: '',
    resultados_clave: '',
    responsable: '',
    T1: '',
    T2: '',
    T3: '',
    T4: '',
    AÑO: '',
  });

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setEditButton(false);
  };

  const handleOpenEditModal = (e) => {
    console.log(e.target.parent);
    setOpenModal(true);
    setEditButton(true);
  };

  const handleChange = (e) => {
    setModalData({
      ...modalData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = () => {

    setRows([...rows,modalData]);
    handleCloseModal();

  }

 useEffect(() => {
    console.log(modalData);
 }, [modalData])
 

  return (
    <Stack width= '100%'>
      <div align="right">
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpenModal}
          disableElevation
          sx={{ marginBottom: '5px' }}
          //
          colSpan={12}
        >
          AGREGAR RESULTADO
        </Button>
      </div>
      <Modal
        open={isOpenModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalBody
            crearObjetivo={crearObjetivo}
            titleModal={titleModal}
            isEditButton={isEditButton}
            handleChange={handleChange}
          />

          <div align="center">
            <Button
              variant="contained"
              onClick={handleCloseModal}
              disableElevation
              sx={{
                mr: 4,
                backgroundColor: 'white',
                color: '#0092DD',
                border: `1px solid #0092DD`,
              }}
              //
              colSpan={12}
            >
              CANCELAR
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit}
              disableElevation
              sx={{}}
              colSpan={12}
            >
              CONFIRMAR
            </Button>
          </div>
        </Box>
      </Modal>
      <DataGrid
        sx={{
          border: 0,
          color: 'rgba(0,0,0,.85)',
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
          WebkitFontSmoothing: 'auto',
          letterSpacing: 'normal',
          '& .MuiDataGrid-columnHeaders': {
            borderRadius: '10px 10px 0 0',
          },
          '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
            borderRight: `2px solid #FFFFFF`,
          },
          '& .MuiDataGrid-columnHeader:last-of-type, .MuiDataGrid-cell:last-of-type ':
            {
              borderRight: 'none',
            },
          '& .MuiDataGrid-columnHeader, .MuiDataGrid-columnHeadersInner': {
            backgroundColor: '#0092DD',
            color: '#f0f0f0',
            fontSize: '',
            // height: '0px',
            lineHeight: 'px',
          },
        }}
        experimentalFeatures={{ columnGrouping: true }}
        rows={rows}
        columns={[...columns, actions(handleOpenEditModal)]}
        disableSelectionOnClick
        columnGroupingModel={columnGroupingModel}
        hideFooter
        headerHeight={35}
        rowHeight={45}
        autoHeight={true}
      />
    </Stack>
  );
}
