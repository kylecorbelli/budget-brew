import bySlug from './index'
import * as actions from '../../../../actions'

describe('entities.selectedAlcoholTypes.bySlug', () => {
  describe('SELECT_ALCOHOL_TYPE', () => {
    it('should "add" a copy of the selected alcohol type', () => {
      const cuid = new Date().valueOf()
      const alcoholType = {
        slug: '40-oz',
        name: '40 oz.',
        volume: 40,
      }
      const initialState = {}
      const uniqueSlug = `40-oz-${cuid}`
      const expectedNewState = {
        [uniqueSlug]: {
          slug: uniqueSlug,
          name: '40 oz.',
          volume: 40,
        },
      }
      const newState = bySlug(initialState, actions.selectAlcoholType(alcoholType, cuid))
      expect(newState).toEqual(expectedNewState)
    })
  })

  describe('UPDATE_ALCOHOL_INSTANCE', () => {
    it('should update a specified alcohol instance', () => {
      const targetSlug = 'target-slug'
      const targetSlugName = 'target slug'
      const otherSlug = 'another-slug'
      const otherSlugName = 'another slug'
      const newName = 'better name'
      const initialState = {
        [targetSlug]: {
          name: targetSlugName,
          slug: targetSlug,
        },
        [otherSlug]: {
          name: otherSlugName,
          slug: otherSlug,
        },
      }
      const newAttributes = {
        name: newName,
      }
      const expectedNewState = {
        [targetSlug]: {
          name: newName,
          slug: targetSlug,
        },
        [otherSlug]: {
          name: otherSlugName,
          slug: otherSlug,
        },
      }
      const newState = bySlug(initialState, actions.updateAlcoholInstance(targetSlug, newAttributes))
      expect(newState).toEqual(expectedNewState)
    })
  })
})
