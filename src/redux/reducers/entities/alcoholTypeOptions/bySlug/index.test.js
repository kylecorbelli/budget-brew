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
          volumeUnit: 'ounce',
          alcoholByVolume: 0.081,
          totalCost: 3.48,
        },
        'handle': {
          slug: 'handle',
          name: 'handle',
          volume: 1.75,
          volumeUnit: 'liter',
          alcoholByVolume: 0.4,
          totalCost: 9.98,
        },
      }

      const expectedNewState = {
        '40-oz': {
          slug: '40-oz',
          name: '40 oz.',
          volume: 40,
          volumeUnit: 'ounce',
          alcoholByVolume: 0.081,
          totalCost: 3.48,
          volumeInOunces: 40,
          ouncesOfPureAlcohol: 3.24,
          costPerOunceOfPureAlcohol: 1.074074074074074,
        },
        'handle': {
          slug: 'handle',
          name: 'handle',
          volume: 1.75,
          volumeUnit: 'liter',
          alcoholByVolume: 0.4,
          totalCost: 9.98,
          volumeInOunces: 59.1745,
          ouncesOfPureAlcohol: 23.669800000000002,
          costPerOunceOfPureAlcohol: 0.421634318836661,
        },
      }
      const newState = bySlug(initialState, actions.performInitialAlcoholComputations())
      expect(newState).toEqual(expectedNewState)
    })
  })
})
