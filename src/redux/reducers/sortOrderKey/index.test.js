import sortOrderKey from './index'
import * as actions from '../../actions'

describe('sortOrderKey', () => {
  it('should default to "lowToHigh"', () => {
    const result = sortOrderKey(undefined, { type: null })
    expect(result).toBe('lowToHigh')
  })

  describe('SET_SORT_ORDER_KEY', () => {
    it('should set the sort order key', () => {
      const initialState = 'lowToHigh'
      const newSortOrderKey = 'highToLow'
      const result = sortOrderKey(initialState, actions.setSortOrderKey(newSortOrderKey))
      expect(result).toBe(newSortOrderKey)
    })
  })
})
