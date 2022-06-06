import React from 'react';
import PageTitle from 'components/PageTitle';
import SearchStack from 'components/SearchStack';
import ViewChips from './ViewChips';
import UserCard from './UserCard';
import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import styled from '@emotion/styled';


const GoalContainer = styled(Box)(({ theme }) => ({

  backgroundColor: "#FFF",
  width: '100%',
  borderRadius: '10px',
  border:` 1px solid ${theme.palette.primary.main}` ,
  padding: theme.spacing(4),


}));

const Title = styled(Typography)(({ theme }) => ({

  color: "#333",
  fontSize: theme.typography.subtitle1.fontSize,
  fontWeight: "bold",
  lineHeight: 1

}));

const PersonalGoalsContainer = () => {


  return (
    <>
      <PageTitle title='Objetivos personales' buttonTitle='Crear Objetivo' handleOpenModal={() => { }} />

      <ViewChips />

      <SearchStack quantity={2} title="Objetivos en total" searchPlaceholder="Buscar objetivo" />

      <Stack direction={"row"} spacing={4}>
        <UserCard />
        <GoalContainer >

          <Stack direction={"row"} sx={{justifyContent:'space-between'}} >
            <Title variant='subtitle1' fontWeight={"bold"} color="black">NOMBRE DEL OBJETIVO</Title>



          </Stack>

        </GoalContainer>
      </Stack>

    </>
  );
}

export default PersonalGoalsContainer;