import React from 'react'
import AlcoholComparisonTableConnected from '../../containers/AlcoholComparisonTableConnected'
import AlcoholTypeSelector from '../AlcoholTypeSelector'
import AlcoholComparisonTableSorterConnected from '../../containers/AlcoholComparisonTableSorterConnected'
import './HomeScreen.css'

const HomeScreen = () => (
  <div className="HomeScreen">
    <AlcoholTypeSelector />
    <AlcoholComparisonTableSorterConnected />
    <AlcoholComparisonTableConnected />
  </div>
)

export default HomeScreen
