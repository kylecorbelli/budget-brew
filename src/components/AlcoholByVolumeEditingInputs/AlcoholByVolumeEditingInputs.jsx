import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './AlcoholByVolumeEditingInputs.css'

export default class AlcoholByVolumeEditingInputs extends Component {
  static propTypes = {
    alcoholInstance: PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      alcoholByVolume: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    }),
    updateInputValue: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props)
    const {
      alcoholInstance: {
        alcoholByVolume,
      },
    } = props
    this.state = {
      alcoholByVolume,
    }
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
            type='number'
            className='AlcoholByVolumeEditingInputs__input'
            name='alcoholByVolume'
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
