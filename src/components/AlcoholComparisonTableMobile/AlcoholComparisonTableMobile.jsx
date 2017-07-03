import React from 'react'
import PropTypes from 'prop-types'
import MobileTableCellAttribute from '../MobileTableCellAttribute'
import MobileTableCellHeader from '../MobileTableCellHeader'
import { numberFormat } from '../../services/text-format'
import './AlcoholComparisonTableMobile.css'

const AlcoholComparisonTableMobile = ({ selectedAlcoholTypes }) => (
  <table className="AlcoholComparisonTableMobile">
    <tbody className="AlcoholComparisonTableMobile__body">
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
          <tr
            className="AlcoholComparisonTableMobile__table-row"
            key={`alcohol-record-mobile-${index}`}
          >
            <td className="AlcoholComparisonTableMobile__table-cell">
              <MobileTableCellHeader text={name} />
              <MobileTableCellAttribute label="volume (ounces)" value={numberFormat(volumeInOunces, { decimalPlaces: 1 })} />
              <MobileTableCellAttribute format="percentage" label="ABV" value={alcoholByVolume} />
              <MobileTableCellAttribute label="ounces of pure alcohol" value={numberFormat(ouncesOfPureAlcohol, { decimalPlaces: 1 })} />
              <MobileTableCellAttribute format="dollar" label="total cost" value={totalCost} />
              <MobileTableCellAttribute format="dollar" label="cost per ounce of pure alcohol" value={costPerOunceOfPureAlcohol} />
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
)

AlcoholComparisonTableMobile.propTypes = {
  selectedAlcoholTypes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    volume: PropTypes.number.isRequired,
    volumeInOunces: PropTypes.number.isRequired,
    alcoholByVolume: PropTypes.number.isRequired,
    totalCost: PropTypes.number.isRequired,
    costPerOunceOfPureAlcohol: PropTypes.number.isRequired,
  })).isRequired,
}

export default AlcoholComparisonTableMobile
