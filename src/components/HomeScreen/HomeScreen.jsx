import React from 'react'
import AlcoholComparisonTable from '../AlcoholComparisonTable'
import AlcoholTypeSelector from '../AlcoholTypeSelector'
import AlcoholComparisonTableSorter from '../AlcoholComparisonTableSorter'
import './HomeScreen.css'

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

const HomeScreen = () => (
  <div className="HomeScreen">
    <AlcoholTypeSelector />
    <AlcoholComparisonTableSorter />
    <AlcoholComparisonTable alcoholRecords={selectedAlcoholRecords} />
  </div>
)

export default HomeScreen
