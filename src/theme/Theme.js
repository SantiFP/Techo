import React from 'react'
import { ThemeProvider, StyledEngineProvider, CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5'
    },
    secondary: {
      main: '#EA6D4F'
    }
  },
  typography: {
    fontFamily: "'Work Sans', 'Arial', sans-serif",
    h1: {
      fontSize: '60px',
      fontWeight: 'bold'
    },
    h2: {
      fontSize: '45px',
      fontWeight: 'bold'
    },
    subtitle1: {
      fontSize: '39px',
      fontWeight: 'light'
    },
    body1: {
      fontSize: '18px',
      fontWeight: 'light'
    }
  }
})

export const Theme = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
