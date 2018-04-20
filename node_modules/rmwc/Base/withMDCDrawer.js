'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMDCDrawer = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Base = require('../Base');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var eventPath = function eventPath(evt) {
  var path = evt.composedPath && evt.composedPath() || evt.path;
  var target = evt.target;

  if (path) {
    // Safari doesn't include Window, and it should.
    path = path.indexOf(window) < 0 ? path.concat([window]) : path;
    return path;
  }

  if (target === window) {
    return [window];
  }

  function getParents(node, memo) {
    memo = memo || [];
    var parentNode = node.parentNode || undefined;

    if (!parentNode) {
      return memo;
    } else {
      return getParents(parentNode, memo.concat([parentNode]));
    }
  }

  return [target].concat(getParents(target)).concat([window]);
};

var withMDCDrawer = exports.withMDCDrawer = function withMDCDrawer() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      mdcConstructor = _ref.mdcConstructor,
      drawerConstructorName = _ref.drawerConstructorName;

  return function (Component) {
    var _mdcEvents;

    return (0, _Base.withMDC)({
      mdcConstructor: mdcConstructor,
      mdcEvents: (_mdcEvents = {}, _defineProperty(_mdcEvents, drawerConstructorName + ':open', function undefined(evt, props) {
        return props.onOpen(evt);
      }), _defineProperty(_mdcEvents, drawerConstructorName + ':close', function undefined(evt, props) {
        return props.onClose(evt);
      }), _mdcEvents),
      defaultProps: {
        open: false,
        onClose: _Base.noop,
        onOpen: _Base.noop
      },
      onMount: function onMount(props, api, inst) {
        if (!api) return;

        // Reacts events are delegated to the body but Material is using stopPropagation, preventing any
        // onClick events in the drawer from firing/
        // Am unfortunate solution, monkeypatch the internal handlers to work without stopProp

        // store the handler
        var componentClickHandler = api.foundation_.componentClickHandler_;

        // remove the old one
        api.foundation_.adapter_.deregisterInteractionHandler('click', api.foundation_.componentClickHandler_);

        // The drawer click handler only stopsProp, we are just going to remove it
        // and add logic to check if the drawer should close to the component click handler
        api.foundation_.adapter_.deregisterDrawerInteractionHandler('click', api.foundation_.drawerClickHandler_);

        // replace with new function
        api.foundation_.componentClickHandler_ = function (evt) {
          var path = eventPath(evt);
          var drawerClickedWasClicked = path.some(function (el) {
            return el.classList && el.classList.contains('mdc-temporary-drawer__drawer');
          });
          if (!drawerClickedWasClicked && componentClickHandler) {
            componentClickHandler(evt);
          }
        };

        // rebind
        api.foundation_.adapter_.registerInteractionHandler('click', api.foundation_.componentClickHandler_);
      },
      onUpdate: function onUpdate(props, nextProps, api) {
        if (api && api.open !== !!nextProps.open) {
          api.open = !!nextProps.open;
        }
      }
    })(function (props) {
      return React.createElement(Component, props);
    });
  };
};
