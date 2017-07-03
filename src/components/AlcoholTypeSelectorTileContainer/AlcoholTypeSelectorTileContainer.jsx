import React from 'react'
import PropTypes from 'prop-types'
import './AlcoholTypeSelectorTileContainer.css'
import OptionTile from '../OptionTile'

const AlcoholTypeSelectorTileContainer = ({ alcoholTypeOptions }) => (
  <div className="AlcoholTypeSelectorTileContainer">
    {alcoholTypeOptions.map((alcoholTypeOption, index) => {
      return (
        <OptionTile key={`OptionTile-${alcoholTypeOption}-${index}`}>
          {alcoholTypeOption.name}
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
}

export default AlcoholTypeSelectorTileContainer
