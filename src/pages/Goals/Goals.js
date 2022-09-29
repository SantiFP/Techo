import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

//Components
import PageTitle from "components/PageTitle";
import SelectYear from "pages/Goals/SelectYear/SelectYear";
import GoalsTable from "./GoalsTable/GoalsTable";

//Hooks
import { useState , useEffect } from "react";

//Records
import { columnsSelectYear, selectRows } from "./recordsGoals/RecordsGoals";

const Goals = () => {

  const [year, setYear] = useState("Año");

  const [rowsSelection, setRows] = useState();
  const [headquarter, setHeadquarter] = useState();

  const [openTable, setOpenTable] = useState(true);

  
  const addProduct = (event) => {
    
    setYear(event.target.value);
   
    for (let i = 0; i < selectRows.length; i++) {
      if (selectRows[i].headquarter === headquarter) {
        const selecter = selectRows[i].element;
        for (let i = 0; i < selecter.length; i++) {
         
          if (selecter[i].year === event.target.value) {
            setOpenTable(false);
            setRows(selecter[i].elements);
          }
        }
      }
    }
  };

  function detailsHeadquarter(e) {
    for (let i = 0; i < selectRows.length; i++) {
      if (
        e.target.closest(".MuiDataGrid-row").getAttribute("data-id") ===
        selectRows[i].id.toString()
      ) {
        setHeadquarter(selectRows[i].headquarter);

        const selected = selectRows[i].element;
        for (let i = 0; i < selected.length; i++) {
          if (selected[i].year === year) {
            setOpenTable(false);
            setRows(selected[i].elements);
            
          }
        }
      }
    }
  }
  useEffect(() => {
   
    setOpenTable(openTable);
    setRows(rowsSelection);

  }, [openTable, rowsSelection]);

  return (
    <>
      <Container maxWidth="xl">
        <PageTitle title="Metas" />
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} container sx={{paddingLeft:"24px"}}>
            <SelectYear cantidad={year} addProduct={addProduct} />
          </Grid>
          <Grid item xs={12} sx={{paddingLeft:"24px" , marginBottom:2}} container>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                marginTop: 3.5,
                textTransform: "uppercase",
              }}
            >
              {year}
            </Typography>
          </Grid>
          <GoalsTable
            columns={columnsSelectYear}
            rows={selectRows}
            openTable={openTable}
            setOpenTable={setOpenTable}
            rowsSelection={rowsSelection}
            isLoading={false}
            year={year}
            setRows={setRows}
            detailsHeadquarter={detailsHeadquarter}
          />
        </Grid>
      
      </Container>
    </>
  );
};

export default Goals;
