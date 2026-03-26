"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _antd = require("antd");
var _react = _interopRequireWildcard(require("react"));
var _cronRegex = require("./cron-regex");
var _DayPane = _interopRequireDefault(require("./DayPane"));
var _HourPane = _interopRequireDefault(require("./HourPane"));
var _MinutePane = _interopRequireDefault(require("./MinutePane"));
var _MonthPane = _interopRequireDefault(require("./MonthPane"));
var _SecondPane = _interopRequireDefault(require("./SecondPane"));
var _WeekPane = _interopRequireDefault(require("./WeekPane"));
var _YearPane = _interopRequireDefault(require("./YearPane"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var tabPaneStyle = {
  paddingLeft: 10,
  paddingBottom: 8,
  marginTop: -10
};
var getTabTitle = function getTabTitle(text) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 50,
      textAlign: 'center'
    }
  }, text);
};
var allTabItems = [{
  key: '1',
  label: '秒',
  type: 'second'
}, {
  key: '2',
  label: '分',
  type: 'minute'
}, {
  key: '3',
  label: '时',
  type: 'hour'
}, {
  key: '4',
  label: '日',
  type: 'day'
}, {
  key: '5',
  label: '月',
  type: 'month'
}, {
  key: '6',
  label: '周',
  type: 'week'
}, {
  key: '7',
  label: '年',
  type: 'year'
}];
function NebulaCron(props) {
  var style = props.style,
    footerStyle = props.footerStyle,
    footerRenderer = props.footerRenderer,
    value = props.value,
    onOk = props.onOk,
    _props$tabs = props.tabs,
    tabs = _props$tabs === void 0 ? allTabItems : _props$tabs;
  var _useState = (0, _react.useState)(function () {
      var _tabs$;
      return ((_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key) || '1';
    }),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    currentTab = _useState2[0],
    setCurrentTab = _useState2[1];
  var _useState3 = (0, _react.useState)('*'),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    second = _useState4[0],
    setSecond = _useState4[1];
  var _useState5 = (0, _react.useState)('*'),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    minute = _useState6[0],
    setMinute = _useState6[1];
  var _useState7 = (0, _react.useState)('*'),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    hour = _useState8[0],
    setHour = _useState8[1];
  var _useState9 = (0, _react.useState)('*'),
    _useState0 = (0, _slicedToArray2.default)(_useState9, 2),
    day = _useState0[0],
    setDay = _useState0[1];
  var _useState1 = (0, _react.useState)('*'),
    _useState10 = (0, _slicedToArray2.default)(_useState1, 2),
    month = _useState10[0],
    setMonth = _useState10[1];
  var _useState11 = (0, _react.useState)('?'),
    _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
    week = _useState12[0],
    setWeek = _useState12[1];
  var _useState13 = (0, _react.useState)('*'),
    _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
    year = _useState14[0],
    setYear = _useState14[1];
  var onParse = function onParse() {
    if (value) {
      try {
        var _value$split = value.split(' '),
          _value$split2 = (0, _slicedToArray2.default)(_value$split, 7),
          secondVal = _value$split2[0],
          minuteValue = _value$split2[1],
          hourVal = _value$split2[2],
          dayVal = _value$split2[3],
          monthVal = _value$split2[4],
          weekVal = _value$split2[5],
          yearVal = _value$split2[6];
        secondVal = _cronRegex.secondRegex.test(secondVal) ? secondVal : '*';
        minuteValue = _cronRegex.minuteRegex.test(minuteValue) ? minuteValue : '*';
        hourVal = _cronRegex.hourRegex.test(hourVal) ? hourVal : '*';
        dayVal = _cronRegex.dayRegex.test(dayVal) ? dayVal : '*';
        monthVal = _cronRegex.monthRegex.test(monthVal) ? monthVal : '*';
        weekVal = _cronRegex.weekRegex.test(weekVal) ? weekVal : '?';
        weekVal = dayVal !== '?' ? '?' : weekVal;
        yearVal = _cronRegex.yearRegex.test(yearVal) ? yearVal : '*';
        setSecond(secondVal);
        setMinute(minuteValue);
        setHour(hourVal);
        setDay(dayVal);
        setMonth(monthVal);
        setWeek(weekVal);
        setYear(yearVal);
      } catch (error) {
        setSecond('*');
        setMinute('*');
        setHour('*');
        setDay('*');
        setMonth('*');
        setWeek('?');
        setYear('*');
      }
    }
  };
  var onReset = function onReset() {
    setSecond('*');
    setMinute('*');
    setHour('*');
    setDay('*');
    setMonth('*');
    setWeek('?');
    setYear('*');
    if (onOk) {
      onOk(['*', '*', '*', '*', '*', '?', '*'].join(' '));
    }
  };
  var onGenerate = function onGenerate() {
    if (onOk) {
      onOk([second, minute, hour, day, month, week, year].join(' '));
    }
  };
  var onChangeDay = function onChangeDay(v) {
    setDay(v);
    if (v !== '?') {
      setWeek('?');
    }
  };
  var onChangeWeek = function onChangeWeek(v) {
    setWeek(v);
    if (v !== '?') {
      setDay('?');
    }
  };
  (0, _react.useEffect)(onParse, [value]);
  var tabItems = tabs.map(function (tab) {
    var commonProps = {
      key: tab.key,
      label: getTabTitle(tab.label),
      style: tabPaneStyle
    };
    switch (tab.type) {
      case 'second':
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, commonProps), {}, {
          children: /*#__PURE__*/_react.default.createElement(_SecondPane.default, {
            value: second,
            onChange: setSecond
          })
        });
      case 'minute':
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, commonProps), {}, {
          children: /*#__PURE__*/_react.default.createElement(_MinutePane.default, {
            value: minute,
            onChange: setMinute
          })
        });
      case 'hour':
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, commonProps), {}, {
          children: /*#__PURE__*/_react.default.createElement(_HourPane.default, {
            value: hour,
            onChange: setHour
          })
        });
      case 'day':
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, commonProps), {}, {
          children: /*#__PURE__*/_react.default.createElement(_DayPane.default, {
            value: day,
            onChange: onChangeDay
          })
        });
      case 'month':
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, commonProps), {}, {
          children: /*#__PURE__*/_react.default.createElement(_MonthPane.default, {
            value: month,
            onChange: setMonth
          })
        });
      case 'week':
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, commonProps), {}, {
          children: /*#__PURE__*/_react.default.createElement(_WeekPane.default, {
            value: week,
            onChange: onChangeWeek
          })
        });
      case 'year':
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, commonProps), {}, {
          children: /*#__PURE__*/_react.default.createElement(_YearPane.default, {
            value: year,
            onChange: setYear
          })
        });
      default:
        return null;
    }
  }).filter(Boolean);
  var footerRendererWrapper = (0, _react.useCallback)(function () {
    if (footerRenderer && typeof footerRenderer === 'function') {
      return footerRenderer(onReset, onGenerate);
    }
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
      style: {
        marginRight: 10
      },
      onClick: onReset
    }, "\u91CD\u7F6E"), /*#__PURE__*/_react.default.createElement(_antd.Button, {
      type: "primary",
      onClick: onGenerate
    }, "\u751F\u6210"));
  }, [footerRenderer, onReset, onGenerate]);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: (0, _objectSpread2.default)({
      backgroundColor: '#fff',
      borderRadius: '2px',
      outline: 'none',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
      width: 600
    }, style)
  }, /*#__PURE__*/_react.default.createElement(_antd.Tabs, {
    tabBarGutter: 0,
    animated: true,
    destroyOnHidden: true,
    activeKey: currentTab,
    onChange: setCurrentTab,
    items: tabItems
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: (0, _objectSpread2.default)({
      borderTop: '1px solid #e8e8e8',
      padding: 10,
      textAlign: 'right'
    }, footerStyle)
  }, footerRendererWrapper()));
}
var _default = exports.default = NebulaCron;