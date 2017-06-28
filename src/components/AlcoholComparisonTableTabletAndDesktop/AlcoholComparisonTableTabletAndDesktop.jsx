import React from 'react'
import PropTypes from 'prop-types'
import './AlcoholComparisonTableTabletAndDesktop.css'

const AlcoholComparisonTableTabletAndDesktop = ({ alcoholRecords }) => (
  <table className="AlcoholComparisonTableTabletAndDesktop">
    <thead>
      <tr>
        <th>Type</th>
        <th>Volume</th>
        <th>ABV</th>
        <th>Ounces of pure alcohol</th>
        <th>Total cost</th>
        <th>Cost per ounce of pure alcohol</th>
      </tr>
    </thead>
    <tbody>
      {alcoholRecords.map((alcoholRecord, index) => {
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
            <td>{alcoholByVolume}</td>
            <td>{ouncesOfPureAlcohol}</td>
            <td>{totalCost}</td>
            <td>{dollarsPerOunceOfPureAlcohol}</td>
          </tr>
        )
      })}
    </tbody>
  </table>
)

AlcoholComparisonTableTabletAndDesktop.propTypes = {
  alcoholRecords: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    volume: PropTypes.number.isRequired,
    alcoholByVolume: PropTypes.number.isRequired,
    totalCost: PropTypes.number.isRequired,
    dollarsPerOunceOfPureAlcohol: PropTypes.number.isRequired,
  })).isRequired,
}

export default AlcoholComparisonTableTabletAndDesktop
