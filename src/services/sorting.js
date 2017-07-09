const sortAlcoholSelections = (alcoholSelections, { key, order }) => {
  return alcoholSelections.slice().sort((a, b) => {
    const aStringValue = String(a[key])
    const bStringValue = String(b[key])
    const aFloatValue = parseFloat(aStringValue)
    const bFloatValue = parseFloat(bStringValue)
    const notANumberPattern = /[A-Za-z]+/
    if (aStringValue.match(notANumberPattern)) {
      const returnValue = aStringValue < bStringValue ? 1 : -1
      return order === 'highToLow' ? returnValue : -returnValue
    }
    return order === 'highToLow' ? bFloatValue - aFloatValue : aFloatValue - bFloatValue
  })
}

export {
  sortAlcoholSelections,
}
