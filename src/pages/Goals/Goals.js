import { Grid , Typography } from "@mui/material"
import { Container } from "@mui/system"
import PageTitle from "components/PageTitle"
import SelectYear from "components/SelectYear/SelectYear"

const Goals = () =>{
    
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
                        <SelectYear/>
                    </Grid>
                    <Grid item xs={11} container>
                        <Typography variant='subtitle1' sx={{ fontWeight: "bold", marginTop: 4,textTransform: 'uppercase' }}>2021</Typography>
                    </Grid>
                   
                </Grid>
            </Container>
        </>
    )
}

export default Goals