import { styled } from "@mui/material/styles";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
  GridToolbarQuickFilter,
  GridOverlay,
  esES,
  gridClasses,
} from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import React from "react";
import { LinearProgress } from "@mui/material";
import Box from "@mui/material/Box";

import "./GoalsTableDatagrid.css";

function customCheckbox(theme) {
  return {
    "& .MuiCheckbox-root svg": {
      width: 20,
      height: 20,
      backgroundColor: "white",
      border: `1px solid rgb(67, 67, 67)`,
      borderRadius: 4,
    },
    "& .css-1umjlfl-MuiButtonBase-root-MuiCheckbox-root": {
      color: "white",
    },
  };
}

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  color: "rgba(0,0,0,.85)",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  WebkitFontSmoothing: "auto",
  letterSpacing: "normal",
  "& .MuiDataGrid-columnHeaders": {
    borderRadius: "10px 10px 0 0",
  },
  "& .MuiDataGrid-columnsContainer": {
    backgroundColor: theme.palette.mode === "light" ? "#fafafa" : "#424242",
  },
  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell, .MuiDataGrid-columnHeaders":
    {
      border: "none",
    },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
    borderRight: `2px solid ${
      theme.palette.mode === "light" ? "#fff" : "#424242"
    }`,
  },
  "& .MuiDataGrid-columnHeader:last-of-type, .MuiDataGrid-cell:last-of-type ": {
    borderRight: "none",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    padding: `0px 12px`,
  },
  "& .MuiPaginationItem-root": {
    borderRadius: 0,
  },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-columnHeadersInner": {
    backgroundColor: theme.palette.primary.main,
    color: "#f0f0f0",
    height: "100%",
  },

  "& .MuiDataGrid-columnHeader": {
    padding: 0,
  },
  "& .MuiDataGrid-sortIcon": {
    color: "#f0f0f0",
  },
  "& .MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus": {
    outline: "none",
  },
  "& .MuiDataGrid-row": {
    maxHeight: "inherit !important",
    minHeight: "inherit !important",
    height: "100%",
    cursor: "pointer",
  },
  "& .MuiDataGrid-cell": {
    maxHeight: "inherit !important",
    minHeight: "inherit !important",
    padding: 12,
    whiteSpace: "normal",
  },
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: "#E5E5E5",
  },
  [`& .${gridClasses.row}.odd`]: {
    backgroundColor: "#D8D8D8",
  },
  ".MuiDataGrid-booleanCell": {
    color: "rgba(0, 0, 0, 0.6)!important",
  },

  ...customCheckbox(theme),
}));

