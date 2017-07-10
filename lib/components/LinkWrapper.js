'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkWrapper = function (_React$Component) {
  _inherits(LinkWrapper, _React$Component);

  function LinkWrapper() {
    _classCallCheck(this, LinkWrapper);

    return _possibleConstructorReturn(this, (LinkWrapper.__proto__ || Object.getPrototypeOf(LinkWrapper)).apply(this, arguments));
  }

  _createClass(LinkWrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          match = _props.match,
          menuId = _props.menuId,
          closeOthersMainMenu = _props.closeOthersMainMenu;

      if (match) {
        closeOthersMainMenu(menuId);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          to = _props2.to,
          onClick = _props2.onClick,
          style = _props2.style,
          children = _props2.children,
          className = _props2.className;

      return _react2['default'].createElement(_reactRouterDom.Link, { to: to, onClick: onClick, style: style, children: children, className: className });
    }
  }]);

  return LinkWrapper;
}(_react2['default'].Component);

exports['default'] = (0, _reactRedux.connect)(null, { closeOthersMainMenu: _actions.closeOthersMainMenu })(LinkWrapper);