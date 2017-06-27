import React from 'react'
import PropTypes from 'prop-types'
import './MobileTableCellAttribute.css'

const MobileTableCellAttribute = ({ label, value }) => (
  <p className="MobileTableCellAttribute">
    <span className="MobileTableCellAttribute__label">{label}:</span>
    <span className="MobileTableCellAttribute__value">{value}</span>
  </p>
)

MobileTableCellAttribute.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
}

export default MobileTableCellAttribute
