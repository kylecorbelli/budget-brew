import { combineReducers } from 'redux'
import allKeys from './allKeys'
import byKey from './byKey'

const alcoholAttributes = combineReducers({
  allKeys,
  byKey,
})

export default alcoholAttributes
