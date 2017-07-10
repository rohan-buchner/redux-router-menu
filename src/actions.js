export const TOGGLE_MAIN_MENU = '@@menu/TOGGLE_MAIN_MENU'
export const selectMainMenu = menuId => {
  return dispach => {
    dispach({
      type: TOGGLE_MAIN_MENU,
      menuId
    })
  }
}


export const CLOSE_OTHERS_MAIN_MENU = '@@menu/CLOSE_OTHERS_MAIN_MENU'
export const ACTIVE_MAIN_MENU = '@@menu/ACTIVE_MAIN_MENU'
export const closeOthersMainMenu = menuId => {
  return dispatch => {
    dispatch({ type: CLOSE_OTHERS_MAIN_MENU, menuId })
    dispatch({ type: ACTIVE_MAIN_MENU, menuId })
  }
}


