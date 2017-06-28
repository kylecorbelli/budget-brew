import React from 'react'
import PropTypes from 'prop-types'
import MobileTableCellAttribute from '../MobileTableCellAttribute'
import MobileTableCellHeader from '../MobileTableCellHeader'
import './AlcoholComparisonTableMobile.css'

const AlcoholComparisonTableMobile = ({ alcoholRecords }) => (
  <table className="AlcoholComparisonTableMobile">
    <tbody className="AlcoholComparisonTableMobile__body">
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
            className="AlcoholComparisonTableMobile__table-row"
            key={`alcohol-record-mobile-${index}`}
          >
            <td className="AlcoholComparisonTableMobile__table-cell">
              <MobileTableCellHeader text={type} />
              <MobileTableCellAttribute label="Volume (ounces)" value={volume} />
              <MobileTableCellAttribute label="ABV" value={alcoholByVolume} />
              <MobileTableCellAttribute label="Ounces of pure alcohol" value={ouncesOfPureAlcohol} />
              <MobileTableCellAttribute format="dollar" label="Total cost" value={totalCost} />
              <MobileTableCellAttribute format="dollar" label="Cost per ounce of pure alcohol" value={dollarsPerOunceOfPureAlcohol} />
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
)

AlcoholComparisonTableMobile.propTypes = {
  alcoholRecords: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    volume: PropTypes.number.isRequired,
    alcoholByVolume: PropTypes.number.isRequired,
    totalCost: PropTypes.number.isRequired,
    dollarsPerOunceOfPureAlcohol: PropTypes.number.isRequired,
  })).isRequired,
}

export default AlcoholComparisonTableMobile
