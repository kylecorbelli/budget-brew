import React from 'react'
import PropTypes from 'prop-types'
import './AlcoholComparisonTable.css'
import AlcoholComparisonTableMobile from '../AlcoholComparisonTableMobile'
import AlcoholComparisonTableTabletAndDesktop from '../AlcoholComparisonTableTabletAndDesktop'

const AlcoholComparisonTable = ({
  selectedAlcoholTypes,
}) => {
  if (!selectedAlcoholTypes.length) return null
  return (
    <div className="AlcoholComparisonTable">
      <p className="AlcoholComparisonTable__headline">results:</p>
      <AlcoholComparisonTableMobile selectedAlcoholTypes={selectedAlcoholTypes} />
      <AlcoholComparisonTableTabletAndDesktop selectedAlcoholTypes={selectedAlcoholTypes} />
    </div>
  )
}

AlcoholComparisonTable.propTypes = {
  selectedAlcoholTypes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    volume: PropTypes.number.isRequired,
    volumeInOunces: PropTypes.number.isRequired,
    alcoholByVolume: PropTypes.number.isRequired,
    totalCost: PropTypes.number.isRequired,
    costPerOunceOfPureAlcohol: PropTypes.number.isRequired,
  })).isRequired,
}

export default AlcoholComparisonTable
