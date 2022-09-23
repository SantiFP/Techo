const columnsSelectYear = [
    { id: 1, field: 'country', headerName: 'País', flex: 1 },
    { id: 2, field: 'headquarter', headerName: 'Sede',  flex: 1 },
    { id: 3, field: 'status', headerName: 'Status', status:"status" , flex: 1 }
]
  
const rowsSelectYear = [
    { id: 1, country: 'Argentina', headquarter:"Buenos Aires Norte", status: "Activo" },
    { id: 2, country: 'Argentina', headquarter:"Buenos Aires Sur", status: "Inactivo" },
    { id: 3, country: 'Argentina', headquarter:"Buenos Aires Oeste", status: "Activo" },
    { id: 4, country: 'Argentina', headquarter:"Cordoba", status: "Activo" },
    { id: 5, country: 'Argentina', headquarter:"Corrientes - Chaco", status: "Inactivo" },
    { id: 6, country: 'Argentina', headquarter:"La Plata", status: "Activo" },
    { id: 7, country: 'Argentina', headquarter:"Neuquen - Rio Negro", status: "Inactivo"},
    { id: 8, country: 'Argentina', headquarter:"Posadas", status: "Activo" },
    { id: 9, country: 'Argentina', headquarter:"Neuquen - Rio Negro", status: "Activo" },
    { id: 10, country: 'Argentina', headquarter:"Rosario", status: "Activo" },
    { id: 11, country: 'Argentina', headquarter:"Salta", status: "Activo" },
    { id: 12, country: 'Argentina', headquarter:"Tucuman", status: "Inactivo" },
    { id: 13, country: 'Bolivia', headquarter:"Santa Cruz de la Sierra", status: "Activo" },
    { id: 14, country: 'Brasil', headquarter:"Rio de Janeiro", status: "Activo" },
    { id: 13, country: 'Brasil', headquarter:"Sao Paulo", status: "Activo" },
     { id: 14, country: 'Chile', headquarter:"Antofagasta", status: "Activo" },
     { id: 15, country: 'Chile', headquarter:"Araucaria", status: "Activo" },
     { id: 16, country: 'Chile', headquarter:"Antofagasta", status: "Activo" },
     { id: 17, country: 'Chile', headquarter:"Atacama", status: "Inactivo" },
     { id: 18, country: 'Chile', headquarter:"Biobio", status: "Activo" },
     { id: 20, country: 'Chile', headquarter:"Coquimbo", status: "Activo" },
     { id: 21, country: 'Chile', headquarter:"Los Lagos", status: "Inactivo" },
     { id: 22, country: 'Chile', headquarter:"Los Rios", status: "Activo" },
     { id: 23, country: 'Chile', headquarter:"Ñuble", status: "Activo" },
     { id: 24, country: 'Chile', headquarter:"Santiago", status: "Activo" },
     { id: 25, country: 'Chile', headquarter:"Tarapaca", status: "Activo" },
     { id: 26, country: 'Chile', headquarter:"Valparaiso", status: "Activo" },
]



