import * as constants from '../../../constants'

const attributeBeingEdited = (state = null, action) => {
  switch (action.type) {
    case constants.SHOW_ALCOHOL_INSTANCE_EDITING_MODAL:
      return action.payload.attributeToEdit
    default:
      return state
  }
}
export default attributeBeingEdited
