import * as constants from '../../../../constants'
import {
  calculateOuncesOfPureAlcohol,
  calculateCostPerOunceOfPureAlcohol,
  calculateVolumeInOunces,
} from '../../../../../services/alcoholCalculations'

const bySlug = (state = {}, action) => {
  switch (action.type) {
    case constants.SELECT_ALCOHOL_TYPE:
      const {
        alcoholType,
        cuid,
      } = action.payload
      const uniqueSlug = `${alcoholType.slug}-${cuid}`
      const alcoholTypeCopy = {
        ...alcoholType,
        slug: uniqueSlug,
      }
      return {
        ...state,
        [uniqueSlug]: alcoholTypeCopy,
      }
    case constants.UPDATE_ALCOHOL_INSTANCE:
      const {
        slug,
        newAttributes,
      } = action.payload
      const newState = {
        ...state,
        [slug]: {
          ...state[slug],
          ...newAttributes,
        },
      }
      const targetAlcoholInstance = newState[slug]
      targetAlcoholInstance.volumeInOunces = calculateVolumeInOunces(targetAlcoholInstance.volume, targetAlcoholInstance.volumeUnits)
      targetAlcoholInstance.ouncesOfPureAlcohol = calculateOuncesOfPureAlcohol(targetAlcoholInstance.volumeInOunces, targetAlcoholInstance.alcoholByVolume)
      targetAlcoholInstance.costPerOunceOfPureAlcohol = calculateCostPerOunceOfPureAlcohol(targetAlcoholInstance.totalCost, targetAlcoholInstance.ouncesOfPureAlcohol)
      return newState
    default:
      return state
  }
}

export default bySlug
