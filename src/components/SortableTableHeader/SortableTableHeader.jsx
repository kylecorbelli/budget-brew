import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SortableTableHeader.css'

export default class SortableTableHeader extends Component {
  static propTypes = {
    selectedSortAttributeKey: PropTypes.string.isRequired,
    selectedSortOrderKey: PropTypes.string.isRequired,
    setSortAttributeKey: PropTypes.func.isRequired,
    setSortOrderKey: PropTypes.func.isRequired,
    targetSortAttributeKey: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
    this.sortByHeaderAttribute = this.sortByHeaderAttribute.bind(this)
  }

  generateClassName() {
    const {
      selectedSortAttributeKey,
      targetSortAttributeKey,
    } = this.props
    return `
      SortableTableHeader
      ${(selectedSortAttributeKey === targetSortAttributeKey ? 'SortableTableHeader--selected' : null)}
    `
  }

  sortByHeaderAttribute() {
    const {
      selectedSortAttributeKey,
      selectedSortOrderKey,
      setSortAttributeKey,
      setSortOrderKey,
      targetSortAttributeKey,
    } = this.props
    const newSortOrderKey = (selectedSortAttributeKey === targetSortAttributeKey &&
                            selectedSortOrderKey === 'lowToHigh') ? 'highToLow' : 'lowToHigh'
    setSortAttributeKey(targetSortAttributeKey)
    setSortOrderKey(newSortOrderKey)
  }

  render() {
    const {
      title,
    } = this.props
    return (
      <th
        className={this.generateClassName()}
        onClick={this.sortByHeaderAttribute}
      >
        {title}
      </th>
    )
  }
}
