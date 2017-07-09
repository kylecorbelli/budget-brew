import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TotalCostEditingInputs.css'

export default class TotalCostEditingInputs extends Component {
  static propTypes = {
    alcoholInstance: PropTypes.shape({
      totalCost: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    }),
    updateInputValue: PropTypes.func.isRequired,
  }

  componentDidMount () {
    this.focalNode.select()
  }

  render () {
    const {
      alcoholInstance: {
        totalCost,
      },
      updateInputValue,
    } = this.props
    return (
      <div className="TotalCostEditingInputs">
        <div className="TotalCostEditingInputs__input-group">
          <div className="TotalCostEditingInputs__input-symbol">&#36;</div>
          <input
            type="number"
            step="any"
            className="TotalCostEditingInputs__input"
            name="totalCost"
            onChange={updateInputValue}
            ref={(node) => this.focalNode = node}
            value={totalCost}
          />
        </div>
      </div>
    )
  }
}
