'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PersistentDrawer = exports.PersistentDrawerDrawer = exports.PersistentDrawerRoot = exports.PersistentDrawerContent = exports.PersistentDrawerHeader = exports.PersistentDrawerHeaderContent = exports.PersistentDrawerHeaderRoot = undefined;

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
var PersistentDrawerHeaderRoot = exports.PersistentDrawerHeaderRoot = (0, _Base.simpleTag)({
  displayName: 'PersistentDrawerHeader',
  classNames: 'mdc-persistent-drawer__header'
});

var PersistentDrawerHeaderContent = exports.PersistentDrawerHeaderContent = (0, _Base.simpleTag)({
  displayName: 'PersistentDrawerHeaderContent',
  classNames: 'mdc-persistent-drawer__header-content'
});

var PersistentDrawerHeader = exports.PersistentDrawerHeader = function (_React$Component) {
  _inherits(PersistentDrawerHeader, _React$Component);

  function PersistentDrawerHeader() {
    _classCallCheck(this, PersistentDrawerHeader);

    return _possibleConstructorReturn(this, (PersistentDrawerHeader.__proto__ || Object.getPrototypeOf(PersistentDrawerHeader)).apply(this, arguments));
  }

  _createClass(PersistentDrawerHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      return React.createElement(
        PersistentDrawerHeaderRoot,
        rest,
        React.createElement(
          PersistentDrawerHeaderContent,
          null,
          children
        )
      );
    }
  }]);

  return PersistentDrawerHeader;
}(React.Component);

/***************************************************************************************
 * Drawer Content
 ***************************************************************************************/


var PersistentDrawerContent = exports.PersistentDrawerContent = (0, _Base.simpleTag)({
  displayName: 'PersistentDrawerContent',
  tag: _List.List,
  classNames: 'mdc-persistent-drawer__content'
});

/***************************************************************************************
 * Drawers
 ***************************************************************************************/

var PersistentDrawerRoot = exports.PersistentDrawerRoot = (0, _Base.simpleTag)({
  displayName: 'PersistentDrawerRoot',
  tag: 'aside',
  classNames: 'mdc-persistent-drawer'
});

var PersistentDrawerDrawer = exports.PersistentDrawerDrawer = (0, _Base.simpleTag)({
  displayName: 'PersistentDrawerDrawer',
  tag: 'header',
  classNames: 'mdc-persistent-drawer__drawer'
});

var PersistentDrawer = (0, _Base.withMDCDrawer)({
  mdcConstructor: _mdc.MDCPersistentDrawer,
  mdcElementRef: true,
  drawerConstructorName: 'MDCPersistentDrawer',
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
        PersistentDrawerRoot,
        Object.assign({ elementRef: mdcElementRef }, rest),
        React.createElement(
          PersistentDrawerDrawer,
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
  value: 'PersistentDrawer'
}), _temp));

exports.PersistentDrawer = PersistentDrawer;
exports.default = PersistentDrawer;
