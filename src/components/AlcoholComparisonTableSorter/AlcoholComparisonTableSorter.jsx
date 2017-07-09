import React from 'react'
import PropTypes from 'prop-types'
import './AlcoholComparisonTableSorter.css'
import OptionTile from '../OptionTile'

const AlcoholComparisonTableSorter = ({
  showSorter,
  sortAttributeOptions,
  sortOrderOptions,
  setSortAttributeKey,
  setSortOrderKey,
  selectedSortAttributeKey,
  selectedSortOrderKey,
}) => {
  if (!showSorter) return null
  return (
    <div className="AlcoholComparisonTableSorter">
      <div className="AlcoholComparisonTableSorter__sort-attribute-container">
        <p className="AlcoholComparisonTableSorter__sort-text">sort by:</p>
        <div className="AlcoholComparisonTableSorter__sort-attribute-option-tile-container">
          {sortAttributeOptions.map((sortAttributeOption, index) => (
            <OptionTile
              key={`OptionTile-sort-attribute-${index}`}
              onClick={() => setSortAttributeKey(sortAttributeOption.key)}
            >
              <span
                className={`
                  AlcoholComparisonTableSorter__sort-attribute
                  ${sortAttributeOption.key === selectedSortAttributeKey ? 'AlcoholComparisonTableSorter__sort-attribute--selected' : null}
                `}
              >
                {sortAttributeOption.name}
              </span>
            </OptionTile>
          ))}
        </div>
      </div>
      <div className="AlcoholComparisonTableSorter__sort-order-container">
        <p className="AlcoholComparisonTableSorter__sort-order-text">order:</p>
        <div className="AlcoholComparisonTableSorter__sort-order-option-tile-container">
          {sortOrderOptions.map((sortOrderOption, index) => (
            <OptionTile
              key={`OptionTile-order-${index}`}
              onClick={() => setSortOrderKey(sortOrderOption.key)}
            >
              <span
                className={`
                  AlcoholComparisonTableSorter__order-attribute
                  ${sortOrderOption.key === selectedSortOrderKey ? 'AlcoholComparisonTableSorter__order-attribute--selected' : null}
                `}
              >
                {sortOrderOption.name}
              </span>
            </OptionTile>
          ))}
        </div>
      </div>
    </div>
  )
}

AlcoholComparisonTableSorter.propTypes = {
  setSortAttributeKey: PropTypes.func.isRequired,
  setSortOrderKey: PropTypes.func.isRequired,
  showSorter: PropTypes.bool.isRequired,
  sortAttributeOptions: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  sortOrderOptions: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  selectedSortAttributeKey: PropTypes.string.isRequired,
  selectedSortOrderKey: PropTypes.string.isRequired,
}

export default AlcoholComparisonTableSorter
