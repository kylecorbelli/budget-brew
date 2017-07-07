import React from 'react'
import PropTypes from 'prop-types'
import MobileTableCellAttributeConnected from '../../containers/MobileTableCellAttributeConnected'
import MobileTableCellHeader from '../MobileTableCellHeader'
import './AlcoholComparisonTableMobile.css'

const AlcoholComparisonTableMobile = ({ selectedAlcoholTypes }) => (
  <table className="AlcoholComparisonTableMobile">
    <tbody className="AlcoholComparisonTableMobile__body">
      {selectedAlcoholTypes.map((alcoholType, index) => {
        const {
          slug,
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
              <MobileTableCellAttributeConnected
                format='singleDecimalNumber'
                label="volume (ounces)"
                isEditable={true}
                attributeName='volumeInOunces'
                slug={slug}
                value={volumeInOunces}
              />
              <MobileTableCellAttributeConnected
                format="percentage"
                label="ABV"
                isEditable={true}
                attributeName='alcoholByVolume'
                slug={slug}
                value={alcoholByVolume}
              />
              <MobileTableCellAttributeConnected
                format='singleDecimalNumber'
                label="ounces of pure alcohol"
                value={ouncesOfPureAlcohol}
              />
              <MobileTableCellAttributeConnected
                format="dollar"
                label="total cost"
                isEditable={true}
                attributeName='totalCost'
                slug={slug}
                value={totalCost}
              />
              <MobileTableCellAttributeConnected
                format="dollar"
                label="cost per ounce of pure alcohol"
                value={costPerOunceOfPureAlcohol}
              />
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
    alcoholByVolume: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    totalCost: PropTypes.number.isRequired,
    costPerOunceOfPureAlcohol: PropTypes.number.isRequired,
  })).isRequired,
}

export default AlcoholComparisonTableMobile
