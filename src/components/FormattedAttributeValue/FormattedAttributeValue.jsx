import React from 'react'
import PropTypes from 'prop-types'
import {
  numberFormat,
  percentFormat,
} from '../../services/text-format'

const FormattedAttributeValue = ({ format, value }) => {
  let valueToDisplay
  switch (format) {
    case 'dollar':
      valueToDisplay = <span><sup>$</sup>{numberFormat(value)}</span>
      break
    case 'percentage':
      valueToDisplay = <span>{percentFormat(value)}<sup>%</sup></span>
      break
    default:
      valueToDisplay = <span>{value}</span>
  }
  return valueToDisplay
}

FormattedAttributeValue.propTypes = {
  format: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
}

export default FormattedAttributeValue
