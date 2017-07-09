import * as constants from '../../../constants'

const attributeBeingEdited = (state = null, action) => {
  switch (action.type) {
    case constants.SET_ALCOHOL_ATTRIBUTE_BEING_EDITED:
      return action.payload.attribute
    case constants.SHOW_ALCOHOL_INSTANCE_EDITING_MODAL:
      return action.payload.attributeToEdit
    default:
      return state
  }
}
export default attributeBeingEdited
