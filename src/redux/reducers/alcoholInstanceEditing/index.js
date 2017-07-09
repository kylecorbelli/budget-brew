import { combineReducers } from 'redux'
import attributeBeingEdited from './attributeBeingEdited'
import slugBeingEdited from './slugBeingEdited'
import isEditingModalShown from './isEditingModalShown'

const alcoholInstanceEditing = combineReducers({
  attributeBeingEdited,
  isEditingModalShown,
  slugBeingEdited,
})

export default alcoholInstanceEditing
