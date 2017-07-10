'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuReducer = undefined;

var _actions = require('./actions');

var _redux = require('redux');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function spliceArray(array, start, deleteCount) {
  array.splice(start, deleteCount);
  return array;
}

var openedMenus = function openedMenus() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];
  var type = action.type,
      menuId = action.menuId;

  switch (type) {
    case _actions.TOGGLE_MAIN_MENU:
      var index = state.indexOf(menuId);
      if (index > -1) {
        return [].concat(_toConsumableArray(spliceArray(state, index, 1)));
      } else {
        return [].concat(_toConsumableArray(state), [menuId]);
      }

    case _actions.CLOSE_OTHERS_MAIN_MENU:
      return [menuId];

    default:
      return state;
  }
};

var activeMenu = function activeMenu() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  if (action.type === _actions.ACTIVE_MAIN_MENU) {
    return action.menuId;
  }

  return state;
};

var menuReducer = exports.menuReducer = (0, _redux.combineReducers)({
  openedMenus: openedMenus,
  activeMenu: activeMenu
});