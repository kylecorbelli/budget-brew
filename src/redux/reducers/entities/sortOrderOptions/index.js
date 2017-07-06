import { combineReducers } from 'redux'
import allKeys from './allKeys'
import byKey from './byKey'

const sortOrderOptions = combineReducers({
  allKeys,
  byKey,
})

export default sortOrderOptions
