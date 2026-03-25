import React, { useMemo } from 'react';
import { Checkbox, Row, Col } from 'antd';
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
  var checkList = useMemo(function () {
    var checks = [];
    for (var i = 0; i < 24; i++) {
      checks.push(/*#__PURE__*/React.createElement(Col, {
        key: i,
        span: 4
      }, /*#__PURE__*/React.createElement(Checkbox, {
        disabled: disabled,
        value: i
      }, i)));
    }
    return checks;
  }, [disabled]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, "\u6307\u5B9A", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Checkbox.Group, {
    style: {
      width: '100%'
    },
    value: selected,
    onChange: onChangeSelected
  }, /*#__PURE__*/React.createElement(Row, null, checkList)));
}
export default InputSpecified;