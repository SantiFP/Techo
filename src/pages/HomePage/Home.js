
import React from 'react'
import { Container, Typography } from '@mui/material'
import GreenBox from './GreenBox/GreenBox';
import './home.css';

export default function Home () {

  const usuario = "ELÍAS";

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant='h1' sx={{ textTransform: 'uppercase' }}>¡HOLA {usuario}! 👋🏻</Typography>
      <GreenBox />
    </Container>
  )
}
