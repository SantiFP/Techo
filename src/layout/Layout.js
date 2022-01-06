import React from 'react'
import { Box } from '@mui/material'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'

export const Layout = ({ children }) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      style={{ minHeight: '100vh' }}
      sx={{ bgcolor: '#f9f9f9' }}
    >
      <Header />
      {children}
      <Footer />
    </Box>
  )
}
