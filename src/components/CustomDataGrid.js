import React, { useEffect, useState } from 'react'
import {
  Typography,
  LinearProgress,
  Stack,
  Button
  // CircularProgress
} from '@mui/material'
import {
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
  DataGrid,
  GridActionsCellItem,
  GridToolbar,
  GridOverlay
} from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add'
import { GRID_DEFAULT_LOCALE_TEXT } from '../i18n/spanish/DataGrid'
import AddModal from './AddModal'

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  color:
    theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
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
    '"Segoe UI Symbol"'
  ].join(','),
  WebkitFontSmoothing: 'auto',
  letterSpacing: 'normal',
  '& .MuiDataGrid-columnsContainer': {
    backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d'
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none'
  },
  '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
    borderRight: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
      }`
  },
  '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
    borderBottom: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
      }`
  },
  '& .MuiDataGrid-cell:first-of-type': {
    borderLeft: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'}`
  },
  '& .MuiPaginationItem-root': {
    borderRadius: 0
  },
  '& .MuiDataGrid-columnHeader': {
    backgroundColor: theme.palette.primary.main,
    color: '#f0f0f0'
  },
  '& .MuiDataGrid-sortIcon': {
    color: '#f0f0f0'
  },
  '& .MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus': {
    outline: 'none'
  }
}))

function LinearLoadingOverlay () {
  return (
    <GridOverlay sx={{ backgroundColor: '#fafafa' }}>
      <div style={{ position: 'absolute', top: 0, width: '100%' }}>
        <LinearProgress />
      </div>
    </GridOverlay>
  )
}

// function CircularLoadingOverlay () {
//   return (
//     <GridOverlay sx={{ backgroundColor: '#fafafa' }}>
//       <CircularProgress />
//     </GridOverlay>
//   )
// }

function CustomPagination () {
  const apiRef = useGridApiContext()
  const page = useGridSelector(apiRef, gridPageSelector)
  const pageCount = useGridSelector(apiRef, gridPageCountSelector)

  return (
    <Pagination
      color='primary'
      variant='outlined'
      shape='rounded'
      page={page + 1}
      count={pageCount}
      // @ts-expect-error
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  )
}

const actions = {
  id: 3,
  field: 'actions',
  type: 'actions',
  headerName: 'Acciones',
  flex: 1,
  getActions: () => [
    <GridActionsCellItem
      key={1}
      icon={<EditIcon />}
      label='Editar'
      onClick={() => window.alert('Iría a EDITAR un elemento.')}
    />,
    <GridActionsCellItem
      key={2}
      icon={<DeleteIcon />}
      label='Eliminar'
      onClick={() => window.alert('Iría a ELIMINAR un elemento.')}
    />
  ]
}

export const CustomDataGrid = ({ title, rows, columns, isLoading }) => {
  const [headers, setHeaders] = useState(columns)
  const [isOpenModal, setOpenModal] = useState(false)

  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  useEffect(() => {
    setHeaders([...headers, actions])
  }, [])

  return (
    <>
      <AddModal isOpenModal={isOpenModal} handleCloseModal={handleCloseModal} title={title} />
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

      <div style={{ height: 500, width: '100%' }}>
        <StyledDataGrid
          loading={isLoading}
          rows={rows}
          columns={headers}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableColumnMenu
          disableSelectionOnClick
          components={{
            Pagination: CustomPagination,
            Toolbar: GridToolbar,
            LoadingOverlay: LinearLoadingOverlay
          }}
          localeText={GRID_DEFAULT_LOCALE_TEXT}
        />
      </div>
    </>
  )
}
