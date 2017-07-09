import React from 'react'
import PropTypes from 'prop-types'
import MobileTableCellAttribute from '../MobileTableCellAttribute'
import MobileTableCellHeader from '../MobileTableCellHeader'
import './AlcoholComparisonTableMobile.css'

const AlcoholComparisonTableMobile = ({ selectedAlcoholTypes, showAlcoholInstanceEditingModal }) => (
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
              <MobileTableCellHeader
                showAlcoholInstanceEditingModal={showAlcoholInstanceEditingModal}
                slug={slug}
                text={name}
              />
              <MobileTableCellAttribute
                format='singleDecimalNumber'
                label="volume (ounces)"
                isEditable={true}
                attributeName='volumeInOunces'
                showAlcoholInstanceEditingModal={showAlcoholInstanceEditingModal}
                slug={slug}
                value={volumeInOunces}
              />
              <MobileTableCellAttribute
                format="percentage"
                label="ABV"
                isEditable={true}
                attributeName='alcoholByVolume'
                showAlcoholInstanceEditingModal={showAlcoholInstanceEditingModal}
                slug={slug}
                value={alcoholByVolume}
              />
              <MobileTableCellAttribute
                format='singleDecimalNumber'
                label="ounces of pure alcohol"
                value={ouncesOfPureAlcohol}
              />
              <MobileTableCellAttribute
                format="dollar"
                label="total cost"
                isEditable={true}
                attributeName='totalCost'
                showAlcoholInstanceEditingModal={showAlcoholInstanceEditingModal}
                slug={slug}
                value={totalCost}
              />
              <MobileTableCellAttribute
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
    slug: PropTypes.string.isRequired,
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

export default AlcoholComparisonTableMobile
