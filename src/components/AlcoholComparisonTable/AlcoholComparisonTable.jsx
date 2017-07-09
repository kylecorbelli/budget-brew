import React from 'react'
import PropTypes from 'prop-types'
import './AlcoholComparisonTable.css'
import AlcoholComparisonTableMobile from '../AlcoholComparisonTableMobile'
import AlcoholComparisonTableTabletAndDesktop from '../AlcoholComparisonTableTabletAndDesktop'

const AlcoholComparisonTable = ({ selectedAlcoholTypes, showAlcoholInstanceEditingModal }) => {
  if (!selectedAlcoholTypes.length) return null
  return (
    <div className="AlcoholComparisonTable">
      <p className="AlcoholComparisonTable__headline">results:</p>
      <AlcoholComparisonTableMobile
        selectedAlcoholTypes={selectedAlcoholTypes}
        showAlcoholInstanceEditingModal={showAlcoholInstanceEditingModal}
      />
      <AlcoholComparisonTableTabletAndDesktop
        selectedAlcoholTypes={selectedAlcoholTypes}
        showAlcoholInstanceEditingModal={showAlcoholInstanceEditingModal}
      />
    </div>
  )
}

AlcoholComparisonTable.propTypes = {
  selectedAlcoholTypes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    volume: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    volumeInOunces: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    alcoholByVolume: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    totalCost: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    costPerOunceOfPureAlcohol: PropTypes.number.isRequired,
  })).isRequired,
  showAlcoholInstanceEditingModal: PropTypes.func.isRequired,
}

export default AlcoholComparisonTable
