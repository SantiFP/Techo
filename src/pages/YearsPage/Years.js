import CustomDataGrid from 'components/CustomDataGrid'

const columns = [
  { id: 1, field: 'year', headerName: 'Año', flex: 1 },
  { id: 2, field: 'status', type: 'boolean', headerName: 'Estado', flex: 1 }
]

const rows = [
  { id: 1, year: 2021, status: true },
  { id: 2, year: 2019, status: false },
  { id: 3, year: 2022, status: true },
  { id: 4, year: 2020, status: false },
  { id: 5, year: 2018, status: false },
  { id: 6, year: 2017, status: false }
]

export default function Years () {
  return <CustomDataGrid title='Años' columns={columns} rows={rows} isLoading={false} />
}
