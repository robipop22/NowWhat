'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Typography = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Base = require('../Base');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The Typography Component
 */
var Typography = exports.Typography = function (_simpleTag) {
  _inherits(Typography, _simpleTag);

  function Typography() {
    _classCallCheck(this, Typography);

    return _possibleConstructorReturn(this, (Typography.__proto__ || Object.getPrototypeOf(Typography)).apply(this, arguments));
  }

  _createClass(Typography, [{
    key: 'render',
    value: function render() {
      return _get(Typography.prototype.__proto__ || Object.getPrototypeOf(Typography.prototype), 'render', this).call(this);
    }
  }]);

  return Typography;
}((0, _Base.simpleTag)({
  displayName: 'Typography',
  defaultProps: {
    use: undefined,
    adjustMargin: false
  },
  tag: 'span',
  classNames: function classNames(props) {
    var _ref;

    return [(_ref = {}, _defineProperty(_ref, 'mdc-typography--' + props.use, props.use), _defineProperty(_ref, 'mdc-typography--adjust-margin', props.adjustMargin), _ref)];
  },
  consumeProps: ['use', 'adjustMargin']
}));

exports.default = Typography;