const rows = [
  {
    id: 1,
    Indicadores: "%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA",
    Tipo: "PROMEDIO",
    Pilar: "REPARADO",
    planannual: 0.25,
    realannual: 0.58,
    rpannual: 1.1,
    plan1: 0.31,
    real1: 0.18,
    rp1: 1.1,
    plan2: 0.45,
    real2: 0.18,
    rp2: 0.3,
    plan3: 0.12,
    real3: 0.28,
    rp3: 1.1,
    plan4: 0.31,
    real4: 0.18,
    rp4: 1.3,
  },
  {
    id: 2,
    Indicadores: "%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA",
    Tipo: "PROMEDIO",
    Pilar: "DESARROLLO",
    planannual: 0.35,
    realannual: 0.28,
    rpannual: 0.6,
    plan1: 0.31,
    real1: 0.17,
    rp1: 1.1,
    plan2: 0.44,
    real2: 0.28,
    rp2: 0.3,
    plan3: 0.12,
    real3: 0.28,
    rp3: 1.1,
    plan4: 0.31,
    real4: 0.18,
    rp4: 1.3,
  },
  {
    id: 3,
    Indicadores: "%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA",
    Tipo: "PROMEDIO",
    Pilar: "REEAGRUPACION",
    planannual: 0.45,
    realannual: 0.18,
    rpannual: 2.4,
    plan1: 0.31,
    real1: 0.17,
    rp1: 1.2,
    plan2: 0.42,
    real2: 0.44,
    rp2: 0.3,
    plan3: 0.12,
    real3: 0.28,
    rp3: 1.1,
    plan4: 0.31,
    real4: 0.18,
    rp4: 1.3,
  },
  {
    id: 4,
    Indicadores: "%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA",
    Tipo: "PROMEDIO",
    Pilar: "EN CONSTRUCCION",
    planannual: 0.75,
    realannual: 0.68,
    rpannual: 2.3,
    plan1: 0.31,
    real1: 0.18,
    rp1: 1.0,
    plan2: 0.2,
    real2: 0.58,
    rp2: 0.3,
    plan3: 0.12,
    real3: 0.28,
    rp3: 1.1,
    plan4: 0.31,
    real4: 0.18,
    rp4: 1.3,
  },
  {
    id: 5,
    Indicadores: "%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA",
    Tipo: "PROMEDIO",
    Pilar: "REEMPLAZO",
    planannual: 0.25,
    realannual: 0.58,
    rpannual: 1.1,
    plan1: 0.31,
    real1: 0.18,
    rp1: 1.1,
    plan2: 0.45,
    real2: 0.18,
    rp2: 0.3,
    plan3: 0.12,
    real3: 0.28,
    rp3: 1.1,
    plan4: 0.31,
    real4: 0.18,
    rp4: 1.3,
  },
  {
    id: 6,
    Indicadores: "%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA",
    Tipo: "PROMEDIO",
    Pilar: "DESARROLLO",
    planannual: 0.35,
    realannual: 0.28,
    rpannual: 0.6,
    plan1: 0.31,
    real1: 0.17,
    rp1: 1.1,
    plan2: 0.44,
    real2: 0.28,
    rp2: 0.3,
    plan3: 0.12,
    real3: 0.28,
    rp3: 1.1,
    plan4: 0.31,
    real4: 0.18,
    rp4: 1.3,
  },
  {
    id: 7,
    Indicadores: "%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA",
    Tipo: "PROMEDIO",
    Pilar: "DESARROLLO",
    planannual: 0.45,
    realannual: 0.18,
    rpannual: 2.4,
    plan1: 0.31,
    real1: 0.17,
    rp1: 1.2,
    plan2: 0.42,
    real2: 0.44,
    rp2: 0.3,
    plan3: 0.12,
    real3: 0.28,
    rp3: 1.1,
    plan4: 0.31,
    real4: 0.18,
    rp4: 1.3,
  },
  {
    id: 8,
    Indicadores: "%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA",
    Tipo: "PROMEDIO",
    Pilar: "ACTIVIDAD",
    planannual: 0.75,
    realannual: 0.68,
    rpannual: 2.3,
    plan1: 0.31,
    real1: 0.18,
    rp1: 1.0,
    plan2: 0.2,
    real2: 0.58,
    rp2: 0.3,
    plan3: 0.12,
    real3: 0.28,
    rp3: 1.1,
    plan4: 0.31,
    real4: 0.18,
    rp4: 1.3,
  },
  {
    id: 9,
    Indicadores: "%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA",
    Tipo: "PROMEDIO",
    Pilar: "REEMPLAZO",
    planannual: 0.75,
    realannual: 0.68,
    rpannual: 2.3,
    plan1: 0.31,
    real1: 0.18,
    rp1: 1.0,
    plan2: 0.2,
    real2: 0.58,
    rp2: 0.3,
    plan3: 0.12,
    real3: 0.28,
    rp3: 1.1,
    plan4: 0.31,
    real4: 0.18,
    rp4: 1.3,
  },
  {
    id: 10,
    Indicadores: "%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA",
    Tipo: "PROMEDIO",
    Pilar: "REEAGRUPACION",
    planannual: 0.25,
    realannual: 0.58,
    rpannual: 1.1,
    plan1: 0.31,
    real1: 0.18,
    rp1: 1.1,
    plan2: 0.45,
    real2: 0.18,
    rp2: 0.3,
    plan3: 0.12,
    real3: 0.28,
    rp3: 1.1,
    plan4: 0.31,
    real4: 0.18,
    rp4: 1.3,
  },
  {
    id: 11,
    Indicadores: "%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA",
    Tipo: "PROMEDIO",
    Pilar: "DESARROLLO",
    planannual: 0.35,
    realannual: 0.28,
    rpannual: 0.6,
    plan1: 0.31,
    real1: 0.17,
    rp1: 1.1,
    plan2: 0.44,
    real2: 0.28,
    rp2: 0.3,
    plan3: 0.12,
    real3: 0.28,
    rp3: 1.1,
    plan4: 0.31,
    real4: 0.18,
    rp4: 1.3,
  },
  {
    id: 12,
    Indicadores: "%PLDV - PROMEDIO LIBRE DISPOSICION VIVIENDA",
    Tipo: "PROMEDIO",
    Pilar: "REEMPLAZO",
    planannual: 0.45,
    realannual: 0.18,
    rpannual: 2.4,
    plan1: 0.31,
    real1: 0.17,
    rp1: 1.2,
    plan2: 0.42,
    real2: 0.44,
    rp2: 0.3,
    plan3: 0.12,
    real3: 0.28,
    rp3: 1.1,
    plan4: 0.31,
    real4: 0.18,
    rp4: 1.3,
  },
];

