import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import { Layout } from './layout/Layout'
import { Theme } from './theme/Theme'
import { Home } from './pages/HomePage/Home'
import { Diagnostico } from './pages/Diagnostico'
import { NoMatchRoute } from './pages/NoMatchRoutePage/NoMatchRoute'
import { LoadingContextProvider } from './contexts/LoadingContext'
import CrearFoda from './components/CrearFoda'
import DataStudio from './components/DataStudio'
import VerFodaAnterior from './components/VerFodaAnterior'
import { FodaContextProvider } from './contexts/FodaContext'
import FodaActual from './components/FodaActual'


export const App = () => {
  return (
    <LoadingContextProvider>
      <FodaContextProvider>
        <Router>
          <Theme>
            <Layout>
              <Container>
                <Box sx={{ py: 4 }}>
                  <Switch>
                    <Route
                      exact
                      path='/'
                      component={Home}
                    />
                    <Route
                      exact
                      path='/diagnostico'
                      component={Diagnostico}
                    />
                    <Route
                      exact
                      path='/diagnostico/dataStudio'
                      component={DataStudio}
                    />
                    <Route
                      exact
                      path='/diagnostico/verFodaAnterior'
                      component={VerFodaAnterior}
                    />
                    <Route
                      exact
                      path='/diagnostico/fodaActual'
                      component={FodaActual}
                    />
                    <Route path='*'>
                      <NoMatchRoute />
                    </Route>
                  </Switch>
                </Box>
              </Container>
            </Layout>
          </Theme>
        </Router>
      </FodaContextProvider>
    </LoadingContextProvider>
  )
}
