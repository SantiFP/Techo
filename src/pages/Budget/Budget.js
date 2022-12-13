import FilterSelect from "./Select/FilterSelect";
import { Box, Typography, Stack } from "@mui/material";
import Styles from "./Budget.module.css";
import { useState } from "react";
import Nav from "./Nav/Nav";
import Modal from "./Modal/Modal";
import Buttons from "./Nav/Buttons";
import Table from "./Table/Table";

const Budget = () => {
  const years = [2018, 2019, 2020, 2021];
  const type = ["INDICADORES", "INGRESOS", "EGRESOS", "RESUMEN"];
  const [year, setYear] = useState("");
  const [tableType, setTableType] = useState("");
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const onTableChange = (e) => {
    setTableType(e.target.value);
  };

  const onYearChange = (e) => {
    setYear(e.target.value);
  };

  return (
    <>
      <Stack alignItems="center" justifyContent="center" spacing={4} mb={4}>
        <Typography variant="h1" sx={{ textTransform: "uppercase" }}>
          PRESUPUESTO
        </Typography>
      </Stack>
      <Typography fontWeight={"medium"} paddingBottom={3}>
        Selecciona la tabla y el año que deseas ver:
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <div className={Styles["table-margin"]}>
          <FilterSelect
            selected={tableType}
            onItemSelection={onTableChange}
            selectItems={type}
            selectTitle={"Seleccionar tabla"}
          />
        </div>
        <FilterSelect
          selected={year}
          onItemSelection={onYearChange}
          selectItems={years}
          selectTitle={"Seleccionar año"}
        />
      </Box>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: "bold",
          marginTop: 3.5,
          textTransform: "uppercase",
        }}
      >
        Resumen {year}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Nav />
        <Buttons onShowModal={showModalHandler} />
      </Box>
      {showModal && <Modal onClose={hideModalHandler} />}
      <Table/>
    </>
  );
};

export default Budget;
