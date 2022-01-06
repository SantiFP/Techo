import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import { Layout } from './layout/Layout'
import { Theme } from './theme/Theme'
import { Home } from './pages/HomePage/Home'
import { NoMatchRoute } from './pages/NoMatchRoutePage/NoMatchRoute'
import { RefContextProvider } from './contexts/RefContext'
import { LoadingContextProvider } from './contexts/LoadingContext'
import { PrivacyPolicy } from './pages/PrivacyPolicyPage/PrivacyPolicy'
import { Terms } from './pages/TermsPage/Terms'

export const App = () => {
  return (
    <LoadingContextProvider>
      <RefContextProvider>
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
                      path='/privacy'
                      component={PrivacyPolicy}
                    />
                    <Route
                      exact
                      path='/terms'
                      component={Terms}
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
      </RefContextProvider>
    </LoadingContextProvider>
  )
}
