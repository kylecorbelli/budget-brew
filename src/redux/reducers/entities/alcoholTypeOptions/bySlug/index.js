import * as constants from '../../../../constants'

const litersToOunces = (numberOfLiters) => numberOfLiters * 33.814

const bySlug = (state = {}, action) => {
  switch (action.type) {
    case constants.PERFORM_INTITIAL_ALCOHOL_COMPUTATIONS:
      const newState = {}
      Object.keys(state).forEach((key) => {
        const alcoholTypeOption = state[key]
        const newAlcoholTypeOption = newState[key] = { ...alcoholTypeOption }
        switch (alcoholTypeOption.volumeUnit) {
          case 'liter':
            newAlcoholTypeOption.volumeInOunces = litersToOunces(alcoholTypeOption.volume)
            break
          case 'ounce':
            newAlcoholTypeOption.volumeInOunces = alcoholTypeOption.volume
            break
          default:
            break
        }
        newAlcoholTypeOption.ouncesOfPureAlcohol = newAlcoholTypeOption.volumeInOunces * newAlcoholTypeOption.alcoholByVolume
        newAlcoholTypeOption.costPerOunceOfPureAlcohol = newAlcoholTypeOption.totalCost / newAlcoholTypeOption.ouncesOfPureAlcohol
      })
      return newState
    default:
      return state
  }
}

export default bySlug
