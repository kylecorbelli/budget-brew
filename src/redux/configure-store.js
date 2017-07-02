import { createStore } from 'redux'
import rootReducer from './reducers'
import initialState from './initial-state'

const configureStore = () => {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
}

export default configureStore
