import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
import { useLocation } from 'react-router-dom';

const PageTitle = ({ title, buttonTitle, handleOpenModal }) => {
    //Sebas: Agregue locationGoals para determinart que si esta en la pathname /goals no se muestre boton 
    let location = useLocation();
    const locationGoals = location.pathname
    
    return (
        <Stack direction='row' alignItems='center' justifyContent='center' spacing={4} mb={4}>
            <Typography variant='h1' sx={{ textTransform: 'uppercase' }}>{title}</Typography>
            {locationGoals !== '/goals' && 
            <Button
                variant='contained'
                startIcon={<AddIcon />}
                onClick={handleOpenModal}
                disableElevation
            >
                {buttonTitle}
            </Button>
            }
        </Stack>
    );
}

export default PageTitle;