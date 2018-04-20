'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var IconButton = function IconButton(_ref) {
  var children = _ref.children,
      use = _ref.use,
      rest = _objectWithoutProperties(_ref, ['children', 'use']);

  // styles ripped from Angular Material https://material.angularjs.org/latest/demo/button
  var buttonStyle = {
    marginLeft: '6px',
    marginRight: '6px',
    height: '40px',
    minWidth: '0',
    lineHeight: '24px',
    padding: '8px',
    width: '40px',
    borderRadius: '50%'
  };

  var mergedStyle = Object.assign({}, buttonStyle, rest.style || {});

  var iconName = use || children;
  return React.createElement(
    _Button2.default,
    Object.assign({}, rest, { style: mergedStyle }),
    React.createElement(_Icon2.default, { use: iconName })
  );
};
exports.IconButton = IconButton;
exports.default = IconButton;
