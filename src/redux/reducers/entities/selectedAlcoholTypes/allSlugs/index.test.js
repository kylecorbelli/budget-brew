import allSlugs from './index'
import * as actions from '../../../../actions'

describe('entities.selectedAlcoholTypes.allSlugs', () => {
  describe('SELECT_ALCOHOL_TYPE', () => {
    it('should "add" the selected slug to the allSlugs array', () => {
      const cuid = new Date().valueOf()
      const alcoholType = {
        slug: '40-oz',
      }
      const initialState = []
      const uniqueSlug = `${alcoholType.slug}-${cuid}`
      const expectedNewState = [ uniqueSlug ]
      const newState = allSlugs(initialState, actions.selectAlcoholType(alcoholType, cuid))
      expect(newState).toEqual(expectedNewState)
    })
  })
})
