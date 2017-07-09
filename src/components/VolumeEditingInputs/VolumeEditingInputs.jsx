import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './VolumeEditingInputs.css'

export default class VolumeEditingInputs extends Component {
  static propTypes = {
    alcoholInstance: PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      volume: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      volumeUnits: PropTypes.string.isRequired,
    }),
    updateInputValue: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props)
    const {
      alcoholInstance: {
        volume,
        volumeUnits,
      },
    } = this.props
    this.state = {
      volume,
      volumeUnits,
    }
  }

  componentDidMount () {
    this.focalNode.select()
  }

  render () {
    const {
      alcoholInstance: {
        volume,
        volumeUnits,
      },
      updateInputValue,
    } = this.props
    return (
      <div className="VolumeEditingInputs">
        <div className="VolumeEditingInputs__input-group">
          <input
            type="number"
            step="any"
            className="VolumeEditingInputs__volume-input"
            name="volume"
            onChange={updateInputValue}
            ref={(node) => this.focalNode = node}
            value={volume}
          />
          <select
            className="VolumeEditingInputs__volume-units-select"
            name="volumeUnits"
            onChange={updateInputValue}
            value={volumeUnits}
          >
            <option value="ounces">ounces</option>
            <option value="liters">liters</option>
            <option value="gallons">gallons</option>
          </select>
        </div>
      </div>
    )
  }
}
