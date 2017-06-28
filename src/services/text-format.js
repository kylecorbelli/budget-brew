const numberFormat = (value, { decimalPlaces = 2 } = {}) => {
  const thousandsCommaFormattedValue = value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
  const thousandsCommaFormattedIntegerValue = thousandsCommaFormattedValue.split('.')[0]
  const roundedValue = value.toFixed(decimalPlaces)
  const roundedFormattedDecimalValue = roundedValue.split('.')[1]
  return roundedFormattedDecimalValue ? `${thousandsCommaFormattedIntegerValue}.${roundedFormattedDecimalValue}`
                                      : `${thousandsCommaFormattedIntegerValue}`
}

const percentFormat = (value, options = { decimalPlaces: 1 }) => numberFormat(value * 100, options)

export {
  numberFormat,
  percentFormat,
}
