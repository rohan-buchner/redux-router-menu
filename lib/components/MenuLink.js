'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _LinkWrapper = require('./LinkWrapper');

var _LinkWrapper2 = _interopRequireDefault(_LinkWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MenuLink = function MenuLink(_ref) {
  var _children = _ref.children,
      to = _ref.to,
      style = _ref.style,
      activeStyle = _ref.activeStyle,
      closeOthersMainMenu = _ref.closeOthersMainMenu,
      menuId = _ref.menuId,
      className = _ref.className;

  var handleOnClick = function handleOnClick() {
    return closeOthersMainMenu(menuId);
  };

  return _react2['default'].createElement(_reactRouterDom.Route, {
    path: (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' ? to.pathname : to,
    children: function children(_ref2) {
      var match = _ref2.match;

      return _react2['default'].createElement(_LinkWrapper2['default'], {
        match: match,
        menuId: menuId,
        to: to,
        onClick: handleOnClick,
        style: match ? _extends({}, style, activeStyle) : style,
        children: _children,
        className: className
      });
    }
  });
};

exports['default'] = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(null, { closeOthersMainMenu: _actions.closeOthersMainMenu })(MenuLink));