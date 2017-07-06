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

export const setSortAttributeKey = (newSortAttributeKey) => ({
  type: constants.SET_SORT_ATTRIBUTE_KEY,
  payload: {
    newSortAttributeKey,
  },
})

export const setSortOrderKey = (newSortOrderKey) => ({
  type: constants.SET_SORT_ORDER_KEY,
  payload: {
    newSortOrderKey,
  },
})
