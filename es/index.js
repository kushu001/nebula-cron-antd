import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Button, Tabs } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { dayRegex, hourRegex, minuteRegex, monthRegex, secondRegex, weekRegex, yearRegex } from './cron-regex';
import DayPane from './DayPane';
import HourPane from './HourPane';
import MinutePane from './MinutePane';
import MonthPane from './MonthPane';
import SecondPane from './SecondPane';
import WeekPane from './WeekPane';
import YearPane from './YearPane';
var tabPaneStyle = {
  paddingLeft: 10,
  paddingBottom: 8,
  marginTop: -10
};
var getTabTitle = function getTabTitle(text) {
  return /*#__PURE__*/React.createElement("div", {
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
  var _useState = useState(function () {
      var _tabs$;
      return ((_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key) || '1';
    }),
    _useState2 = _slicedToArray(_useState, 2),
    currentTab = _useState2[0],
    setCurrentTab = _useState2[1];
  var _useState3 = useState('*'),
    _useState4 = _slicedToArray(_useState3, 2),
    second = _useState4[0],
    setSecond = _useState4[1];
  var _useState5 = useState('*'),
    _useState6 = _slicedToArray(_useState5, 2),
    minute = _useState6[0],
    setMinute = _useState6[1];
  var _useState7 = useState('*'),
    _useState8 = _slicedToArray(_useState7, 2),
    hour = _useState8[0],
    setHour = _useState8[1];
  var _useState9 = useState('*'),
    _useState0 = _slicedToArray(_useState9, 2),
    day = _useState0[0],
    setDay = _useState0[1];
  var _useState1 = useState('*'),
    _useState10 = _slicedToArray(_useState1, 2),
    month = _useState10[0],
    setMonth = _useState10[1];
  var _useState11 = useState('?'),
    _useState12 = _slicedToArray(_useState11, 2),
    week = _useState12[0],
    setWeek = _useState12[1];
  var _useState13 = useState('*'),
    _useState14 = _slicedToArray(_useState13, 2),
    year = _useState14[0],
    setYear = _useState14[1];
  var getCronValue = function getCronValue() {
    var tabTypes = tabs.map(function (tab) {
      return tab.type;
    });
    var values = [];
    if (tabTypes.includes('second')) {
      values.push(second);
    }
    if (tabTypes.includes('minute')) {
      values.push(minute);
    }
    if (tabTypes.includes('hour')) {
      values.push(hour);
    }
    if (tabTypes.includes('day')) {
      values.push(day);
    }
    if (tabTypes.includes('month')) {
      values.push(month);
    }
    if (tabTypes.includes('week')) {
      values.push(week);
    }
    if (tabTypes.includes('year')) {
      values.push(year);
    }
    return values.join(' ');
  };
  var onParse = function onParse() {
    if (value) {
      try {
        var _value$split = value.split(' '),
          _value$split2 = _slicedToArray(_value$split, 7),
          secondVal = _value$split2[0],
          minuteValue = _value$split2[1],
          hourVal = _value$split2[2],
          dayVal = _value$split2[3],
          monthVal = _value$split2[4],
          weekVal = _value$split2[5],
          yearVal = _value$split2[6];
        secondVal = secondRegex.test(secondVal) ? secondVal : '*';
        minuteValue = minuteRegex.test(minuteValue) ? minuteValue : '*';
        hourVal = hourRegex.test(hourVal) ? hourVal : '*';
        dayVal = dayRegex.test(dayVal) ? dayVal : '*';
        monthVal = monthRegex.test(monthVal) ? monthVal : '*';
        weekVal = weekRegex.test(weekVal) ? weekVal : '?';
        weekVal = dayVal !== '?' ? '?' : weekVal;
        yearVal = yearRegex.test(yearVal) ? yearVal : '*';
        var tabTypes = tabs.map(function (tab) {
          return tab.type;
        });
        setSecond(tabTypes.includes('second') ? secondVal : undefined);
        setMinute(tabTypes.includes('minute') ? minuteValue : undefined);
        setHour(tabTypes.includes('hour') ? hourVal : undefined);
        setDay(tabTypes.includes('day') ? dayVal : undefined);
        setMonth(tabTypes.includes('month') ? monthVal : undefined);
        setWeek(tabTypes.includes('week') ? weekVal : undefined);
        setYear(tabTypes.includes('year') ? yearVal : undefined);
      } catch (error) {
        var _tabTypes = tabs.map(function (tab) {
          return tab.type;
        });
        setSecond(_tabTypes.includes('second') ? '*' : undefined);
        setMinute(_tabTypes.includes('minute') ? '*' : undefined);
        setHour(_tabTypes.includes('hour') ? '*' : undefined);
        setDay(_tabTypes.includes('day') ? '*' : undefined);
        setMonth(_tabTypes.includes('month') ? '*' : undefined);
        setWeek(_tabTypes.includes('week') ? '?' : undefined);
        setYear(_tabTypes.includes('year') ? '*' : undefined);
      }
    }
  };
  var onReset = function onReset() {
    var tabTypes = tabs.map(function (tab) {
      return tab.type;
    });
    setSecond(tabTypes.includes('second') ? '*' : undefined);
    setMinute(tabTypes.includes('minute') ? '*' : undefined);
    setHour(tabTypes.includes('hour') ? '*' : undefined);
    setDay(tabTypes.includes('day') ? '*' : undefined);
    setMonth(tabTypes.includes('month') ? '*' : undefined);
    setWeek(tabTypes.includes('week') ? '?' : undefined);
    setYear(tabTypes.includes('year') ? '*' : undefined);
    if (onOk) {
      onOk(getCronValue());
    }
  };
  var onGenerate = function onGenerate() {
    if (onOk) {
      onOk(getCronValue());
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
  useEffect(onParse, [value]);
  var tabItems = tabs.map(function (tab) {
    var commonProps = {
      key: tab.key,
      label: getTabTitle(tab.label),
      style: tabPaneStyle
    };
    switch (tab.type) {
      case 'second':
        return _objectSpread(_objectSpread({}, commonProps), {}, {
          children: /*#__PURE__*/React.createElement(SecondPane, {
            value: second,
            onChange: setSecond
          })
        });
      case 'minute':
        return _objectSpread(_objectSpread({}, commonProps), {}, {
          children: /*#__PURE__*/React.createElement(MinutePane, {
            value: minute,
            onChange: setMinute
          })
        });
      case 'hour':
        return _objectSpread(_objectSpread({}, commonProps), {}, {
          children: /*#__PURE__*/React.createElement(HourPane, {
            value: hour,
            onChange: setHour
          })
        });
      case 'day':
        return _objectSpread(_objectSpread({}, commonProps), {}, {
          children: /*#__PURE__*/React.createElement(DayPane, {
            value: day,
            onChange: onChangeDay
          })
        });
      case 'month':
        return _objectSpread(_objectSpread({}, commonProps), {}, {
          children: /*#__PURE__*/React.createElement(MonthPane, {
            value: month,
            onChange: setMonth
          })
        });
      case 'week':
        return _objectSpread(_objectSpread({}, commonProps), {}, {
          children: /*#__PURE__*/React.createElement(WeekPane, {
            value: week,
            onChange: onChangeWeek
          })
        });
      case 'year':
        return _objectSpread(_objectSpread({}, commonProps), {}, {
          children: /*#__PURE__*/React.createElement(YearPane, {
            value: year,
            onChange: setYear
          })
        });
      default:
        return null;
    }
  }).filter(Boolean);
  var footerRendererWrapper = useCallback(function () {
    if (footerRenderer && typeof footerRenderer === 'function') {
      return footerRenderer(onReset, onGenerate);
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      style: {
        marginRight: 10
      },
      onClick: onReset
    }, "\u91CD\u7F6E"), /*#__PURE__*/React.createElement(Button, {
      type: "primary",
      onClick: onGenerate
    }, "\u751F\u6210"));
  }, [footerRenderer, onReset, onGenerate]);
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({
      backgroundColor: '#fff',
      borderRadius: '2px',
      outline: 'none',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
      width: 600
    }, style)
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabBarGutter: 0,
    animated: true,
    destroyOnHidden: true,
    activeKey: currentTab,
    onChange: setCurrentTab,
    items: tabItems
  }), /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({
      borderTop: '1px solid #e8e8e8',
      padding: 10,
      textAlign: 'right'
    }, footerStyle)
  }, footerRendererWrapper()));
}
export default NebulaCron;