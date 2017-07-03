import React from 'react'
import PropTypes from 'prop-types'
import MobileTableCellAttribute from '../MobileTableCellAttribute'
import MobileTableCellHeader from '../MobileTableCellHeader'
import './AlcoholComparisonTableMobile.css'

const AlcoholComparisonTableMobile = ({ selectedAlcoholTypes }) => (
  <table className="AlcoholComparisonTableMobile">
    <tbody className="AlcoholComparisonTableMobile__body">
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
          <tr
            className="AlcoholComparisonTableMobile__table-row"
            key={`alcohol-record-mobile-${index}`}
          >
            <td className="AlcoholComparisonTableMobile__table-cell">
              <MobileTableCellHeader text={type} />
              <MobileTableCellAttribute label="volume (ounces)" value={volume} />
              <MobileTableCellAttribute format="percentage" label="ABV" value={alcoholByVolume} />
              <MobileTableCellAttribute label="ounces of pure alcohol" value={ouncesOfPureAlcohol} />
              <MobileTableCellAttribute format="dollar" label="total cost" value={totalCost} />
              <MobileTableCellAttribute format="dollar" label="cost per ounce of pure alcohol" value={dollarsPerOunceOfPureAlcohol} />
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
)

AlcoholComparisonTableMobile.propTypes = {
  selectedAlcoholTypes: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    volume: PropTypes.number.isRequired,
    alcoholByVolume: PropTypes.number.isRequired,
    totalCost: PropTypes.number.isRequired,
    dollarsPerOunceOfPureAlcohol: PropTypes.number.isRequired,
  })).isRequired,
}

export default AlcoholComparisonTableMobile
