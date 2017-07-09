import * as constants from '../../../../constants'
import {
  calculateOuncesOfPureAlcohol,
  calculateCostPerOunceOfPureAlcohol,
  calculateVolumeInOunces,
} from '../../../../../services/alcoholCalculations'

const bySlug = (state = {}, action) => {
  switch (action.type) {
    case constants.PERFORM_INTITIAL_ALCOHOL_COMPUTATIONS:
      const newState = {}
      Object.keys(state).forEach((key) => {
        const newAlcoholTypeOption = newState[key] = { ...state[key] }
        newAlcoholTypeOption.volumeInOunces = calculateVolumeInOunces(newAlcoholTypeOption.volume, newAlcoholTypeOption.volumeUnits)
        newAlcoholTypeOption.ouncesOfPureAlcohol = calculateOuncesOfPureAlcohol(newAlcoholTypeOption.volumeInOunces, newAlcoholTypeOption.alcoholByVolume)
        newAlcoholTypeOption.costPerOunceOfPureAlcohol = calculateCostPerOunceOfPureAlcohol(newAlcoholTypeOption.totalCost, newAlcoholTypeOption.ouncesOfPureAlcohol)
      })
      return newState
    default:
      return state
  }
}

export default bySlug
