import { BrowserRouter as Router } from 'react-router-dom'
import Layout from 'layout/Layout'
import Routing from 'layout/Routing/Routing'
import Theme from 'theme/Theme'
import UserContextProvider from 'context/UserContext'

export default function App () {
  return (
    <UserContextProvider>
      <Theme>
        <Router>
          <Layout>
            <Routing />
          </Layout>
        </Router>
      </Theme>
    </UserContextProvider>
  )
}
