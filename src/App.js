import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import SessionContextProvider, { UseSessionContext }  from './context/sessionContext.js'
import { Layout } from './layout/Layout'
import { Theme } from './theme/Theme'
import { Home } from './pages/HomePage/Home'
import Login from './pages/Login/Login'
import { NoMatchRoute } from './pages/NoMatchRoutePage/NoMatchRoute'
import { Years } from './pages/YearsPage/Years'
import { Temporalities } from './pages/TemporalitiesPage/Temporalities'
import { Types } from './pages/TypesPage/Types'
import { Pillars } from './pages/PillarsPage/Pillars'

export const App = () => {
  return (
    <SessionContextProvider>
    <Router>
      <Theme>
        {localStorage.getItem('profile') === '{}' || localStorage.getItem('profile') === null  ? 
                            <Route
                              exact
                              path='/'
                              component={Login}
                            />
                            :
                            <Redirect to='/home'/>
      }
        <Layout>
          <Switch>
            <Route
                exact
                path='/home'
                component={Home}
              />
            <Route
              exact
              path='/years'
              component={Years}
            />
            <Route
              exact
              path='/temporalities'
              component={Temporalities}
            />
            <Route
              exact
              path='/types'
              component={Types}
            />
            <Route
              exact
              path='/pillars'
              component={Pillars}
            />
            <Route
              exact
              path='/indicators'
              component={NoMatchRoute}
            />
            <Route
              exact
              path='/spotlights'
              component={NoMatchRoute}
            />
            <Route path='*'>
              <NoMatchRoute />
            </Route>
          </Switch>
        </Layout>
      </Theme>
    </Router>
    </SessionContextProvider>
  )
}
