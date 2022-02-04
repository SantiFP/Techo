import CustomDataGrid from 'components/CustomDataGrid'

const columns = [
  { id: 1, field: 'indicator', headerName: 'Indicador', flex: 1 },
  { id: 2, field: 'description', headerName: 'Descripción', flex: 1 },
  { id: 3, field: 'temporality', headerName: 'Temporalidad', flex: 1 },
  { id: 4, field: 'type', headerName: 'Tipo', flex: 1 },
  { id: 5, field: 'pillar', headerName: 'Pilar estratégico', flex: 1 },
  { id: 6, field: 'area', headerName: 'Área', flex: 1 },
  { id: 7, field: 'status', type: 'boolean', headerName: 'Estado', flex: 1 },
  { id: 8, field: 'country', headerName: 'País', flex: 1 }
]

const rows = [
  { id: 1, indicator: '$ Tipo de cambio USD', description: 'Valor del tipo de cambio del mes que se utilizó para hacer la conversión de moneda local a USD en los diferentes valores de los indicadores.', temporality: 'Mensual', type: 'Último', pillar: 'Desarrollo institucional', area: 'Administración y finanzas', status: true, country: 'standard' },
  { id: 2, indicator: '% Convenios y contratos con el poder público (local/nacional)', description: 'Porcentaje de relación con el poder publico formalizada.', temporality: 'Trimestral', type: 'Promedio', pillar: 'Incidencia en política', area: 'Legal', status: true, country: 'standard' },
  { id: 3, indicator: '% Convenios y contratos de donación, cooperación y/u otros ingresos', description: 'Porcetaje de contratos y/o convenios firmados de ejecución del objeto. Ejemplo, si tengo 10 alianzas gestionadas y en ejecucion, y solo 5 convenios firmados que soportan dichas alianzas, el porcentaje seria 50%. Si tengo todas las alianzas gestionadas con contratos firmados, tengo un 100% de firmas que soportan las relaciones contractuales.', temporality: 'Trimestral', type: 'Promedio', pillar: 'Desarrollo institucional', area: 'Legal', status: true, country: 'standard' },
  { id: 4, indicator: '% Convenios y contratos egresos (proveedores, arriendo y etc)', description: 'Porcentaje de contratos y/o convenios firmados de ejecución del objeto', temporality: 'Trimestral', type: 'Promedio', pillar: 'Desarrollo institucional', area: 'Legal', status: true, country: 'standard' },
  { id: 5, indicator: '% PLDV - Promedio Libre Disposición Vivienda', description: 'Indicador que mide el porcentaje de libre disposición sobre el precio de venta en las VDE al comparar con el costo. Se calcula del siguiente modo: Precio de Venta menos Precio de Costo entre Precio de Venta por cien', temporality: 'Trimestral', type: 'Promedio', pillar: 'Desarrollo institucional', area: 'Administración y finanzas', status: true, country: 'standard' },
  { id: 6, indicator: '% Regularización laboral', description: 'Porcentaje de regularización laboral considerando 3 variables: contratados regularizado, liquidaciones formalizadas y pago de prestación social.', temporality: 'Trimestral', type: 'Último', pillar: 'Desarrollo institucional', area: 'Legal', status: true, country: 'standard' },
  { id: 7, indicator: '%CEF - Porcentaje de Cobertura de Egresos Fijos', description: 'Indicador que mide el porcentaje de egresos fijos que son cubiertos con ingresos fijos. Se calcula tomando la sumatoria de los ingresos fijos del período y se divide entre la sumatoria de los egresos fijos del período', temporality: 'Trimestral', type: 'Último', pillar: 'Desarrollo institucional', area: 'Administración y finanzas', status: true, country: 'standard' }
]

export default function Indicators () {
  return <CustomDataGrid title='Indicadores' columns={columns} rows={rows} isLoading={false} />
}
