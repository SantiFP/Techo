import { useState } from 'react'
import {
  Typography,
  Stack,
  Button,
  Tooltip,
  Container
  // CircularProgress
} from '@mui/material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add'
import AddDialog from 'components/AddDialog'
import DialogDetails from 'components/DialogDetails'
import { FileCopy } from '@mui/icons-material'
import CustomTable from './CustomTable'
import AddPlanningDialog from './AddPlanningDialog'

// function CircularLoadingOverlay () {
//   return (
//     <GridOverlay sx={{ backgroundColor: '#fafafa' }}>
//       <CircularProgress />
//     </GridOverlay>
//   )
// }

const actions = (page) => {

  return {

    id: 3,
    field: 'actions',
    type: 'actions',
    headerName: 'Acciones',
    flex: 1,
    minWidth: page.toLowerCase().includes('planificación') ? 120 : 100,
    getActions: () => [
      <GridActionsCellItem
        key={1}
        icon={<Tooltip title="Editar"><EditIcon /></Tooltip>}
        label='Editar'
        onClick={() => window.alert('Iría a EDITAR un elemento.')}
      />,
      ...(page.toLowerCase().includes('planificación') ?
        [<GridActionsCellItem
          key={3}
          icon={<Tooltip title="Duplicar"><FileCopy /></Tooltip>}
          label='Duplicar'
          onClick={() => window.alert('Iría a DUPLICAR un elemento.')}
        />]
        : []),
      <GridActionsCellItem
        key={2}
        icon={<Tooltip title="Eliminar"><DeleteIcon /></Tooltip>}
        label='Eliminar'
        onClick={() => window.alert('Iría a ELIMINAR un elemento.')}
      />
    ]

  }

}

export default function CustomDataGrid({ title, rows, columns, isLoading }) {
  const headers = [...columns, actions(title)]
  const [isOpenModal, setOpenModal] = useState(false)
  const [isOpenModalDetails, setOpenModalDetails] = useState(false)
  const [indicatorDetails, setIndicatorDetails] = useState({})

  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  const handleOpenModalDetails = (indicator) => {
    setIndicatorDetails(indicator)
    setOpenModalDetails(true)
  }
  const handleCloseModalDetails = () => {
    setIndicatorDetails({})
    setOpenModalDetails(false)
  }

  return (
    <>
      <DialogDetails isOpenModalDetails={isOpenModalDetails} handleCloseModalDetails={handleCloseModalDetails} indicatorDetails={indicatorDetails} columns={columns} />

      {title.toLowerCase().includes('planificación') ?
        <AddPlanningDialog isOpenModal={isOpenModal} handleOpenModalDetails={handleOpenModalDetails} handleCloseModal={handleCloseModal} title={title}/>
        : <AddDialog isOpenModal={isOpenModal} handleCloseModal={handleCloseModal} title={title} />}

      <Stack direction='row' alignItems='center' justifyContent='space-between' mb={4}>
        <Typography variant='h1' sx={{ textTransform: 'uppercase' }}>{title}</Typography>
        <Button
          variant='contained'
          startIcon={<AddIcon />}
          onClick={handleOpenModal}
          disableElevation
        >
          Agregar
        </Button>
      </Stack>

      <Container maxWidth={false} sx={{ height: 640}}>

        <CustomTable handleOpenModalDetails={handleOpenModalDetails} isLoading={isLoading} rows={rows} headers={headers} pageSize={5} hasCheckbox={false} isDisableSelectionOnClick={true}/>

      </Container>
    </>
  )
}
