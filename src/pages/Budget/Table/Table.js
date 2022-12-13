import { DataGrid } from "@mui/x-data-grid";
import operationalPlans from "../../../data/operationalPlans";

const columns = [
    {
      field: 'first',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
    },
    {
      field: 'last',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
    },
  ];

const rows =  [
    {
      id: 1,
      first: 'TOTAL DE INGRESOS',
      age: 20,
    },
    {
        id: 1,
        last: 'TOTAL DE EGRESOS',
        age: 20,
      },
  ]
const Table = () => {
  return (
    <DataGrid
    
    columns={columns}
    rows={rows}
    sx={{ m: 2 }}
      hideFooter
      headerHeight={35}
      rowHeight={45}
      autoHeight={true}
      disableColumnMenu
    />
  );
};

export default Table;