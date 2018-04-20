'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = exports.GridInner = exports.GridRoot = exports.GridCell = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Base = require('../Base');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridCell = exports.GridCell = function (_simpleTag) {
  _inherits(GridCell, _simpleTag);

  function GridCell() {
    _classCallCheck(this, GridCell);

    return _possibleConstructorReturn(this, (GridCell.__proto__ || Object.getPrototypeOf(GridCell)).apply(this, arguments));
  }

  _createClass(GridCell, [{
    key: 'render',
    value: function render() {
      return _get(GridCell.prototype.__proto__ || Object.getPrototypeOf(GridCell.prototype), 'render', this).call(this);
    }
  }]);

  return GridCell;
}((0, _Base.simpleTag)({
  displayName: 'GridCell',
  defaultProps: {
    span: undefined,
    phone: undefined,
    tablet: undefined,
    desktop: undefined
  },
  classNames: function classNames(props) {
    var _ref;

    return ['mdc-layout-grid__cell', (_ref = {}, _defineProperty(_ref, 'mdc-layout-grid__cell--span-' + props.span, props.span !== undefined), _defineProperty(_ref, 'mdc-layout-grid__cell--span-' + props.phone + '-phone', props.phone !== undefined), _defineProperty(_ref, 'mdc-layout-grid__cell--span-' + props.tablet + '-tablet', props.tablet !== undefined), _defineProperty(_ref, 'mdc-layout-grid__cell--span-' + props.desktop + '-desktop', props.desktop !== undefined), _ref)];
  },
  consumeProps: ['span', 'phone', 'tablet', 'desktop']
}));

var GridRoot = exports.GridRoot = (0, _Base.simpleTag)({
  displayName: 'GridRoot',
  classNames: 'mdc-layout-grid'
});

var GridInner = exports.GridInner = (0, _Base.simpleTag)({
  displayName: 'GridInner',
  classNames: 'mdc-layout-grid__inner'
});

var Grid = function Grid(_ref2) {
  var children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ['children']);

  return React.createElement(
    GridRoot,
    rest,
    React.createElement(
      GridInner,
      null,
      children
    )
  );
};
exports.Grid = Grid;
