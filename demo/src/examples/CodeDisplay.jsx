import React from 'react';
import { Typography } from 'antd';

const { Paragraph, Text } = Typography;

const codeStyle = {
  backgroundColor: '#282c34',
  color: '#abb2bf',
  padding: '16px',
  borderRadius: '8px',
  fontFamily: 'Consolas, Monaco, "Courier New", monospace',
  fontSize: '14px',
  lineHeight: '1.6',
  overflowX: 'auto',
  marginBottom: '16px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
};

function CodeDisplay({ code, title = '配置代码' }) {
  return (
    <>
      <Paragraph>
        <Text strong>{title}：</Text>
      </Paragraph>
      <pre style={codeStyle}>
        <code>{code}</code>
      </pre>
    </>
  );
}

export default CodeDisplay;
