"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _antd = require("antd");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function InputSpecified(props) {
  var disabled = props.disabled,
    value = props.value,
    onChange = props.onChange;
  var selected = [];
  if (!disabled) {
    selected = value.split(',').map(function (v) {
      return parseInt(v, 10);
    });
  }
  var onChangeSelected = function onChangeSelected(v) {
    return onChange(v.length === 0 ? '0' : v.join(','));
  };
  var checkList = (0, _react.useMemo)(function () {
    var checks = [];
    for (var i = 0; i < 24; i++) {
      checks.push(/*#__PURE__*/_react.default.createElement(_antd.Col, {
        key: i,
        span: 4
      }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
        disabled: disabled,
        value: i
      }, i)));
    }
    return checks;
  }, [disabled]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "\u6307\u5B9A", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_antd.Checkbox.Group, {
    style: {
      width: '100%'
    },
    value: selected,
    onChange: onChangeSelected
  }, /*#__PURE__*/_react.default.createElement(_antd.Row, null, checkList)));
}
var _default = exports.default = InputSpecified;