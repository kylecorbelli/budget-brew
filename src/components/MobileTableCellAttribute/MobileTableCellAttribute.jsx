import React from 'react'
import PropTypes from 'prop-types'
import './MobileTableCellAttribute.css'
import FormattedAttributeValue from '../FormattedAttributeValue'

const MobileTableCellAttribute = ({ format, label, value }) => {
  return (
    <p className="MobileTableCellAttribute">
      <span className="MobileTableCellAttribute__label">{label}:</span>
      <span className="MobileTableCellAttribute__value">
        <FormattedAttributeValue format={format} value={value} />
      </span>
    </p>
  )
}

MobileTableCellAttribute.propTypes = {
  format: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
}

export default MobileTableCellAttribute
