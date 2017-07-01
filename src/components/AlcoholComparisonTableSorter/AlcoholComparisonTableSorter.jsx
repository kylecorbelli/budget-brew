import React from 'react'
import './AlcoholComparisonTableSorter.css'
import OptionTile from '../OptionTile'

const sortAttributeOptions = [
  'cost per ounce of pure alcohol',
  'total cost',
  'ABV',
]

const sortOrderOptions = [
  'low to high',
  'high to low',
]

const AlcoholComparisonTableSorter = () => (
  <div className="AlcoholComparisonTableSorter">
    <div className="AlcoholComparisonTableSorter__sort-attribute-container">
      <p className="AlcoholComparisonTableSorter__sort-text">sort by:</p>
      <div className="AlcoholComparisonTableSorter__sort-attribute-option-tile-container">
        {sortAttributeOptions.map((sortAttributeOption, index) => (
          <OptionTile key={`OptionTile-attribute-${index}`}>
            <span>{sortAttributeOption}</span>
          </OptionTile>
        ))}
      </div>
    </div>
    <div className="AlcoholComparisonTableSorter__sort-order-container">
      <p className="AlcoholComparisonTableSorter__sort-order-text">order:</p>
      <div className="AlcoholComparisonTableSorter__sort-order-option-tile-container">
        {sortOrderOptions.map((sortOrderOption, index) => (
          <OptionTile key={`OptionTile-order-${index}`}>
            <span>{sortOrderOption}</span>
          </OptionTile>
        ))}
      </div>
    </div>
  </div>
)

export default AlcoholComparisonTableSorter
