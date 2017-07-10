'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerticalSpring = function (_React$Component) {
  _inherits(VerticalSpring, _React$Component);

  function VerticalSpring(props) {
    _classCallCheck(this, VerticalSpring);

    var _this = _possibleConstructorReturn(this, (VerticalSpring.__proto__ || Object.getPrototypeOf(VerticalSpring)).call(this, props));

    _this.state = { height: 0 };
    return _this;
  }

  _createClass(VerticalSpring, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var height = this.props.height;


      if (this.contentElement && nextProps.height !== height) {
        var getContentHeight = function getContentHeight(contentElement) {
          contentElement.style.overflow = 'hidden';
          var contentHeight = contentElement.offsetHeight;
          contentElement.style.overflow = '';
          return contentHeight;
        };

        var contentHeight = getContentHeight(this.contentElement);

        var isHeightAuto = nextProps.height === 'auto';
        var newHeight = isHeightAuto ? contentHeight : 0;

        this.setState({ height: newHeight });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2['default'].createElement(
        'div',
        { style: {
            height: this.state.height,
            WebkitTransition: 'height ' + this.props.duration + 'ms ease',
            overflow: 'hidden'
          } },
        _react2['default'].createElement(
          'div',
          { ref: function ref(r) {
              return _this2.contentElement = r;
            } },
          this.props.children
        )
      );
    }
  }]);

  return VerticalSpring;
}(_react2['default'].Component);

VerticalSpring.propTypes = {
  height: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].string]).isRequired,
  duration: _propTypes2['default'].number
};
VerticalSpring.defaultProps = {
  duration: 500
};

exports['default'] = VerticalSpring;