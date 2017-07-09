import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './NameEditingInputs.css'

export default class NameEditingInputs extends Component {
  static propTypes = {
    alcoholInstance: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    updateInputValue: PropTypes.func.isRequired,
  }

  componentDidMount () {
    this.focalNode.select()
  }

  render () {
    const {
      alcoholInstance: {
        name,
      },
      updateInputValue,
    } = this.props
    return (
      <div className="NameEditingInputs">
        <div className="NameEditingInputs__input-group">
          <input
            type="text"
            className="NameEditingInputs__input"
            name="name"
            onChange={updateInputValue}
            ref={(node) => this.focalNode = node}
            value={name}
          />
        </div>
      </div>
    )
  }
}
