const numberFormat = (value, { decimalPlaces = 2 } = {}) => {
  const thousandsCommaFormattedValue = value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
  const thousandsCommaFormattedIntegerValue = thousandsCommaFormattedValue.split('.')[0]
  const roundedValue = value.toFixed(decimalPlaces)
  const roundedFormattedValue = decimalPlaces === 1 ? parseFloat(roundedValue).toFixed(2) : roundedValue
  const roundedFormattedDecimalValue = roundedFormattedValue.split('.')[1]
  return roundedFormattedDecimalValue ? `${thousandsCommaFormattedIntegerValue}.${roundedFormattedDecimalValue}`
                                      : `${thousandsCommaFormattedIntegerValue}`
}

export {
  numberFormat,
}
