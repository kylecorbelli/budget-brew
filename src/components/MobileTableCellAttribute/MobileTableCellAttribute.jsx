import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './MobileTableCellAttribute.css'
import FormattedAttributeValue from '../FormattedAttributeValue'

export default class MobileTableCellAttribute extends Component {
  static propTypes = {
    attributeName: PropTypes.string,
    isEditable: PropTypes.bool,
    format: PropTypes.string,
    label: PropTypes.string.isRequired,
    slug: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    showAlcoholInstanceEditingModal: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const {
      attributeName,
      isEditable,
      slug,
      showAlcoholInstanceEditingModal,
    } = this.props
    if (!isEditable) return
    showAlcoholInstanceEditingModal(slug, attributeName)
  }

  render() {
    const {
      format,
      isEditable,
      label,
      value,
    } = this.props
    return (
      <p
        className={`
          MobileTableCellAttribute
          ${(isEditable ? 'MobileTableCellAttribute--editable' : null)}
        `}
        onClick={this.handleClick}
      >
        <span className="MobileTableCellAttribute__label">{label}:</span>
        <span
          className='MobileTableCellAttribute__value'
        >
          <FormattedAttributeValue format={format} value={value} />
        </span>
      </p>
    )
  }
}
