'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Elevation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Base = require('../Base');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The Elevation Component
 */
var Elevation = exports.Elevation = function (_simpleTag) {
  _inherits(Elevation, _simpleTag);

  function Elevation() {
    _classCallCheck(this, Elevation);

    return _possibleConstructorReturn(this, (Elevation.__proto__ || Object.getPrototypeOf(Elevation)).apply(this, arguments));
  }

  _createClass(Elevation, [{
    key: 'render',
    value: function render() {
      return _get(Elevation.prototype.__proto__ || Object.getPrototypeOf(Elevation.prototype), 'render', this).call(this);
    }
  }]);

  return Elevation;
}((0, _Base.simpleTag)({
  displayName: 'Elevation',
  defaultProps: {
    z: 0,
    transition: false
  },
  tag: 'div',
  classNames: function classNames(props) {
    return ['mdc-elevation--z' + props.z, { 'mdc-elevation-transition': props.transition }];
  },
  consumeProps: ['z', 'transition']
}));

exports.default = Elevation;
