import React from 'react'
import PropTypes from 'prop-types'
import {
  numberFormat,
} from '../../services/text-format'

const FormattedAttributeValue = ({ format, value }) => {
  switch (format) {
    case 'dollar':
      return <span><sup>&#36;</sup>{numberFormat(value)}</span>
    case 'percentage':
      return <span>{numberFormat(value, { decimalPlaces: 1 })}<sup>&#37;</sup></span>
    case 'singleDecimalNumber':
      return <span>{numberFormat(value, { decimalPlaces: 1 })}</span>
    default:
      return <span>{value}</span>
  }
}

FormattedAttributeValue.propTypes = {
  format: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
}

export default FormattedAttributeValue
