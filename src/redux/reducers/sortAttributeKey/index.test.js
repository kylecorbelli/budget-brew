import sortAttributeKey from './index'
import * as actions from '../../actions'

describe('sortAttributeKey', () => {
  it('should default to "costPerOunceOfPureAlcohol"', () => {
    const newState = sortAttributeKey(undefined, { type: null })
    expect(newState).toBe('costPerOunceOfPureAlcohol')
  })

  describe('SET_SORT_ATTRIBUTE_KEY', () => {
    it('should set the sort attribute key', () => {
      const initialState = 'totalCost'
      const newSortKey = 'alcoholByVolume'
      const newState = sortAttributeKey(initialState, actions.setSortAttributeKey(newSortKey))
      expect(newState).toBe(newSortKey)
    })
  })
})
