import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { menuReducer } from 'redux-router-menu'

const rootReducer = combineReducers({
  router: routerReducer,
  menu: menuReducer
})

export default rootReducer