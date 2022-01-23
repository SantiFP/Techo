import React from 'react'
import { Box, Container } from '@mui/material'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'

export const Layout = ({ children }) => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f9f9f9' }}
    >
      <Header />
      {/* Agregar la siguiente prop para centrar verticalmente el contenido
      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1, py: 5 }} */}
      <Container sx={{ py: 5 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  )
}
