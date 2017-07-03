import { combineReducers } from 'redux'
import bySlug from './bySlug'
import allSlugs from './allSlugs'

const selectedAlcoholTypes = combineReducers({
  bySlug,
  allSlugs,
})

export default selectedAlcoholTypes
