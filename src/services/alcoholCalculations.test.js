import {
  calculateGallonsToOunces,
  calculateLitersToOunces,
  calculateOuncesOfPureAlcohol,
  calculateCostPerOunceOfPureAlcohol,
  calculateVolumeInOunces,
} from './alcoholCalculations'

describe('alcoholCalculations', () => {
  describe('calculateGallonsToOunces', () => {
    it('should calculate gallons to ounces', () => {
      const numberOfGallons = 3
      const result = calculateGallonsToOunces(numberOfGallons)
      expect(result).toBe(384)
    })
  })

  describe('calculateLitersToOunces', () => {
    it('should calculate liters to ounces', () => {
      const numberOfLiters = 2
      const result = calculateLitersToOunces(numberOfLiters)
      expect(result).toBe(67.628)
    })
  })

  describe('calculateOuncesOfPureAlcohol', () => {
    it('should calculate ounces of pure alcohol', () => {
      const volumeInOunces = 40
      const alcoholByVolume = 8.1
      const result = calculateOuncesOfPureAlcohol(volumeInOunces, alcoholByVolume)
      expect(result).toBe(3.24)
    })
  })

  describe('calculateCostPerOunceOfPureAlcohol', () => {
    it('should calculate cost per ounce of pure alcohol', () => {
      const totalCost = 3.48
      const ouncesOfPureAlcohol = 3.24
      const result = calculateCostPerOunceOfPureAlcohol(totalCost, ouncesOfPureAlcohol)
      expect(result).toBe(1.074074074074074)
    })
  })

  describe('calculateVolumeInOunces', () => {
    it('should calculate volume in ounces given ounces as the unit type', () => {
      const volume = 40
      const volumeUnit = 'ounces'
      const result = calculateVolumeInOunces(volume, volumeUnit)
      expect(result).toBe(volume)
    })

    it('should calculate volume in ounces given liters as the unit type', () => {
      const volume = 1.75
      const volumeUnit = 'liters'
      const result = calculateVolumeInOunces(volume, volumeUnit)
      expect(result).toBe(59.1745)
    })

    it('should calculate volume in ounces given gallons as the unit type', () => {
      const volume = 5
      const volumeUnit = 'gallons'
      const result = calculateVolumeInOunces(volume, volumeUnit)
      expect(result).toBe(640)
    })
  })
})
