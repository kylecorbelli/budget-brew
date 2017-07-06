import * as constants from '../../../constants'

const slugBeingEdited = (state = null, action) => {
  switch (action.type) {
    case constants.SET_ALCOHOL_SLUG_BEING_EDITED:
      return action.payload.slug
    default:
      return state
  }
}
export default slugBeingEdited
