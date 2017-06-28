import {
  numberFormat,
} from './text-format'

describe('numberFormat', () => {
  describe('when no decimal place is specified', () => {
    it('should format a value less than one', () => {
      expect(numberFormat(0.45)).toBe('0.45')
    })

    it('should format a value less than one with rounding', () => {
      expect(numberFormat(0.455)).toBe('0.46')
    })

    it('should format a value greater than a thousand', () => {
      expect(numberFormat(1234)).toBe('1,234.00')
    })
  })

  describe('when a decimal place is specified', () => {
    it('should format a value less than one', () => {
      expect(numberFormat(0.45, { decimalPlaces: 2 })).toBe('0.45')
    })

    it('should format a value less than one and fill trailing zeroes', () => {
      expect(numberFormat(0.455, { decimalPlaces: 1 })).toBe('0.50')
    })

    it('should format a value to three decimal places if specified', () => {
      expect(numberFormat(0.455, { decimalPlaces: 3 })).toBe('0.455')
    })

    it('should format a value greater than a thousands', () => {
      expect(numberFormat(1234, { decimalPlaces: 0 })).toBe('1,234')
    })

    it('should format a value greater than a thousand with decimals', () => {
      expect(numberFormat(12345.678, { decimalPlaces: 2 })).toBe('12,345.68')
    })
  })
})
