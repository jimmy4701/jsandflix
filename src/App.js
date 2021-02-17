import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Signin from './pages/Signin'

const App = (props) => {
    return(
        <Router>
          <Switch>
            <Route exact component={Landing} path='/' />
            <Route component={Signin} path='/signin' />
          </Switch>
        </Router>
    )
}

export default App