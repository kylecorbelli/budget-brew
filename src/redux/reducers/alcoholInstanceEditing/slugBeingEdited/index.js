import * as constants from '../../../constants'

const slugBeingEdited = (state = null, action) => {
  switch (action.type) {
    case constants.SET_ALCOHOL_SLUG_BEING_EDITED:
      return action.payload.slug
    case constants.SHOW_ALCOHOL_INSTANCE_EDITING_MODAL:
      return action.payload.slugToEdit
    default:
      return state
  }
}
export default slugBeingEdited
