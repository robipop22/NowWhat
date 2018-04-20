'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Theme = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Base = require('../Base');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ThemeRoot = (0, _Base.simpleTag)({
  tag: 'span'
});

/**
 * A Theme Component.
 */
var Theme = function Theme(_ref) {
  var use = _ref.use,
      rest = _objectWithoutProperties(_ref, ['use']);

  return React.createElement(ThemeRoot, Object.assign({ theme: use }, rest));
};

exports.Theme = Theme;
Theme.displayName = 'Theme';
