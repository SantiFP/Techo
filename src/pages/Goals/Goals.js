import { Grid , Typography } from "@mui/material"
import { Container } from "@mui/system"

//Components
import PageTitle from "components/PageTitle"
import SelectYear from "pages/Goals/SelectYear/SelectYear"
import GoalsTable from "./GoalsTable/GoalsTable";

//Hooks
import { useState } from 'react';

//Records
import { columnsSelectYear , rowsSelectYear } from './recordsGoals/RecordsGoals';
import TablePerYear from "./GoalsTable/TablePerYear/TablePerYear";

import DataGridDemo from "./TestTable";


const Goals = () =>{
    const [year, setYear] = useState('Año');
    
    return(
        <>
            <Container maxWidth="xl" > 
                <PageTitle
                title="Metas"
                />
                <Grid 
                container 
                justifyContent="center"
                alignItems="center">
                    <Grid item xs={11} container>
                        <SelectYear cantidad = {year} actualizarCantidad = {setYear}/>
                    </Grid>
                    <Grid item xs={11} container>
                        <Typography variant='subtitle1' sx={{ fontWeight: "bold", marginTop: 4,textTransform: 'uppercase' }}>{year}</Typography>
                    </Grid>
                    
                  <GoalsTable columns={columnsSelectYear} rows={rowsSelectYear} isLoading={false} />
                </Grid>
            </Container>
        </>
    )
}

export default Goals