import sortOrderKey from './index'
import * as actions from '../../actions'

describe('sortOrderKey', () => {
  it('should default to "lowToHigh"', () => {
    const newState = sortOrderKey(undefined, { type: null })
    expect(newState).toBe('lowToHigh')
  })

  describe('SET_SORT_ORDER_KEY', () => {
    it('should set the sort order key', () => {
      const initialState = 'lowToHigh'
      const newSortOrderKey = 'highToLow'
      const newState = sortOrderKey(initialState, actions.setSortOrderKey(newSortOrderKey))
      expect(newState).toBe(newSortOrderKey)
    })
  })
})
