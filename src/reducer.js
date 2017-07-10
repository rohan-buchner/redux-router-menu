import { TOGGLE_MAIN_MENU, CLOSE_OTHERS_MAIN_MENU, ACTIVE_MAIN_MENU } from './actions'
import { combineReducers } from 'redux'

function spliceArray(array, start, deleteCount) {
  array.splice(start, deleteCount)
  return array
}

const openedMenus = (state = [], action) => {
  const { type, menuId } = action
  switch (type) {
    case TOGGLE_MAIN_MENU:
      const index = state.indexOf(menuId)
      if (index > -1) {
        return [...spliceArray(state, index, 1)]
      } else {
        return [...state, menuId]
      }

    case CLOSE_OTHERS_MAIN_MENU:
      return [menuId]

    default:
      return state
  }
}

const activeMenu = (state = '', action) => {
  if (action.type === ACTIVE_MAIN_MENU) {
    return action.menuId
  }

  return state
}

export const menuReducer = combineReducers({
  openedMenus,
  activeMenu
})
