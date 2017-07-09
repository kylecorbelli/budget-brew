import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './AlcoholByVolumeEditingInputs.css'

export default class AlcoholByVolumeEditingInputs extends Component {
  static propTypes = {
    alcoholInstance: PropTypes.shape({
      alcoholByVolume: PropTypes.oneOfType([
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
      updateInputValue,
      alcoholInstance: {
        alcoholByVolume,
      }
    } = this.props
    return (
      <div className="AlcoholByVolumeEditingInputs">
        <div className="AlcoholByVolumeEditingInputs__input-group">
          <input
            type="number"
            step="any"
            className="AlcoholByVolumeEditingInputs__input"
            name="alcoholByVolume"
            onChange={updateInputValue}
            ref={(node) => this.focalNode = node}
            value={alcoholByVolume}
          />
          <div className="AlcoholByVolumeEditingInputs__input-symbol">&#37;</div>
        </div>
      </div>
    )
  }
}
