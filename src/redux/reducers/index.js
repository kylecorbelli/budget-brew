import { combineReducers } from 'redux'
import entities from './entities'
import sortAttributeKey from './sortAttributeKey'
import sortOrderKey from './sortOrderKey'

const rootReducer = combineReducers({
  entities,
  sortAttributeKey,
  sortOrderKey,
})

export default rootReducer
