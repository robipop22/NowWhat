'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridList = exports.GridTileTitleSupportText = exports.GridTileTitle = exports.GridTileSecondary = exports.GridTilePrimary = exports.GridTilePrimaryContent = exports.GridTilePrimaryRoot = exports.GridTile = exports.GridListTiles = exports.GridListRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Base = require('../Base');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GridListRoot = exports.GridListRoot = (0, _Base.simpleTag)({
  displayName: 'GridListRoot',
  classNames: function classNames(props) {
    return ['mdc-grid-list', _defineProperty({
      'mdc-grid-list--tile-gutter-1': props.tileGutter1,
      'mdc-grid-list--header-caption': props.headerCaption,
      'mdc-grid-list--twoline-caption': props.twolineCaption,
      'mdc-grid-list--with-icon-align-start': props.withIconAlignStart
    }, 'mdc-grid-list--tile-aspect-' + props.tileAspect, props.tileAspect)];
  },
  defaultProps: {
    tileGutter1: false,
    headerCaption: false,
    twolineCaption: false,
    withIconAlignStart: false,
    tileAspect: '1x1'
  },
  consumeProps: ['tileGutter1', 'headerCaption', 'twolineCaption', 'withIconAlignStart', 'tileAspect']
});

var GridListTiles = exports.GridListTiles = (0, _Base.simpleTag)({
  displayName: 'GridListTiles',
  tag: 'ul',
  classNames: 'mdc-grid-list__tiles'
});

var GridTile = exports.GridTile = (0, _Base.simpleTag)({
  displayName: 'GridTile',
  tag: 'li',
  classNames: 'mdc-grid-tile'
});

var GridTilePrimaryRoot = exports.GridTilePrimaryRoot = (0, _Base.simpleTag)({
  displayName: 'GridTilePrimary',
  classNames: 'mdc-grid-tile__primary'
});

var GridTilePrimaryContent = exports.GridTilePrimaryContent = (0, _Base.simpleTag)({
  displayName: 'GridTilePrimaryContent',
  classNames: 'mdc-grid-tile__primary-content',
  defaultProps: {
    wrap: true
  }
});

var GridTilePrimary = function GridTilePrimary(_ref2) {
  var children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ['children']);

  return React.createElement(
    GridTilePrimaryRoot,
    rest,
    React.createElement(
      GridTilePrimaryContent,
      null,
      children
    )
  );
};

exports.GridTilePrimary = GridTilePrimary;
var GridTileSecondary = exports.GridTileSecondary = (0, _Base.simpleTag)({
  displayName: 'GridTileSecondary',
  tag: 'span',
  classNames: 'mdc-grid-tile__secondary'
});

var GridTileTitle = exports.GridTileTitle = (0, _Base.simpleTag)({
  displayName: 'GridTileTitle',
  tag: 'span',
  classNames: 'mdc-grid-tile__title'
});

var GridTileTitleSupportText = exports.GridTileTitleSupportText = (0, _Base.simpleTag)({
  displayName: 'GridTileTitleSupportText',

  tag: 'span',
  classNames: 'mdc-grid-tile__support-text'
});

/**
 * Grid List Component
 */

var GridList = exports.GridList = function (_React$Component) {
  _inherits(GridList, _React$Component);

  function GridList() {
    _classCallCheck(this, GridList);

    return _possibleConstructorReturn(this, (GridList.__proto__ || Object.getPrototypeOf(GridList)).apply(this, arguments));
  }

  _createClass(GridList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      return React.createElement(
        GridListRoot,
        rest,
        React.createElement(
          GridListTiles,
          null,
          children
        )
      );
    }
  }]);

  return GridList;
}(React.Component);

exports.default = GridList;
