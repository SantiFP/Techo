import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import { Layout } from './layout/Layout'
import { Theme } from './theme/Theme'
import { Home } from './pages/HomePage/Home'
import { NoMatchRoute } from './pages/NoMatchRoutePage/NoMatchRoute'
import { LoadingContextProvider } from './contexts/LoadingContext'

export const App = () => {
  return (
    <LoadingContextProvider>
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
                  <Route path='*'>
                    <NoMatchRoute />
                  </Route>
                </Switch>
              </Box>
            </Container>
          </Layout>
        </Theme>
      </Router>
    </LoadingContextProvider>
  )
}
