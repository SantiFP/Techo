
import React from 'react'
import { Container, Typography } from '@mui/material'
import GreenBox from './GreenBox/GreenBox';

export default function Home () {

  const usuario = "Jeyther";

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap:4 }}
    >
      <Typography variant='h1' sx={{ textTransform: 'uppercase' }}>¡HOLA {usuario}! 👋🏻</Typography>
      <GreenBox />
      <GreenBox />
    </Container>
  )
}


