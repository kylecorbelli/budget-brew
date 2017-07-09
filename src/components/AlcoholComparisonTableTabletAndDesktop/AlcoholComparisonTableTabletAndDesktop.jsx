import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './AlcoholComparisonTableTabletAndDesktop.css'
import FormattedAttributeValue from '../FormattedAttributeValue'
import SortableTableHeaderConnected from '../../containers/SortableTableHeaderConnected'
import { numberFormat } from '../../services/text-format'

export default class AlcoholComparisonTableTabletAndDesktop extends Component {
  static propTypes = {
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

  constructor (props) {
    super(props)
    this.handleAttributeClick = this.handleAttributeClick.bind(this)
  }

  handleAttributeClick (slug, attributeName) {
    const {
      showAlcoholInstanceEditingModal,
    } = this.props
    showAlcoholInstanceEditingModal(slug, attributeName)
  }

  render () {
    const {
      selectedAlcoholTypes,
    } = this.props
    return (
      <table className="AlcoholComparisonTableTabletAndDesktop">
        <thead>
          <tr>
            <th>type</th>
            <th>volume (ounces)</th>
            <SortableTableHeaderConnected
              targetSortAttributeKey='alcoholByVolume'
              title='ABV'
            />
            <th>ounces of pure alcohol</th>
            <SortableTableHeaderConnected
              targetSortAttributeKey='totalCost'
              title='total cost'
            />
            <SortableTableHeaderConnected
              targetSortAttributeKey='costPerOunceOfPureAlcohol'
              title='cost per ounce of pure alcohol'
            />
          </tr>
        </thead>
        <tbody>
          {selectedAlcoholTypes.map((alcoholType, index) => {
            const {
              name,
              volumeInOunces,
              alcoholByVolume,
              ouncesOfPureAlcohol,
              slug,
              totalCost,
              costPerOunceOfPureAlcohol,
            } = alcoholType
            return (
              <tr key={`alcohol-record-tablet-and-desktop-${index}`}>
                <td>{name}</td>
                <td
                  className="AlcoholComparisonTableTabletAndDesktop__editable-attribute"
                  onClick={() => this.handleAttributeClick(slug, 'volumeInOunces')}
                >
                  {numberFormat(volumeInOunces, { decimalPlaces: 1 })}
                </td>
                <td
                  className="AlcoholComparisonTableTabletAndDesktop__editable-attribute"
                  onClick={() => this.handleAttributeClick(slug, 'alcoholByVolume')}
                >
                  <FormattedAttributeValue format="percentage" value={alcoholByVolume} />
                </td>
                <td>{numberFormat(ouncesOfPureAlcohol, { decimalPlaces: 1 })}</td>
                <td
                  className="AlcoholComparisonTableTabletAndDesktop__editable-attribute"
                  onClick={() => this.handleAttributeClick(slug, 'totalCost')}
                >
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
  }
}
