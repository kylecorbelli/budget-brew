import React from 'react'
import PropTypes from 'prop-types'
import './AlcoholComparisonTableTabletAndDesktop.css'
import FormattedAttributeValue from '../FormattedAttributeValue'
import { numberFormat } from '../../services/text-format'

const AlcoholComparisonTableTabletAndDesktop = ({ selectedAlcoholTypes }) => (
  <table className="AlcoholComparisonTableTabletAndDesktop">
    <thead>
      <tr>
        <th>type</th>
        <th>volume (ounces)</th>
        <th>ABV</th>
        <th>ounces of pure alcohol</th>
        <th>total cost</th>
        <th>cost per ounce of pure alcohol</th>
      </tr>
    </thead>
    <tbody>
      {selectedAlcoholTypes.map((alcoholType, index) => {
        const {
          name,
          volumeInOunces,
          alcoholByVolume,
          ouncesOfPureAlcohol,
          totalCost,
          costPerOunceOfPureAlcohol,
        } = alcoholType
        return (
          <tr key={`alcohol-record-tablet-and-desktop-${index}`}>
            <td>{name}</td>
            <td>{numberFormat(volumeInOunces, { decimalPlaces: 1 })}</td>
            <td>
              <FormattedAttributeValue format="percentage" value={alcoholByVolume} />
            </td>
            <td>{numberFormat(ouncesOfPureAlcohol, { decimalPlaces: 1 })}</td>
            <td>
              <FormattedAttributeValue format="dollar" value={totalCost} />
            </td>
            <td>
              <FormattedAttributeValue format="dollar" value={costPerOunceOfPureAlcohol} />
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
)

AlcoholComparisonTableTabletAndDesktop.propTypes = {
  selectedAlcoholTypes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    volume: PropTypes.number.isRequired,
    volumeInOunces: PropTypes.number.isRequired,
    alcoholByVolume: PropTypes.number.isRequired,
    totalCost: PropTypes.number.isRequired,
    costPerOunceOfPureAlcohol: PropTypes.number.isRequired,
  })).isRequired,
}

export default AlcoholComparisonTableTabletAndDesktop
