import React from 'react'
import './AlcoholTypeSelectorTileContainer.css'
import OptionTile from '../OptionTile'

const alcoholTypes = [
  '40oz',
  'handle',
  'cocktail',
  'box wine',
  '6 pack',
  '12 pack',
  '24 pack',
  '30 pack',
  'shot',
  'pint',
  'pitcher',
  'tall can',
]

const AlcoholTypeSelectorTileContainer = () => (
  <div className="AlcoholTypeSelectorTileContainer">
    {alcoholTypes.map((alcoholType, index) => {
      return (
        <OptionTile key={`OptionTile-${alcoholType}-${index}`}>
          {alcoholType}
        </OptionTile>
      )
    })}
  </div>
)

export default AlcoholTypeSelectorTileContainer
