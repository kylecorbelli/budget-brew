import * as constants from '../../../constants'

const attributeBeingEdited = (state = null, action) => {
  switch (action.type) {
    case constants.SET_ALCOHOL_ATTRIBUTE_BEING_EDITED:
      return action.payload.attribute
    default:
      return state
  }
}
export default attributeBeingEdited
