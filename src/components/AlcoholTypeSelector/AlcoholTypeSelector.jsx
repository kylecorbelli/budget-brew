import React from 'react'
import AlcoholTypeSelectorTileContainer from '../AlcoholTypeSelectorTileContainer'
import './AlcoholTypeSelector.css'

const AlcoholTypeSelector = () => (
  <section className="AlcoholTypeSelector">
    <p className="AlcoholTypeSelector__headline">pick your poisons:</p>
    <AlcoholTypeSelectorTileContainer />
  </section>
)

export default AlcoholTypeSelector