const columns = [
  {
    field: "Indicadores",
    headerName: (
      <Box
        sx={{
          p: 0,
          pb: 0,
        }}
      >
        <GridToolbarQuickFilter
          sx={{
            borderTop: 3,
            paddingLeft: 2,
            paddingRight: 2,
            width: 350,
            backgroundColor: "white",
            borderRadius: 3,
          }}
          placeholder="Buscar…"
        />
      </Box>
    ),
    width: 450,
    editable: true,
  },
  { field: "Tipo", headerName: "", width: 170, editable: true },
  { field: "Pilar", headerName: "", width: 170, editable: true },
  {
    field: "planannual",
    headerName: "PLAN",
    width: 100,
    editable: true,
  },
  {
    field: "realannual",
    headerName: "REAL",
    width: 100,
    editable: true,
  },
  {
    field: "rpannual",
    headerName: "%(R/P)",
    width: 100,
    editable: true,
  },
  {
    field: "plan1",
    headerName: "PLAN",
    width: 100,
    editable: true,
  },
  {
    field: "real1",
    headerName: "REAL",
    width: 100,
    editable: true,
  },
  {
    field: "rp1",
    headerName: "%(R/P)",
    width: 100,
    editable: true,
  },
  {
    field: "plan2",
    headerName: "PLAN",
    width: 100,
    editable: true,
  },
  {
    field: "real2",
    headerName: "REAL",
    width: 100,
    editable: true,
  },
  {
    field: "rp2",
    headerName: "%(R/P)",
    width: 100,
    editable: true,
  },
  {
    field: "plan3",
    headerName: "PLAN",
    width: 100,
    editable: true,
  },
  {
    field: "real3",
    headerName: "REAL",
    width: 100,
    editable: true,
  },
  {
    field: "rp3",
    headerName: "%(R/P)",
    width: 100,
  },
  {
    field: "plan4",
    headerName: "PLAN",
    width: 100,
    editable: true,
  },
  {
    field: "real4",
    headerName: "REAL",
    width: 100,
    editable: true,
  },
  {
    field: "rp4",
    headerName: "%(R/P)",
    width: 100,
    editable: true,
  },
];

const columnGroupingModel = [
  {
    groupId: "Indicators",
    headerName: "INDICADORES",
    description: "",
    children: [{ field: "Indicadores" }],
  },
  {
    groupId: "Type",
    headerName: "TIPO",
    freeReordering: true,
    children: [{ field: "Tipo" }],
  },
  {
    groupId: "Pilar",
    headerName: "PILAR",
    freeReordering: true,
    children: [{ field: "Pilar" }],
  },
  {
    groupId: "Anual",
    headerName: "ANUAL",
    headerClassName: "anual-header",
    freeReordering: true,
    children: [
      { field: "planannual" },
      { field: "realannual" },
      { field: "rpannual" },
    ],
  },
  {
    groupId: "First",
    headerName: "1ER TRIMESTRE",
    headerClassName: "first-header",
    freeReordering: true,
    children: [{ field: "plan1" }, { field: "real1" }, { field: "rp1" }],
  },
  {
    groupId: "Second",
    headerName: "2DO TRIMESTRE",
    headerClassName: "second-header",
    freeReordering: true,
    children: [{ field: "plan2" }, { field: "real2" }, { field: "rp2" }],
  },
  {
    groupId: "Third",
    headerName: "3ER TRIMESTRE",
    headerClassName: "third-header",
    freeReordering: true,
    children: [{ field: "plan3" }, { field: "real3" }, { field: "rp3" }],
  },
  {
    groupId: "Four",
    headerName: "4TO TRIMESTRE",
    headerClassName: "four-header",
    freeReordering: true,
    children: [{ field: "plan4" }, { field: "real4" }, { field: "rp4" }],
  },
];

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      page={page + 1}
      count={pageCount}
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

function LinearLoadingOverlay() {
  return (
    <GridOverlay sx={{ backgroundColor: "#fafafa" }}>
      <div style={{ position: "absolute", top: 0, width: "100%" }}>
        <LinearProgress />
      </div>
    </GridOverlay>
  );
}

export default function GoalsTableDatagrid(
  handleOpenModalDetails,
  isDisableSelectionOnClick,
  hasCheckbox,
  isLoading
) {
  return (
    <div style={{ height: 700, width: "100%" }}>
      <StyledDataGrid
        onRowClick={
          handleOpenModalDetails &&
          ((params) => handleOpenModalDetails(params.rows))
        }
        loading={isLoading}
        rows={rows}
        columns={columns}
        experimentalFeatures={{ columnGrouping: true, newEditingApi: true }}
        pageSize={8}
        rowsPerPageOptions={[5]}
        disableColumnMenu
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableSelectionOnClick={isDisableSelectionOnClick}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        columnGroupingModel={columnGroupingModel}
        components={{
          Pagination: CustomPagination,
          LoadingOverlay: LinearLoadingOverlay,
        }}
        /*componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        */
        checkboxSelection={hasCheckbox}
        getRowClassName={(params) => (params.id % 2 === 0 ? "even" : "odd")}
      />
    </div>
  );
}
