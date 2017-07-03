import React from 'react'
import AlcoholComparisonTableConnected from '../../containers/AlcoholComparisonTableConnected'
import AlcoholTypeSelector from '../AlcoholTypeSelector'
import AlcoholComparisonTableSorter from '../AlcoholComparisonTableSorter'
import './HomeScreen.css'

const HomeScreen = () => (
  <div className="HomeScreen">
    <AlcoholTypeSelector />
    <AlcoholComparisonTableSorter />
    <AlcoholComparisonTableConnected />
  </div>
)

export default HomeScreen
