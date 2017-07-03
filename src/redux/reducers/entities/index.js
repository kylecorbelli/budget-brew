import { combineReducers } from 'redux'
import alcoholTypeOptions from './alcoholTypeOptions'
import selectedAlcoholTypes from './selectedAlcoholTypes'

const entities = combineReducers({
  alcoholTypeOptions,
  selectedAlcoholTypes,
})

export default entities
