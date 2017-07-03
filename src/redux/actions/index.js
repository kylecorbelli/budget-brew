import * as constants from '../constants'

export const performInitialAlcoholComputations = () => ({
  type: constants.PERFORM_INTITIAL_ALCOHOL_COMPUTATIONS,
})

export const selectAlcoholType = (alcoholType, cuid) => ({
  type: constants.SELECT_ALCOHOL_TYPE,
  payload: {
    alcoholType,
    cuid,
  },
})
