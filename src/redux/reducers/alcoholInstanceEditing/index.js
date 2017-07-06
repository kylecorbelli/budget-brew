import { combineReducers } from 'redux'
import attributeBeingEdited from './attributeBeingEdited'
import slugBeingEdited from './slugBeingEdited'

const alcoholInstanceEditing = combineReducers({
  attributeBeingEdited,
  slugBeingEdited,
})

export default alcoholInstanceEditing
