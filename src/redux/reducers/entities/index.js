import { combineReducers } from 'redux'
import alcoholTypeOptions from './alcoholTypeOptions'
import selectedAlcoholTypes from './selectedAlcoholTypes'
import sortAttributeOptions from './sortAttributeOptions'
import sortOrderOptions from './sortOrderOptions'

const entities = combineReducers({
  alcoholTypeOptions,
  selectedAlcoholTypes,
  sortAttributeOptions,
  sortOrderOptions,
})

export default entities
