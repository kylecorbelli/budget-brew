import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import HomeScreen from './components/HomeScreen'
import SiteHeader from './components/SiteHeader'
import AlcoholInstanceEditingModalConnected from './containers/AlcoholInstanceEditingModalConnected'

const Routes = () => (
  <Router>
    <div>
      <SiteHeader />
      <Route exact path='/' component={HomeScreen} />
      <AlcoholInstanceEditingModalConnected />
    </div>
  </Router>
)

export default Routes
