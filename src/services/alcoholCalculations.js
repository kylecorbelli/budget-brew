const OUNCES_PER_GALLON = 128
const OUNCES_PER_LITER = 33.814
const generateCalculateUnitsToOuncesFunction = (unitsPerOunce) => (numberOfUnits) => numberOfUnits * unitsPerOunce
const calculateGallonsToOunces = generateCalculateUnitsToOuncesFunction(OUNCES_PER_GALLON)
const calculateLitersToOunces = generateCalculateUnitsToOuncesFunction(OUNCES_PER_LITER)
const calculateOuncesOfPureAlcohol = (volumeInOunces, alcoholByVolume) => volumeInOunces * alcoholByVolume / 100
const calculateCostPerOunceOfPureAlcohol = (totalCost, ouncesOfPureAlcohol) => totalCost / ouncesOfPureAlcohol
const calculateVolumeInOunces = (volume, volumeUnits) => {
  switch (volumeUnits) {
    case 'gallons':
      return calculateGallonsToOunces(volume)
    case 'liters':
      return calculateLitersToOunces(volume)
    default:
      return volume
  }
}

export {
  calculateGallonsToOunces,
  calculateLitersToOunces,
  calculateOuncesOfPureAlcohol,
  calculateCostPerOunceOfPureAlcohol,
  calculateVolumeInOunces,
}
