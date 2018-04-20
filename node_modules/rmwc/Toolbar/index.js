'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toolbar = exports.ToolbarIcon = exports.ToolbarMenuIcon = exports.ToolbarFixedAdjust = exports.ToolbarRow = exports.ToolbarSection = exports.ToolbarTitle = exports.ToolbarRoot = undefined;

var _class, _temp;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _mdc = require('@material/toolbar/dist/mdc.toolbar');

var _Icon = require('../Icon');

var _Base = require('../Base');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolbarRoot = exports.ToolbarRoot = (0, _Base.simpleTag)({
  tag: 'header',
  classNames: function classNames(props) {
    return ['mdc-toolbar', {
      'mdc-toolbar--fixed': props.fixed,
      'mdc-toolbar--waterfall': props.waterfall,
      'mdc-toolbar--fixed-lastrow-only': props.fixedLastrowOnly,
      'mdc-toolbar--flexible': props.flexible,
      'mdc-toolbar--flexible-default-behavior': props.flexibleDefaultBehavior
    }];
  },
  defaultProps: {
    fixed: false,
    waterfall: false,
    fixedLastrowOnly: false,
    flexible: false,
    flexibleDefaultBehavior: false
  },
  consumeProps: ['fixed', 'waterfall', 'fixedLastrowOnly', 'flexible', 'flexibleDefaultBehavior']
});

var ToolbarTitle = exports.ToolbarTitle = (0, _Base.simpleTag)({
  displayName: 'ToolbarTitle',
  classNames: 'mdc-toolbar__title'
});

var ToolbarSection = exports.ToolbarSection = function (_simpleTag) {
  _inherits(ToolbarSection, _simpleTag);

  function ToolbarSection() {
    _classCallCheck(this, ToolbarSection);

    return _possibleConstructorReturn(this, (ToolbarSection.__proto__ || Object.getPrototypeOf(ToolbarSection)).apply(this, arguments));
  }

  _createClass(ToolbarSection, [{
    key: 'render',
    value: function render() {
      return _get(ToolbarSection.prototype.__proto__ || Object.getPrototypeOf(ToolbarSection.prototype), 'render', this).call(this);
    }
  }]);

  return ToolbarSection;
}((0, _Base.simpleTag)({
  displayName: 'ToolbarSection',
  tag: 'section',
  classNames: function classNames(props) {
    return ['mdc-toolbar__section', {
      'mdc-toolbar__section--align-start': props.alignStart,
      'mdc-toolbar__section--align-end': props.alignEnd,
      'mdc-toolbar__section--shrink-to-fit': props.shrinkToFit
    }];
  },
  defaultProps: {
    alignStart: false,
    alignEnd: false,
    shrinkToFit: false
  },
  consumeProps: ['alignStart', 'alignEnd', 'shrinkToFit']
}));

var ToolbarRow = exports.ToolbarRow = (0, _Base.simpleTag)({
  displayName: 'ToolbarRow',
  classNames: 'mdc-toolbar__row'
});

/**
 * This component can be placed after a fixed Toolbar component to fill in the space.
 */
var ToolbarFixedAdjust = exports.ToolbarFixedAdjust = (0, _Base.simpleTag)({
  displayName: 'ToolbarFixedAdjust',
  classNames: 'mdc-toolbar-fixed-adjust'
});

/**
 * A Menu Icon For the Toolbar
 */
var ToolbarMenuIcon = exports.ToolbarMenuIcon = function ToolbarMenuIcon(props) {
  return React.createElement(_Icon.Icon, Object.assign({}, props, { className: (props.className, 'mdc-toolbar__menu-icon') }));
};

/**
 * A standard Icon for toolbar actions
 */
var ToolbarIcon = exports.ToolbarIcon = function ToolbarIcon(props) {
  return React.createElement(_Icon.Icon, Object.assign({}, props, { className: (props.className, 'mdc-toolbar__icon') }));
};

var Toolbar = (0, _Base.withMDC)({
  mdcConstructor: _mdc.MDCToolbar,
  mdcElementRef: true,
  onMount: function onMount(props, api, inst) {
    var el = inst.mdcGetRootElement();
    if (api && el && el.nextSibling && (el.nextSibling.getAttribute('class') || '').includes('mdc-toolbar-fixed-adjust')) {
      api.fixedAdjustElement = el.nextSibling;
    }
  },
  onUpdate: function onUpdate(props, nextProps, api, inst) {
    // MDC cant change these gracefully
    // if our props change, we have to reinit the component
    var didChange = ['fixedLastrowOnly', 'flexible', 'flexibleDefaultBehavior'].some(function (key) {
      if (props && nextProps) {
        return props[key] !== nextProps[key];
      }
    });

    if (didChange && api) {
      // clean up flexible classes
      var root = api.root_;
      if (root) {
        root.classList.remove('mdc-toolbar--flexible-space-maximized');
        root.classList.remove('mdc-toolbar--flexible-space-minimized');
      }

      // reset first row height
      var firstRow = api.firstRowElement_;
      firstRow && firstRow.style.removeProperty('height');

      // reset the titles style
      var title = api.titleElement_;
      title && title.style.removeProperty('font-size');

      // reset fixedAdjustElement
      api.fixedAdjustElement && api.fixedAdjustElement.style.removeProperty('height');

      // delay re-init for a frame otherwise MDC doesnt
      // catch the class and style changes
      window.requestAnimationFrame(function () {
        inst.mdcComponentReinit();
      });
    }
  }
})((_temp = _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          mdcElementRef = _props.mdcElementRef,
          rest = _objectWithoutProperties(_props, ['mdcElementRef']);

      return React.createElement(ToolbarRoot, Object.assign({ elementRef: mdcElementRef }, rest));
    }
  }]);

  return _class;
}(React.Component), Object.defineProperty(_class, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'Toolbar'
}), _temp));

exports.Toolbar = Toolbar;
exports.default = Toolbar;
