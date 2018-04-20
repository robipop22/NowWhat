'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemporaryDrawer = exports.TemporaryDrawerDrawer = exports.TemporaryDrawerRoot = exports.TemporaryDrawerContent = exports.TemporaryDrawerHeader = exports.TemporaryDrawerHeaderContent = exports.TemporaryDrawerHeaderRoot = undefined;

var _class, _temp;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Base = require('../Base');

var _List = require('../List');

var _mdc = require('@material/drawer/dist/mdc.drawer');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/***************************************************************************************
 * Drawer Headers
 ***************************************************************************************/
var TemporaryDrawerHeaderRoot = exports.TemporaryDrawerHeaderRoot = (0, _Base.simpleTag)({
  displayName: 'TemporaryDrawerHeader',
  classNames: 'mdc-temporary-drawer__header'
});

var TemporaryDrawerHeaderContent = exports.TemporaryDrawerHeaderContent = (0, _Base.simpleTag)({
  displayName: 'TemporaryDrawerHeaderContent',
  classNames: 'mdc-temporary-drawer__header-content'
});

var TemporaryDrawerHeader = exports.TemporaryDrawerHeader = function (_React$Component) {
  _inherits(TemporaryDrawerHeader, _React$Component);

  function TemporaryDrawerHeader() {
    _classCallCheck(this, TemporaryDrawerHeader);

    return _possibleConstructorReturn(this, (TemporaryDrawerHeader.__proto__ || Object.getPrototypeOf(TemporaryDrawerHeader)).apply(this, arguments));
  }

  _createClass(TemporaryDrawerHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      return React.createElement(
        TemporaryDrawerHeaderRoot,
        rest,
        React.createElement(
          TemporaryDrawerHeaderContent,
          null,
          children
        )
      );
    }
  }]);

  return TemporaryDrawerHeader;
}(React.Component);

/***************************************************************************************
 * Drawer Content
 ***************************************************************************************/


var TemporaryDrawerContent = exports.TemporaryDrawerContent = (0, _Base.simpleTag)({
  displayName: 'TemporaryDrawerContent',
  tag: _List.List,
  classNames: 'mdc-temporary-drawer__content'
});

/***************************************************************************************
 * Drawers
 ***************************************************************************************/
var TemporaryDrawerRoot = exports.TemporaryDrawerRoot = (0, _Base.simpleTag)({
  displayName: 'TemporaryDrawerRoot',
  tag: 'aside',
  classNames: 'mdc-temporary-drawer'
});

var TemporaryDrawerDrawer = exports.TemporaryDrawerDrawer = (0, _Base.simpleTag)({
  displayName: 'TemporaryDrawerDrawer',
  tag: 'header',
  classNames: 'mdc-temporary-drawer__drawer'
});

var TemporaryDrawer = (0, _Base.withMDCDrawer)({
  mdcConstructor: _mdc.MDCTemporaryDrawer,
  mdcElementRef: true,
  drawerConstructorName: 'MDCTemporaryDrawer',
  defaultProps: {
    open: false
  }
})((_temp = _class = function (_React$Component2) {
  _inherits(_class, _React$Component2);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          onOpen = _props2.onOpen,
          onClose = _props2.onClose,
          open = _props2.open,
          mdcElementRef = _props2.mdcElementRef,
          rest = _objectWithoutProperties(_props2, ['children', 'onOpen', 'onClose', 'open', 'mdcElementRef']);

      return React.createElement(
        TemporaryDrawerRoot,
        Object.assign({ elementRef: mdcElementRef }, rest),
        React.createElement(
          TemporaryDrawerDrawer,
          null,
          children
        )
      );
    }
  }]);

  return _class;
}(React.Component), Object.defineProperty(_class, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'TemporaryDrawer'
}), _temp));

exports.TemporaryDrawer = TemporaryDrawer;
exports.default = TemporaryDrawer;
