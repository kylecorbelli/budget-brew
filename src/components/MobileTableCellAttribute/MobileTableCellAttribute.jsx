import React from 'react'
import PropTypes from 'prop-types'
import './MobileTableCellAttribute.css'
import { numberFormat } from '../../services/text-format'

const MobileTableCellAttribute = ({ format, label, value }) => (
  <p className="MobileTableCellAttribute">
    <span className="MobileTableCellAttribute__label">{label}:</span>
    <span className="MobileTableCellAttribute__value">
      {format === 'dollar' ? <span><sup>$</sup>{numberFormat(value)}</span>
                           : value
      }
    </span>
  </p>
)

MobileTableCellAttribute.propTypes = {
  format: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
}

export default MobileTableCellAttribute
