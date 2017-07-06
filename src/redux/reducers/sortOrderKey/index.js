import * as constants from '../../constants'

const sortOrderKey = (state = 'lowToHigh', action) => {
  switch (action.type) {
    case constants.SET_SORT_ORDER_KEY:
      return action.payload.newSortOrderKey
    default:
      return state
  }
}
export default sortOrderKey
