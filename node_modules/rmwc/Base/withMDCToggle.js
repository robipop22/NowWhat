'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMDCToggle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _withMDC = require('./withMDC');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withMDCToggle = exports.withMDCToggle = function withMDCToggle() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      mdcConstructor = _ref.mdcConstructor;

  return function (Component) {
    return (0, _withMDC.withMDC)({
      mdcConstructor: mdcConstructor,
      mdcElementRef: true,
      defaultProps: {
        label: undefined,
        id: undefined,
        checked: undefined,
        indeterminate: undefined,
        disabled: false
      },
      onUpdate: function onUpdate(props, nextProps, api) {
        if (api && nextProps.indeterminate !== api.indeterminate) {
          api.indeterminate = nextProps.indeterminate;
        }
      }
    })(function (_React$Component) {
      _inherits(_class2, _React$Component);

      function _class2() {
        _classCallCheck(this, _class2);

        return _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).apply(this, arguments));
      }

      _createClass(_class2, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          this.generatedId = Date.now() + Math.random() + '';
        }
      }, {
        key: 'render',
        value: function render() {
          return React.createElement(Component, Object.assign({}, this.props, { generatedId: this.generatedId }));
        }
      }]);

      return _class2;
    }(React.Component));
  };
};