const rows = [
    {id:1, Indicadores:"%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA" , Tipo: 'PROMEDIO' , Pilar: 'REPARADO', planannual:0.25 , realannual: 0.58 , rpannual: 1.1 , plan1:0.31 , real1: 0.18 , rp1: 1.1 , plan2:0.45 , real2: 0.18 , rp2: 0.3 , plan3:0.12 , real3: 0.28 , rp3: 1.1 , plan4:0.31 , real4: 0.18 , rp4: 1.3},
    {id:2, Indicadores:"%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA" , Tipo: 'PROMEDIO' , Pilar: 'DESARROLLO', planannual:0.35 , realannual: 0.28 , rpannual: 0.6 , plan1:0.31 , real1: 0.17 , rp1: 1.1 , plan2:0.44 , real2: 0.28 , rp2: 0.3 , plan3:0.12 , real3: 0.28 , rp3: 1.1 , plan4:0.31 , real4: 0.18 , rp4: 1.3},
    {id:3, Indicadores:"%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA" , Tipo: 'PROMEDIO' , Pilar: 'REEAGRUPACION', planannual:0.45 , realannual: 0.18 , rpannual: 2.4 , plan1:0.31 , real1: 0.17 , rp1: 1.2 , plan2:0.42 , real2: 0.44 , rp2: 0.3 , plan3:0.12 , real3: 0.28 , rp3: 1.1 , plan4:0.31 , real4: 0.18 , rp4: 1.3},
    {id:4, Indicadores:"%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA" , Tipo: 'PROMEDIO' , Pilar: 'EN CONSTRUCCION', planannual:0.75 , realannual: 0.68 , rpannual: 2.3 , plan1:0.31 , real1: 0.18 , rp1: 1.0 , plan2:0.20 , real2: 0.58 , rp2: 0.3 , plan3:0.12 , real3: 0.28 , rp3: 1.1 , plan4:0.31 , real4: 0.18 , rp4: 1.3},
    {id:5, Indicadores:"%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA" , Tipo: 'PROMEDIO' , Pilar: 'REEMPLAZO', planannual:0.25 , realannual: 0.58 , rpannual: 1.1 , plan1:0.31 , real1: 0.18 , rp1: 1.1 , plan2:0.45 , real2: 0.18 , rp2: 0.3 , plan3:0.12 , real3: 0.28 , rp3: 1.1 , plan4:0.31 , real4: 0.18 , rp4: 1.3},
    {id:6, Indicadores:"%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA" , Tipo: 'PROMEDIO' , Pilar: 'DESARROLLO', planannual:0.35 , realannual: 0.28 , rpannual: 0.6 , plan1:0.31 , real1: 0.17 , rp1: 1.1 , plan2:0.44 , real2: 0.28 , rp2: 0.3 , plan3:0.12 , real3: 0.28 , rp3: 1.1 , plan4:0.31 , real4: 0.18 , rp4: 1.3},
    {id:7, Indicadores:"%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA" , Tipo: 'PROMEDIO' , Pilar: 'DESARROLLO', planannual:0.45 , realannual: 0.18 , rpannual: 2.4 , plan1:0.31 , real1: 0.17 , rp1: 1.2 , plan2:0.42 , real2: 0.44 , rp2: 0.3 , plan3:0.12 , real3: 0.28 , rp3: 1.1 , plan4:0.31 , real4: 0.18 , rp4: 1.3},
    {id:8, Indicadores:"%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA" , Tipo: 'PROMEDIO' , Pilar: 'ACTIVIDAD', planannual:0.75 , realannual: 0.68 , rpannual: 2.3 , plan1:0.31 , real1: 0.18 , rp1: 1.0 , plan2:0.20 , real2: 0.58 , rp2: 0.3 , plan3:0.12 , real3: 0.28 , rp3: 1.1 , plan4:0.31 , real4: 0.18 , rp4: 1.3},
    {id:9, Indicadores:"%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA" , Tipo: 'PROMEDIO' , Pilar: 'REEMPLAZO', planannual:0.75 , realannual: 0.68 , rpannual: 2.3 , plan1:0.31 , real1: 0.18 , rp1: 1.0 , plan2:0.20 , real2: 0.58 , rp2: 0.3 , plan3:0.12 , real3: 0.28 , rp3: 1.1 , plan4:0.31 , real4: 0.18 , rp4: 1.3},
    {id:10, Indicadores:"%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA" , Tipo: 'PROMEDIO' , Pilar: 'REEAGRUPACION', planannual:0.25 , realannual: 0.58 , rpannual: 1.1 , plan1:0.31 , real1: 0.18 , rp1: 1.1 , plan2:0.45 , real2: 0.18 , rp2: 0.3 , plan3:0.12 , real3: 0.28 , rp3: 1.1 , plan4:0.31 , real4: 0.18 , rp4: 1.3},
    {id:11, Indicadores:"%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA" , Tipo: 'PROMEDIO' , Pilar: 'DESARROLLO', planannual:0.35 , realannual: 0.28 , rpannual: 0.6 , plan1:0.31 , real1: 0.17 , rp1: 1.1 , plan2:0.44 , real2: 0.28 , rp2: 0.3 , plan3:0.12 , real3: 0.28 , rp3: 1.1 , plan4:0.31 , real4: 0.18 , rp4: 1.3},
    {id:12, Indicadores:"%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA" , Tipo: 'PROMEDIO' , Pilar: 'REEMPLAZO', planannual:0.45 , realannual: 0.18 , rpannual: 2.4 , plan1:0.31 , real1: 0.17 , rp1: 1.2 , plan2:0.42 , real2: 0.44 , rp2: 0.3 , plan3:0.12 , real3: 0.28 , rp3: 1.1 , plan4:0.31 , real4: 0.18 , rp4: 1.3},
    {id:13, Indicadores:"%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA" , Tipo: 'PROMEDIO' , Pilar: 'REPARADO', planannual:0.25 , realannual: 0.58 , rpannual: 1.1 , plan1:0.31 , real1: 0.18 , rp1: 1.1 , plan2:0.45 , real2: 0.18 , rp2: 0.3 , plan3:0.12 , real3: 0.28 , rp3: 1.1 , plan4:0.31 , real4: 0.18 , rp4: 1.3},
    {id:14, Indicadores:"%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA" , Tipo: 'PROMEDIO' , Pilar: 'DESARROLLO', planannual:0.35 , realannual: 0.28 , rpannual: 0.6 , plan1:0.31 , real1: 0.17 , rp1: 1.1 , plan2:0.44 , real2: 0.28 , rp2: 0.3 , plan3:0.12 , real3: 0.28 , rp3: 1.1 , plan4:0.31 , real4: 0.18 , rp4: 1.3},
    {id:15, Indicadores:"%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA" , Tipo: 'PROMEDIO' , Pilar: 'REEAGRUPACION', planannual:0.45 , realannual: 0.18 , rpannual: 2.4 , plan1:0.31 , real1: 0.17 , rp1: 1.2 , plan2:0.42 , real2: 0.44 , rp2: 0.3 , plan3:0.12 , real3: 0.28 , rp3: 1.1 , plan4:0.31 , real4: 0.18 , rp4: 1.3},
    {id:16, Indicadores:"%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA" , Tipo: 'PROMEDIO' , Pilar: 'EN CONSTRUCCION', planannual:0.75 , realannual: 0.68 , rpannual: 2.3 , plan1:0.31 , real1: 0.18 , rp1: 1.0 , plan2:0.20 , real2: 0.58 , rp2: 0.3 , plan3:0.12 , real3: 0.28 , rp3: 1.1 , plan4:0.31 , real4: 0.18 , rp4: 1.3},
    {id:17, Indicadores:"%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA" , Tipo: 'PROMEDIO' , Pilar: 'REEMPLAZO', planannual:0.25 , realannual: 0.58 , rpannual: 1.1 , plan1:0.31 , real1: 0.18 , rp1: 1.1 , plan2:0.45 , real2: 0.18 , rp2: 0.3 , plan3:0.12 , real3: 0.28 , rp3: 1.1 , plan4:0.31 , real4: 0.18 , rp4: 1.3},
    {id:18, Indicadores:"%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA" , Tipo: 'PROMEDIO' , Pilar: 'DESARROLLO', planannual:0.35 , realannual: 0.28 , rpannual: 0.6 , plan1:0.31 , real1: 0.17 , rp1: 1.1 , plan2:0.44 , real2: 0.28 , rp2: 0.3 , plan3:0.12 , real3: 0.28 , rp3: 1.1 , plan4:0.31 , real4: 0.18 , rp4: 1.3},
    {id:19, Indicadores:"%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA" , Tipo: 'PROMEDIO' , Pilar: 'DESARROLLO', planannual:0.45 , realannual: 0.18 , rpannual: 2.4 , plan1:0.31 , real1: 0.17 , rp1: 1.2 , plan2:0.42 , real2: 0.44 , rp2: 0.3 , plan3:0.12 , real3: 0.28 , rp3: 1.1 , plan4:0.31 , real4: 0.18 , rp4: 1.3},
    {id:20, Indicadores:"%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA" , Tipo: 'PROMEDIO' , Pilar: 'ACTIVIDAD', planannual:0.75 , realannual: 0.68 , rpannual: 2.3 , plan1:0.31 , real1: 0.18 , rp1: 1.0 , plan2:0.20 , real2: 0.58 , rp2: 0.3 , plan3:0.12 , real3: 0.28 , rp3: 1.1 , plan4:0.31 , real4: 0.18 , rp4: 1.3},
    {id:21, Indicadores:"%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA" , Tipo: 'PROMEDIO' , Pilar: 'REEMPLAZO', planannual:0.75 , realannual: 0.68 , rpannual: 2.3 , plan1:0.31 , real1: 0.18 , rp1: 1.0 , plan2:0.20 , real2: 0.58 , rp2: 0.3 , plan3:0.12 , real3: 0.28 , rp3: 1.1 , plan4:0.31 , real4: 0.18 , rp4: 1.3},
    {id:22, Indicadores:"%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA" , Tipo: 'PROMEDIO' , Pilar: 'REEAGRUPACION', planannual:0.25 , realannual: 0.58 , rpannual: 1.1 , plan1:0.31 , real1: 0.18 , rp1: 1.1 , plan2:0.45 , real2: 0.18 , rp2: 0.3 , plan3:0.12 , real3: 0.28 , rp3: 1.1 , plan4:0.31 , real4: 0.18 , rp4: 1.3},
    {id:23, Indicadores:"%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA" , Tipo: 'PROMEDIO' , Pilar: 'DESARROLLO', planannual:0.35 , realannual: 0.28 , rpannual: 0.6 , plan1:0.31 , real1: 0.17 , rp1: 1.1 , plan2:0.44 , real2: 0.28 , rp2: 0.3 , plan3:0.12 , real3: 0.28 , rp3: 1.1 , plan4:0.31 , real4: 0.18 , rp4: 1.3},
    {id:24, Indicadores:"%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA" , Tipo: 'PROMEDIO' , Pilar: 'REEMPLAZO', planannual:0.45 , realannual: 0.18 , rpannual: 2.4 , plan1:0.31 , real1: 0.17 , rp1: 1.2 , plan2:0.42 , real2: 0.44 , rp2: 0.3 , plan3:0.12 , real3: 0.28 , rp3: 1.1 , plan4:0.31 , real4: 0.18 , rp4: 1.3},
];



export { columnsSelectYear , rowsSelectYear , rows }