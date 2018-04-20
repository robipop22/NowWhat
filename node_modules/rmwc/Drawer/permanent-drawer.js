'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PermanentDrawerContent = exports.PermanentDrawerToolbarSpacer = exports.PermanentDrawer = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Base = require('../Base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PermanentDrawer = exports.PermanentDrawer = (0, _Base.simpleTag)({
  displayName: 'PermanentDrawerRoot',
  tag: 'nav',
  classNames: 'mdc-permanent-drawer'
});

var PermanentDrawerToolbarSpacer = exports.PermanentDrawerToolbarSpacer = (0, _Base.simpleTag)({
  displayName: 'PermanentDrawerToolbarSpacer',

  classNames: 'mdc-permanent-drawer__toolbar-spacer'
});

var PermanentDrawerContent = exports.PermanentDrawerContent = (0, _Base.simpleTag)({
  displayName: 'PermanentDrawerContent',

  classNames: 'mdc-permanent-drawer__content'
});

exports.default = PermanentDrawer;
