import {
  sortAlcoholSelections,
} from './sorting'

describe('sorting', () => {
  describe('sortAlcoholSelections', () => {
    const selectedAlcoholTypes = [
      {
        name: 'tall can',
        alcoholByVolume: 0.081,
        totalCost: 2.48,
        costPerOunceOfPureAlcohol: 1.2757201646090535
      },
      {
        name: 'pitcher',
        alcoholByVolume: 0.05,
        totalCost: 16,
        costPerOunceOfPureAlcohol: 5.333333333333333
      },
      {
        name: 'handle',
        alcoholByVolume: 0.4,
        totalCost: 9.98,
        costPerOunceOfPureAlcohol: 0.421634318836661
      },
    ]

    it('should sort the alcohol selections low to high given an attribute key', () => {
      const sortedByTotalCostLowToHigh = sortAlcoholSelections(selectedAlcoholTypes, { key: 'totalCost', order: 'lowToHigh' })
      const expectedSortedByTotalCostLowToHigh = [
        {
          name: 'tall can',
          alcoholByVolume: 0.081,
          totalCost: 2.48,
          costPerOunceOfPureAlcohol: 1.2757201646090535
        },
        {
          name: 'handle',
          alcoholByVolume: 0.4,
          totalCost: 9.98,
          costPerOunceOfPureAlcohol: 0.421634318836661
        },
        {
          name: 'pitcher',
          alcoholByVolume: 0.05,
          totalCost: 16,
          costPerOunceOfPureAlcohol: 5.333333333333333
        },
      ]
      expect(sortedByTotalCostLowToHigh).toEqual(expectedSortedByTotalCostLowToHigh)
    })

    it('should sort the alcohol selections high to low given an attribute key', () => {
      const sortedByTotalCostHighToLow = sortAlcoholSelections(selectedAlcoholTypes, { key: 'totalCost', order: 'highToLow' })
      const expectedSortedByTotalCostHighToLow = [
        {
          name: 'pitcher',
          alcoholByVolume: 0.05,
          totalCost: 16,
          costPerOunceOfPureAlcohol: 5.333333333333333
        },
        {
          name: 'handle',
          alcoholByVolume: 0.4,
          totalCost: 9.98,
          costPerOunceOfPureAlcohol: 0.421634318836661
        },
        {
          name: 'tall can',
          alcoholByVolume: 0.081,
          totalCost: 2.48,
          costPerOunceOfPureAlcohol: 1.2757201646090535
        },
      ]
      expect(sortedByTotalCostHighToLow).toEqual(expectedSortedByTotalCostHighToLow)
    })
  })
})
