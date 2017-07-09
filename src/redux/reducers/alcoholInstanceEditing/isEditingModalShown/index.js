import * as constants from '../../../constants'

const isEditingModalShown = (state = false, action) => {
  switch (action.type) {
    case constants.HIDE_ALCOHOL_INSTANCE_EDITING_MODAL:
      return false
    case constants.SHOW_ALCOHOL_INSTANCE_EDITING_MODAL:
      return true
    default:
      return state
  }
}

export default isEditingModalShown
