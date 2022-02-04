import { ThemeProvider, StyledEngineProvider, CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#0092DD'
    },
    secondary: {
      main: '#EA6D4F'
    }
  },
  typography: {
    fontFamily: "'Work Sans', 'Arial', sans-serif",
    h1: {
      fontSize: '50px',
      fontWeight: 'bold'
    },
    h2: {
      fontSize: '20px',
      fontWeight: 'bold'
    },
    subtitle1: {
      fontSize: '30px',
      fontWeight: 'light'
    },
    subtitle2: {
      fontSize: '20px',
      fontWeight: 600
    },
    body1: {
      fontSize: '18px',
      fontWeight: 'light'
    }
  }
})

export default function Theme ({ children }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
