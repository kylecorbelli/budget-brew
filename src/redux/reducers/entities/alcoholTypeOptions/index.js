import { combineReducers } from 'redux'
import bySlug from './bySlug'
import allSlugs from './allSlugs'

const alcoholTypeOptions = combineReducers({
  bySlug,
  allSlugs,
})

export default alcoholTypeOptions
