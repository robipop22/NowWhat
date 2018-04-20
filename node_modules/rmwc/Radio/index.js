'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = exports.RadioLabel = exports.RadioInnerCircle = exports.RadioOuterCircle = exports.RadioBackground = exports.RadioNativeControl = exports.RadioRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _mdc = require('@material/radio/dist/mdc.radio');

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

var RadioRoot = exports.RadioRoot = (0, _Base.simpleTag)({
  displayName: 'RadioRoot',
  classNames: 'mdc-radio'
});

var RadioNativeControl = exports.RadioNativeControl = (0, _Base.simpleTag)({
  displayName: 'RadioNativeControl',
  tag: 'input',
  classNames: 'mdc-radio__native-control',
  defaultProps: {
    type: 'radio'
  }
});

var RadioBackground = exports.RadioBackground = (0, _Base.simpleTag)({
  displayName: 'RadioBackground',
  classNames: 'mdc-radio__background'
});

var RadioOuterCircle = exports.RadioOuterCircle = (0, _Base.simpleTag)({
  displayName: 'RadioOuterCircle',
  classNames: 'mdc-radio__outer-circle'
});

var RadioInnerCircle = exports.RadioInnerCircle = (0, _Base.simpleTag)({
  displayName: 'RadioInnerCircle',
  classNames: 'mdc-radio__inner-circle'
});

var RadioLabel = exports.RadioLabel = (0, _Base.simpleTag)({
  displayName: 'RadioLabel',
  tag: 'label'
});

var Radio = (0, _Base.withMDCToggle)({ mdcConstructor: _mdc.MDCRadio })((_temp = _class = function (_React$Component) {
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
          apiRef = _props.apiRef,
          generatedId = _props.generatedId,
          mdcElementRef = _props.mdcElementRef,
          rest = _objectWithoutProperties(_props, ['label', 'id', 'children', 'apiRef', 'generatedId', 'mdcElementRef']);

      var labelId = id || generatedId;

      var radio = React.createElement(
        RadioRoot,
        {
          elementRef: mdcElementRef,
          className: (0, _classnames2.default)({ 'mdc-radio--disabled': rest.disabled })
        },
        React.createElement(RadioNativeControl, Object.assign({ id: labelId }, rest)),
        React.createElement(
          RadioBackground,
          null,
          React.createElement(RadioOuterCircle, null),
          React.createElement(RadioInnerCircle, null)
        )
      );

      /**
       * We have to conditionally wrap our radio in a FormField
       * If we have a label
       */
      if (label.length || children) {
        return React.createElement(
          _FormField2.default,
          null,
          radio,
          React.createElement(
            RadioLabel,
            { id: labelId + 'label', htmlFor: labelId },
            label,
            children
          )
        );
      } else {
        return radio;
      }
    }
  }]);

  return _class;
}(React.Component), Object.defineProperty(_class, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'Radio'
}), _temp));

exports.Radio = Radio;
exports.default = Radio;
