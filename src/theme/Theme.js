import { createContext, useContext, useMemo, useState } from 'react'
import { ThemeProvider, StyledEngineProvider, CssBaseline, createTheme } from '@mui/material'
// import { createTheme } from '@mui/material/styles'

export const useColorMode = () => useContext(ThemeContext);

const ThemeContext = createContext({});

export default function Theme({ children }) {

  const [mode, setMode] = useState('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(() =>

    createTheme({

      palette: {
        mode,
        primary: {
          main: '#0092DD'
        },
        secondary: {
          main: '#EA6D4F'
        },
        ...(mode === 'dark' && {
          background: {
            default: '#303030',
            paper: '#424242'
          }
        })
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
          fontWeight: 'lighter'
        },
        subtitle2: {
          fontSize: '20px',
          fontWeight: 600
        },
        body1: {
          fontSize: '18px',
          fontWeight: 'lighter'
        }
      }

    }), [mode]

  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </StyledEngineProvider>
  )
}

