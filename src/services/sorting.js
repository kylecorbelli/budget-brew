const sortAlcoholSelections = (alcoholSelections, { key, order }) => {
  return alcoholSelections.slice().sort((a, b) => {
    const aValue = parseFloat(a[key])
    const bValue = parseFloat(b[key])
    return order === 'highToLow' ? bValue - aValue : aValue - bValue
  })
}

export {
  sortAlcoholSelections
}
