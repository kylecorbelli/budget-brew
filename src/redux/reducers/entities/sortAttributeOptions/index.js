import { combineReducers } from 'redux'
import byKey from './byKey'
import allKeys from './allKeys'

const sortAttributeOptions = combineReducers({
  byKey,
  allKeys,
})

export default sortAttributeOptions
