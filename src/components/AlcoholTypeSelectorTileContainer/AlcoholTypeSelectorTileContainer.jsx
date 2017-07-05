import React from 'react'
import PropTypes from 'prop-types'
import './AlcoholTypeSelectorTileContainer.css'
import OptionTile from '../OptionTile'
import ClickConfirmationBlock from '../ClickConfirmationBlock'

const AlcoholTypeSelectorTileContainer = ({ alcoholTypeOptions, selectAlcoholType }) => (
  <div className="AlcoholTypeSelectorTileContainer">
    {alcoholTypeOptions.map((alcoholTypeOption, index) => {
      return (
        <OptionTile
          key={`OptionTile-${alcoholTypeOption.slug}-${index}`}
          onClick={() => {
            const cuid = new Date().valueOf()
            selectAlcoholType(alcoholTypeOption, cuid)
          }}
        >
          <ClickConfirmationBlock confirmationText="added below ↓">
            {alcoholTypeOption.name}
          </ClickConfirmationBlock>
        </OptionTile>
      )
    })}
  </div>
)

AlcoholTypeSelectorTileContainer.propTypes = {
  alcoholTypeOptions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectAlcoholType: PropTypes.func.isRequired,
}

export default AlcoholTypeSelectorTileContainer
