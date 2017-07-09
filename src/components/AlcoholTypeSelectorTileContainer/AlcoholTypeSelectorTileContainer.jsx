import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './AlcoholTypeSelectorTileContainer.css'
import OptionTile from '../OptionTile'
import ClickConfirmationBlock from '../ClickConfirmationBlock'

export default class AlcoholTypeSelectorTileContainer extends Component {
  static propTypes = {
    alcoholTypeOptions: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
    selectAlcoholType: PropTypes.func.isRequired,
  }

  handleTileClick (alcoholTypeOption) {
    const {
      selectAlcoholType,
    } = this.props
    const cuid = new Date().valueOf()
    selectAlcoholType(alcoholTypeOption, cuid)
  }

  render () {
    const {
      alcoholTypeOptions,
    } = this.props
    return (
      <div className="AlcoholTypeSelectorTileContainer">
        {alcoholTypeOptions.map((alcoholTypeOption, index) => {
          return (
            <OptionTile
              key={`OptionTile-${alcoholTypeOption.slug}-${index}`}
              onClick={this.handleTileClick.bind(this, alcoholTypeOption)}
            >
              <ClickConfirmationBlock confirmationText="added below ↓">
                {alcoholTypeOption.name}
              </ClickConfirmationBlock>
            </OptionTile>
          )
        })}
      </div>
    )
  }
}
