import React from 'react'
import PropTypes from 'prop-types'
import './AlcoholComparisonTableTabletAndDesktop.css'
import FormattedAttributeValue from '../FormattedAttributeValue'

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
      {selectedAlcoholTypes.map((alcoholRecord, index) => {
        const {
          type,
          volume,
          alcoholByVolume,
          ouncesOfPureAlcohol,
          totalCost,
          dollarsPerOunceOfPureAlcohol,
        } = alcoholRecord
        return (
          <tr key={`alcohol-record-tablet-and-desktop-${index}`}>
            <td>{type}</td>
            <td>{volume}</td>
            <td>
              <FormattedAttributeValue format="percentage" value={alcoholByVolume} />
            </td>
            <td>{ouncesOfPureAlcohol}</td>
            <td>
              <FormattedAttributeValue format="dollar" value={totalCost} />
            </td>
            <td>
              <FormattedAttributeValue format="dollar" value={dollarsPerOunceOfPureAlcohol} />
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
)

AlcoholComparisonTableTabletAndDesktop.propTypes = {
  selectedAlcoholTypes: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    volume: PropTypes.number.isRequired,
    alcoholByVolume: PropTypes.number.isRequired,
    totalCost: PropTypes.number.isRequired,
    dollarsPerOunceOfPureAlcohol: PropTypes.number.isRequired,
  })).isRequired,
}

export default AlcoholComparisonTableTabletAndDesktop
