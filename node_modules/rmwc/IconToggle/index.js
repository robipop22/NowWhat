'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconToggle = exports.IconToggleRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _mdc = require('@material/icon-toggle/dist/mdc.iconToggle');

var _Icon = require('../Icon');

var _Base = require('../Base');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconToggleRoot = exports.IconToggleRoot = (0, _Base.simpleTag)({
  displayName: 'IconToggleRoot',
  tag: _Icon.Icon,
  classNames: 'mdc-icon-toggle',
  defaultProps: {
    role: 'button',
    tabIndex: '0'
  }
});

/**
 * Icon Toggle Component
 */
var IconToggle = (0, _Base.withMDC)({
  mdcConstructor: _mdc.MDCIconToggle,
  mdcElementRef: true,
  mdcEvents: {
    'MDCIconToggle:change': function MDCIconToggleChange(evt, props, api) {
      props.onChange && props.onChange(Object.assign({}, evt.detail, {
        target: {
          value: evt.detail.isOn
        }
      }));
    }
  },
  onUpdate: function onUpdate(props, nextProps, api) {
    if (api && nextProps.value !== undefined) {
      api.on = !!nextProps.value;
    }
  }
})((_temp = _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          on = _props.on,
          off = _props.off,
          mdcElementRef = _props.mdcElementRef,
          rest = _objectWithoutProperties(_props, ['value', 'on', 'off', 'mdcElementRef']);

      var ariaPressed = value !== undefined ? !!value : false;
      var toggleOnJSON = JSON.stringify(on);
      var toggleOffJSON = JSON.stringify(off);

      return React.createElement(IconToggleRoot, Object.assign({
        elementRef: mdcElementRef
      }, rest, {
        'data-toggle-on': toggleOnJSON,
        'data-toggle-off': toggleOffJSON,
        'aria-pressed': ariaPressed
      }));
    }
  }]);

  return _class;
}(React.Component), Object.defineProperty(_class, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'IconToggle'
}), _temp));

exports.IconToggle = IconToggle;
exports.default = IconToggle;
