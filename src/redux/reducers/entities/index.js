import { combineReducers } from 'redux'
import alcoholTypeOptions from './alcoholTypeOptions'
import selectedAlcoholTypes from './selectedAlcoholTypes'
import sortAttributeOptions from './sortAttributeOptions'
import sortOrderOptions from './sortOrderOptions'
import alcoholAttributes from './alcoholAttributes'

const entities = combineReducers({
  alcoholAttributes,
  alcoholTypeOptions,
  selectedAlcoholTypes,
  sortAttributeOptions,
  sortOrderOptions,
})

export default entities
