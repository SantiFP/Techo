import React from 'react'
import { CustomDataGrid } from '../../components/CustomDataGrid'

const columns = [
  { id: 1, field: 'pillars', headerName: 'Pilar', flex: 1 },
  { id: 2, field: 'status', type: 'boolean', headerName: 'Estado', flex: 1 }
]

const rows = [
  { id: 1, pillars: 'Desarrollo comunitario', status: true },
  { id: 2, pillars: 'Desarrollo institucional', status: true },
  { id: 3, pillars: 'Incidencia en política', status: true },
  { id: 4, pillars: 'Promoción de la conciencia y acción social', status: true },
  { id: 5, pillars: 'RMI Legal', status: true }
]

export const Pillars = () => {
  return <CustomDataGrid title='Pilares' columns={columns} rows={rows} isLoading={false} />
}
