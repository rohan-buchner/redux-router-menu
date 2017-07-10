'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var TOGGLE_MAIN_MENU = exports.TOGGLE_MAIN_MENU = '@@menu/TOGGLE_MAIN_MENU';
var selectMainMenu = exports.selectMainMenu = function selectMainMenu(menuId) {
  return function (dispach) {
    dispach({
      type: TOGGLE_MAIN_MENU,
      menuId: menuId
    });
  };
};

var CLOSE_OTHERS_MAIN_MENU = exports.CLOSE_OTHERS_MAIN_MENU = '@@menu/CLOSE_OTHERS_MAIN_MENU';
var ACTIVE_MAIN_MENU = exports.ACTIVE_MAIN_MENU = '@@menu/ACTIVE_MAIN_MENU';
var closeOthersMainMenu = exports.closeOthersMainMenu = function closeOthersMainMenu(menuId) {
  return function (dispatch) {
    dispatch({ type: CLOSE_OTHERS_MAIN_MENU, menuId: menuId });
    dispatch({ type: ACTIVE_MAIN_MENU, menuId: menuId });
  };
};