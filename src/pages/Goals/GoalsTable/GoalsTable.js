//mui
import {
    Tooltip,
    Container
  } from '@mui/material'
  import { GridActionsCellItem } from '@mui/x-data-grid'
  import EditIcon from '@mui/icons-material/Edit'
  
  //Components
  import DialogDetails from "components/records/DialogDetails";
  import CustomTable from "components/records/CustomTable";  
  import GoalsTableDatagrid from './GoalsTableDatagrid/GoalsTableDatagrid';
  
  //react
  import { useState } from "react"



  import DataGridDemo from '../TestTable';
  import { Grid } from '@mui/material';
import TablePerYear from './TablePerYear/TablePerYear';


  const actions = (title) => {

    return {
  
      id: 3,
      field: 'actions',
      type: 'actions',
      headerName: 'Acciones',
      flex: 1,
      getActions: () => [
        <GridActionsCellItem
          key={1}
          icon={<Tooltip title="Ir al detalle de la sede"><EditIcon sx={{ color: '#fff' }} /></Tooltip>}
          label='Ir al detalle de la sede'
          onClick={() => window.alert('go to year / hearquarter page')}
          sx={{ backgroundColor: '#0092DD', '&:hover': { backgroundColor: 'orange' } }}
        />,
      ]
  
    }
}
 const GoalsTable = ({ title, rows, columns, isLoading }) =>{
    const headers = [...columns, actions(title)]
    const [isOpenModalDetails, setOpenModalDetails] = useState(false)
    const [indicatorDetails, setIndicatorDetails] = useState({})

    const handleOpenModalDetails = (indicator) => {
        setIndicatorDetails(indicator)
        setOpenModalDetails(true)
    }
    const handleCloseModalDetails = () => {
        setIndicatorDetails({})
        setOpenModalDetails(false)
    }

    //+++ Ver si el height esta bien asi +++
    return(
        <>
            <DialogDetails isOpenModalDetails={isOpenModalDetails} handleCloseModalDetails={handleCloseModalDetails} indicatorDetails={indicatorDetails} columns={columns} />
            <Container maxWidth={false} sx={{ height: 640, marginBottom:50 }}>
                <CustomTable handleOpenModalDetails={handleOpenModalDetails} isLoading={isLoading} rows={rows} headers={headers} pageSize={8} hasCheckbox={false} isDisableSelectionOnClick={true} />
               
            </Container>
            <Container maxWidth={false} sx={{ height: 640, marginBottom:50 }}>
            <TablePerYear/>
            </Container>

        </>
    )
}

export default GoalsTable