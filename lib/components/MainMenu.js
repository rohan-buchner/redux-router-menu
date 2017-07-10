'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actions = require('../actions');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MainMenu = function MainMenu(_ref) {
  var activeMenu = _ref.activeMenu,
      selectMainMenu = _ref.selectMainMenu,
      className = _ref.className,
      style = _ref.style,
      activeStyle = _ref.activeStyle,
      menuId = _ref.menuId,
      children = _ref.children,
      ownProps = _ref.ownProps;

  var handleToggle = function handleToggle() {
    selectMainMenu(menuId);
  };
  var match = activeMenu === menuId;
  return _react2['default'].createElement(
    'div',
    { style: match ? _extends({}, style, activeStyle) : style, onClick: handleToggle, className: className },
    children
  );
};

var mapDispatchToProps = { selectMainMenu: _actions.selectMainMenu };

exports['default'] = (0, _reactRedux.connect)(function (state, ownProps) {
  return { activeMenu: state.menu.activeMenu, ownProps: ownProps };
}, mapDispatchToProps)(MainMenu);