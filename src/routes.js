import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import HomeScreen from './components/HomeScreen'
import SiteHeader from './components/SiteHeader'

const Routes = () => (
  <Router>
    <div>
      <SiteHeader />
      <Route exact path='/' component={HomeScreen} />
    </div>
  </Router>
)

export default Routes
