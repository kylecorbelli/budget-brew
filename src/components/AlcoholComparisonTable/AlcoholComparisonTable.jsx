import React from 'react'
import PropTypes from 'prop-types'
import './AlcoholComparisonTable.css'
import MobileTableCellAttribute from '../MobileTableCellAttribute'
import MobileTableCellHeader from '../MobileTableCellHeader'

const AlcoholComparisonTable = ({ alcoholRecords }) => (
  <div className="AlcoholComparisonTable">
    <table className="AlcoholComparisonTable__tablet-and-desktop-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Volume</th>
          <th>ABV</th>
          <th>Ounces of pure alcohol</th>
          <th>Total cost</th>
          <th>Dollars per ounce of pure alcohol</th>
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
    <table className="AlcoholComparisonTable__mobile-table">
      <tbody className="AlcoholComparisonTable__mobile-table-body">
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
            <tr
              className="AlcoholComparisonTable__mobile-table-row"
              key={`alcohol-record-mobile-${index}`}
            >
              <td className="AlcoholComparisonTable__mobile-table-cell">
                <MobileTableCellHeader text={type} />
                <MobileTableCellAttribute label="Volume (ounces)" value={volume} />
                <MobileTableCellAttribute label="ABV" value={alcoholByVolume} />
                <MobileTableCellAttribute label="Ounces of pure alcohol" value={ouncesOfPureAlcohol} />
                <MobileTableCellAttribute label="Total cost" value={totalCost} />
                <MobileTableCellAttribute label="Dollars per ounce of pure alcohol" value={dollarsPerOunceOfPureAlcohol} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
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
