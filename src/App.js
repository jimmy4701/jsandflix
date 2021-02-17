import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Signin from './pages/Signin'
import Movies from './pages/Movies'
import Browse from './pages/Browse'

const App = (props) => {
    return(
        <Router>
          <Switch>
            <Route exact component={Landing} path='/' />
            <Route component={Signin} path='/signin' />
            <Route component={Movies} path='/movies' />
            <Route component={Browse} path='/browse' />
          </Switch>
        </Router>
    )
}

export default App