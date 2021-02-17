import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './pages/Landing'

const App = (props) => {
    return(
        <Router>
          <Switch>
            <Route component={Landing} path='/' />
          </Switch>
        </Router>
    )
}

export default App