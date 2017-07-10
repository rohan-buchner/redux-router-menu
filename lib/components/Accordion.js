'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _VerticalSpring = require('./VerticalSpring');

var _VerticalSpring2 = _interopRequireDefault(_VerticalSpring);

var _MenuLink = require('./MenuLink');

var _MenuLink2 = _interopRequireDefault(_MenuLink);

var _MainMenu = require('./MainMenu');

var _MainMenu2 = _interopRequireDefault(_MainMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// todo menuId를 상위 컴포넌트에서 받아서 주입하고 싶은데, background color 스타일링하면 hoc때문에 깜빡거려서 넣을 수가 없네...
// const Hoc = (Component, menuId) => props => {
//   return <Component menuId={menuId} {...props} />
// }

// todo 컴포넌트 이름 다른거 뭐 없을까?
var Accordion = function Accordion(_ref) {
  var openedMenus = _ref.openedMenus,
      menuId = _ref.menuId,
      title = _ref.title,
      children = _ref.children;

  var isOpen = openedMenus.indexOf(menuId) > -1;

  return _react2['default'].createElement(
    'div',
    null,
    title(_MainMenu2['default']),
    _react2['default'].createElement(
      _VerticalSpring2['default'],
      {
        duration: 300,
        height: isOpen ? 'auto' : 0 },
      children({ MenuLink: _MenuLink2['default'] })
    )
  );
};

exports['default'] = (0, _reactRedux.connect)(function (state) {
  return { openedMenus: state.menu.openedMenus };
})(Accordion);