'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simpleTag = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _withTheme = require('./withTheme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var simpleTag = function simpleTag(_ref) {
  var _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === undefined ? 'SimpleTag' : _ref$displayName,
      _ref$defaultProps = _ref.defaultProps,
      defaultProps = _ref$defaultProps === undefined ? {} : _ref$defaultProps,
      _ref$consumeProps = _ref.consumeProps,
      consumeProps = _ref$consumeProps === undefined ? [] : _ref$consumeProps,
      _ref$tag = _ref.tag,
      defaultTag = _ref$tag === undefined ? 'div' : _ref$tag,
      _ref$wrap = _ref.wrap,
      defaultWrap = _ref$wrap === undefined ? false : _ref$wrap,
      classNames = _ref.classNames;

  var SimpleTag = function (_React$Component) {
    _inherits(SimpleTag, _React$Component);

    function SimpleTag() {
      _classCallCheck(this, SimpleTag);

      return _possibleConstructorReturn(this, (SimpleTag.__proto__ || Object.getPrototypeOf(SimpleTag)).apply(this, arguments));
    }

    _createClass(SimpleTag, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            tag = _props.tag,
            className = _props.className,
            _props$wrap = _props.wrap,
            wrap = _props$wrap === undefined ? false : _props$wrap,
            elementRef = _props.elementRef,
            theme = _props.theme,
            rest = _objectWithoutProperties(_props, ['tag', 'className', 'wrap', 'elementRef', 'theme']);

        // choose the tag we are going to render


        var Tag = tag || defaultTag;

        // consume any props that shouldnt be passed along
        var safeRest = Object.assign({}, rest);
        consumeProps.forEach(function (p) {
          Reflect.deleteProperty(safeRest, p);
        });

        // handle elementRefs
        if (elementRef) {
          // if the tag is a string, make our ref
          // otherwise pass elementRef along
          if (typeof Tag === 'string') {
            safeRest.ref = elementRef;
          } else {
            safeRest.elementRef = elementRef;
          }
        }

        // generate the final classnames for the component
        var safeClassNames = (0, _classnames2.default)(className, (0, _withTheme.parseThemeOptions)(theme), typeof classNames === 'function' ? classNames(rest) : classNames);

        // handle wrapping components
        if (wrap || defaultWrap) {
          // sometimes we have undfeind children
          if (!rest.children) return null;

          // make sure we delete our children here
          // so we dont recrusively clonse ourselves
          Reflect.deleteProperty(safeRest, 'children');
          var child = React.Children.only(rest.children);
          return React.cloneElement(child, Object.assign({}, child.props, safeRest, { className: safeClassNames }));
        }

        // default return
        return React.createElement(Tag, Object.assign({ className: safeClassNames }, safeRest));
      }
    }]);

    return SimpleTag;
  }(React.Component);

  Object.defineProperty(SimpleTag, 'displayName', {
    enumerable: true,
    writable: true,
    value: displayName
  });
  Object.defineProperty(SimpleTag, 'defaultProps', {
    enumerable: true,
    writable: true,
    value: Object.assign({}, defaultProps, {
      tag: defaultTag
    })
  });


  return SimpleTag;
};
exports.simpleTag = simpleTag;
