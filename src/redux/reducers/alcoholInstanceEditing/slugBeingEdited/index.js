import * as constants from '../../../constants'

const slugBeingEdited = (state = null, action) => {
  switch (action.type) {
    case constants.SHOW_ALCOHOL_INSTANCE_EDITING_MODAL:
      return action.payload.slugToEdit
    default:
      return state
  }
}
export default slugBeingEdited
