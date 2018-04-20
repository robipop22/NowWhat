'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinearProgress = exports.LinearProgressBarInner = exports.LinearProgressSecondaryBar = exports.LinearProgressPrimaryBar = exports.LinearProgressBuffer = exports.LinearProgressBufferingDots = exports.LinearProgressRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;
/* eslint-disable max-len */

/* eslint-enable max-len */


var _react = require('react');

var React = _interopRequireWildcard(_react);

var _mdc = require('@material/linear-progress/dist/mdc.linearProgress');

var _Base = require('../Base');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinearProgressRoot = exports.LinearProgressRoot = (0, _Base.simpleTag)({
  displayName: 'LinearProgressRoot',
  tag: 'nav',
  classNames: function classNames(props) {
    return ['mdc-linear-progress', {
      'mdc-linear-progress--indeterminate': !props.determinate,
      'mdc-linear-progress--reversed': props.reversed,
      'mdc-linear-progress--accent': props.accent
    }];
  },
  defaultProps: {
    role: 'progressbar',
    determinate: true,
    reversed: false,
    accent: false
  },
  consumeProps: ['determinate', 'reversed', 'accent']
});

var LinearProgressBufferingDots = exports.LinearProgressBufferingDots = (0, _Base.simpleTag)({
  displayName: 'LinearProgressBufferingDots',
  classNames: 'mdc-linear-progress__buffering-dots'
});

var LinearProgressBuffer = exports.LinearProgressBuffer = (0, _Base.simpleTag)({
  displayName: 'LinearProgressBuffer',
  classNames: 'mdc-linear-progress__buffer'
});

var LinearProgressPrimaryBar = exports.LinearProgressPrimaryBar = (0, _Base.simpleTag)({
  displayName: 'LinearProgressPrimaryBar',
  classNames: 'mdc-linear-progress__bar mdc-linear-progress__primary-bar'
});

var LinearProgressSecondaryBar = exports.LinearProgressSecondaryBar = (0, _Base.simpleTag)({
  displayName: 'LinearProgressSecondaryBar',
  classNames: 'mdc-linear-progress__bar mdc-linear-progress__secondary-bar'
});

var LinearProgressBarInner = exports.LinearProgressBarInner = (0, _Base.simpleTag)({
  displayName: 'LinearProgressBarInner',
  classNames: 'mdc-linear-progress__bar-inner'
});

var LinearProgress = (0, _Base.withMDC)({
  mdcConstructor: _mdc.MDCLinearProgress,
  mdcElementRef: true,
  defaultProps: {
    progress: 0,
    buffer: undefined,
    determinate: true,
    reversed: false
  },
  onUpdate: function onUpdate(props, nextProps, api) {
    ['progress', 'buffer', 'determinate', 'reversed', 'accent'].forEach(function (key) {
      if (api && nextProps[key] !== undefined && api[key] !== nextProps[key]) {
        api[key] = nextProps[key];
      }
    });
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
          progress = _props.progress,
          buffer = _props.buffer,
          mdcElementRef = _props.mdcElementRef,
          rest = _objectWithoutProperties(_props, ['progress', 'buffer', 'mdcElementRef']);

      return React.createElement(
        LinearProgressRoot,
        Object.assign({ elementRef: mdcElementRef }, rest),
        React.createElement(LinearProgressBufferingDots, null),
        React.createElement(LinearProgressBuffer, null),
        React.createElement(
          LinearProgressPrimaryBar,
          null,
          React.createElement(LinearProgressBarInner, null)
        ),
        React.createElement(
          LinearProgressSecondaryBar,
          null,
          React.createElement(LinearProgressBarInner, null)
        )
      );
    }
  }]);

  return _class;
}(React.Component), Object.defineProperty(_class, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'LinearProgress'
}), _temp));

exports.LinearProgress = LinearProgress;
exports.default = LinearProgress;
