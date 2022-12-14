import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import React from "react";

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
  "& .MuiPaginationItem-root": {
    borderRadius: 0,
  },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-columnHeadersInner": {
    backgroundColor: theme.palette.primary.main,
    color: "#f0f0f0",
    height: "100%",
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
    // height: 'auto',
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
    backgroundColor: "#DBD5D5 ",
  },
  [`& .${gridClasses.row}.odd`]: {
    backgroundColor: "#BDB8B8",
  },
  ".MuiDataGrid-booleanCell": {
    color: "rgba(0, 0, 0, 0.6)!important",
  },
}));

const CustomTableBudget = ({ rows, columns }) => {
  return (
    <Stack sx={{ height: 365 ,width: '85%',margin: 'auto'}}>
      <StyledDataGrid
        rows={rows}
        columns={columns}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
      />
      ;
    </Stack>
  );
};

export default CustomTableBudget;
