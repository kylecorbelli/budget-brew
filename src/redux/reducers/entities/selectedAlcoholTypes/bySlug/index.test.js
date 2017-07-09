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
          totalCost: 10,
          alcoholByVolume: 5,
          volume: 72,
          volumeUnits: 'ounces',
          volumeInOunces: 72,
        },
        [otherSlug]: {
          name: otherSlugName,
          slug: otherSlug,
          totalCost: 10,
          alcoholByVolume: 5,
          volume: 72,
          volumeUnits: 'ounces',
          volumeInOunces: 72,
        },
      }
      const newAttributes = {
        name: newName,
      }
      const expectedNewState = {
        [targetSlug]: {
          name: newName,
          slug: targetSlug,
          totalCost: 10,
          alcoholByVolume: 5,
          volume: 72,
          volumeUnits: 'ounces',
          volumeInOunces: 72,
          ouncesOfPureAlcohol: 3.6,
          costPerOunceOfPureAlcohol: 2.7777777777777777,
        },
        [otherSlug]: {
          name: otherSlugName,
          slug: otherSlug,
          totalCost: 10,
          alcoholByVolume: 5,
          volume: 72,
          volumeUnits: 'ounces',
          volumeInOunces: 72,
        },
      }
      const newState = bySlug(initialState, actions.updateAlcoholInstance(targetSlug, newAttributes))
      expect(newState).toEqual(expectedNewState)
    })

    it('should update volumeInOunces when changing volume in another unit type', () => {
      const targetSlug = 'target-slug'
      const targetSlugName = 'target name'
      const initialState = {
        [targetSlug]: {
          name: targetSlugName,
          slug: targetSlug,
          totalCost: 10,
          alcoholByVolume: 5,
          volume: 12,
          volumeUnits: 'ounces',
          volumeInOunces: 12,
        },
      }
      const newAttributes = {
        volume: 5,
        volumeUnits: 'liters',
      }
      const expectedNewState = {
        [targetSlug]: {
          name: targetSlugName,
          slug: targetSlug,
          totalCost: 10,
          alcoholByVolume: 5,
          volume: 5,
          volumeInOunces: 169.07,
          volumeUnits: 'liters',
          ouncesOfPureAlcohol: 8.453499999999998,
          costPerOunceOfPureAlcohol: 1.1829419766960434,
        },
      }
      const newState = bySlug(initialState, actions.updateAlcoholInstance(targetSlug, newAttributes))
      expect(newState).toEqual(expectedNewState)
    })
  })
})
