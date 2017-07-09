import { combineReducers } from 'redux'
import entities from './entities'
import sortAttributeKey from './sortAttributeKey'
import sortOrderKey from './sortOrderKey'
import alcoholInstanceEditing from './alcoholInstanceEditing'

const rootReducer = combineReducers({
  entities,
  sortAttributeKey,
  sortOrderKey,
  alcoholInstanceEditing,
})

export default rootReducer
