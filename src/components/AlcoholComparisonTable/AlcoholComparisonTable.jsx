import React from 'react'
import PropTypes from 'prop-types'
import './AlcoholComparisonTable.css'
import AlcoholComparisonTableMobile from '../AlcoholComparisonTableMobile'
import AlcoholComparisonTableTabletAndDesktop from '../AlcoholComparisonTableTabletAndDesktop'

const AlcoholComparisonTable = ({ alcoholRecords }) => (
  <div className="AlcoholComparisonTable">
    <AlcoholComparisonTableMobile alcoholRecords={alcoholRecords} />
    <AlcoholComparisonTableTabletAndDesktop alcoholRecords={alcoholRecords} />
  </div>
)

AlcoholComparisonTable.propTypes = {
  alcoholRecords: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    volume: PropTypes.number.isRequired,
    alcoholByVolume: PropTypes.number.isRequired,
    totalCost: PropTypes.number.isRequired,
    dollarsPerOunceOfPureAlcohol: PropTypes.number.isRequired,
  })).isRequired,
}

export default AlcoholComparisonTable
