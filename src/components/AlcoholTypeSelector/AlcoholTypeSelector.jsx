import React from 'react'
import AlcoholTypeSelectorTileContainerConnected from '../../containers/AlcoholTypeSelectorTileContainerConnected'
import './AlcoholTypeSelector.css'

const AlcoholTypeSelector = () => (
  <section className="AlcoholTypeSelector">
    <p className="AlcoholTypeSelector__headline">pick your poisons:</p>
    <AlcoholTypeSelectorTileContainerConnected />
  </section>
)

export default AlcoholTypeSelector
