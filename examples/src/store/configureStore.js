import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { routerMiddleware } from 'react-router-redux'
import DevTools from '../containers/DevTools'

const enhancer = history => compose(
  applyMiddleware(routerMiddleware(history), thunk),
  DevTools.instrument()
)

const configureStore = (history, initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer(history)
  )

  return store
}

export default configureStore