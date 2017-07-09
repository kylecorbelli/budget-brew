import bySlug from './index'
import * as actions from '../../../../actions'

describe('entities.alcoholTypeOptions.bySlug', () => {
  describe('PERFORM_INTITIAL_ALCOHOL_COMPUTATIONS', () => {
    it('should perform the initial alcohol computations', () => {
      const initialState = {
        '40-oz': {
          slug: '40-oz',
          name: '40 oz.',
          volume: 40,
          volumeUnits: 'ounces',
          alcoholByVolume: 8.1,
          totalCost: 3.48,
        },
        'handle': {
          slug: 'handle',
          name: 'handle',
          volume: 1.75,
          volumeUnits: 'liters',
          alcoholByVolume: 40,
          totalCost: 9.98,
        },
      }

      const expectedNewState = {
        '40-oz': {
          slug: '40-oz',
          name: '40 oz.',
          volume: 40,
          volumeUnits: 'ounces',
          alcoholByVolume: 8.1,
          totalCost: 3.48,
          volumeInOunces: 40,
          ouncesOfPureAlcohol: 3.24,
          costPerOunceOfPureAlcohol: 1.074074074074074,
        },
        'handle': {
          slug: 'handle',
          name: 'handle',
          volume: 1.75,
          volumeUnits: 'liters',
          alcoholByVolume: 40,
          totalCost: 9.98,
          volumeInOunces: 59.1745,
          ouncesOfPureAlcohol: 23.6698,
          costPerOunceOfPureAlcohol: 0.4216343188366611,
        },
      }
      const newState = bySlug(initialState, actions.performInitialAlcoholComputations())
      expect(newState).toEqual(expectedNewState)
    })
  })
})
