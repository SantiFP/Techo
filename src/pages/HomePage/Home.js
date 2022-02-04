
import React from 'react'
import { Container, Typography } from '@mui/material'

export default function Home () {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant='h1' sx={{ textTransform: 'uppercase' }}>Inicio</Typography>
    </Container>
  )
}
