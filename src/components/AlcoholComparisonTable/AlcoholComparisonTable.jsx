import React from 'react'
import PropTypes from 'prop-types'
import './AlcoholComparisonTable.css'
import AlcoholComparisonTableMobile from '../AlcoholComparisonTableMobile'
import AlcoholComparisonTableTabletAndDesktop from '../AlcoholComparisonTableTabletAndDesktop'

const AlcoholComparisonTable = ({ selectedAlcoholTypes }) => (
  <div className="AlcoholComparisonTable">
    <p className="AlcoholComparisonTable__headline">results:</p>
    <AlcoholComparisonTableMobile selectedAlcoholTypes={selectedAlcoholTypes} />
    <AlcoholComparisonTableTabletAndDesktop selectedAlcoholTypes={selectedAlcoholTypes} />
  </div>
)

AlcoholComparisonTable.propTypes = {
  selectedAlcoholTypes: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    volume: PropTypes.number.isRequired,
    alcoholByVolume: PropTypes.number.isRequired,
    totalCost: PropTypes.number.isRequired,
    dollarsPerOunceOfPureAlcohol: PropTypes.number.isRequired,
  })).isRequired,
}

export default AlcoholComparisonTable
