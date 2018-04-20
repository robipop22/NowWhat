'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switch = exports.SwitchLabel = exports.SwitchKnob = exports.SwitchBackground = exports.SwitchNativeControl = exports.SwitchRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _FormField = require('../FormField');

var _FormField2 = _interopRequireDefault(_FormField);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Base = require('../Base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwitchRoot = exports.SwitchRoot = (0, _Base.simpleTag)({
  displayName: 'SwitchRoot',
  classNames: 'mdc-switch'
});

var SwitchNativeControl = exports.SwitchNativeControl = (0, _Base.simpleTag)({
  displayName: 'SwitchNativeControl',
  tag: 'input',
  classNames: 'mdc-switch__native-control',
  defaultProps: {
    type: 'checkbox'
  }
});

var SwitchBackground = exports.SwitchBackground = (0, _Base.simpleTag)({
  displayName: 'SwitchBackground',
  classNames: 'mdc-switch__background'
});

var SwitchKnob = exports.SwitchKnob = (0, _Base.simpleTag)({
  displayName: 'SwitchKnob',
  classNames: 'mdc-switch__knob'
});

var SwitchLabel = exports.SwitchLabel = (0, _Base.simpleTag)({
  displayName: 'SwitchLabel',
  tag: 'label'
});

var Switch = (0, _Base.withMDCToggle)()((_temp = _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$label = _props.label,
          label = _props$label === undefined ? '' : _props$label,
          id = _props.id,
          children = _props.children,
          generatedId = _props.generatedId,
          mdcElementRef = _props.mdcElementRef,
          rest = _objectWithoutProperties(_props, ['label', 'id', 'children', 'generatedId', 'mdcElementRef']);

      var labelId = id || generatedId;

      var switchTag = React.createElement(
        SwitchRoot,
        {
          elementRef: mdcElementRef,
          className: (0, _classnames2.default)({ 'mdc-switch--disabled': rest.disabled })
        },
        React.createElement(SwitchNativeControl, Object.assign({ id: labelId }, rest)),
        React.createElement(
          SwitchBackground,
          null,
          React.createElement(SwitchKnob, null)
        )
      );

      /**
       * We have to conditionally wrap our checkbox in a formfield
       * If we have a label
       */
      if (label.length || children) {
        return React.createElement(
          _FormField2.default,
          null,
          switchTag,
          React.createElement(
            SwitchLabel,
            { id: labelId + 'label', htmlFor: labelId },
            label,
            children
          )
        );
      } else {
        return switchTag;
      }
    }
  }]);

  return _class;
}(React.Component), Object.defineProperty(_class, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'Switch'
}), _temp));

exports.Switch = Switch;
exports.default = Switch;
