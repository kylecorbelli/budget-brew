import * as constants from '../../constants'

const sortAttributeKey = (state = 'costPerOunceOfPureAlcohol', action) => {
  switch (action.type) {
    case constants.SET_SORT_ATTRIBUTE_KEY:
      return action.payload.newSortAttributeKey
    default:
      return state
  }
}
export default sortAttributeKey
