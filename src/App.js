import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import AlcoholComparisonTable from './components/AlcoholComparisonTable'

const selectedAlcoholRecords = [
  {
    type: 'Whiskey (a handle)',
    volume: 59,
    alcoholByVolume: 0.4,
    ouncesOfPureAlcohol: 23.7,
    totalCost: 17.98,
    dollarsPerOunceOfPureAlcohol: 0.76,
  },
  {
    type: 'Malt Liquor (a 40oz)',
    volume: 40,
    alcoholByVolume: 0.081,
    ouncesOfPureAlcohol: 3.2,
    totalCost: 2.98,
    dollarsPerOunceOfPureAlcohol: 0.92,
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AlcoholComparisonTable alcoholRecords={selectedAlcoholRecords} />
      </div>
    )
  }
}

export default App


// BudgetBrew
// FrugalAlcoholic
