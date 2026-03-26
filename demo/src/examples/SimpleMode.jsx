import React, { useState } from 'react';
import { Typography, Alert } from 'antd';
import NebulaCron from '@cron-es';
import CodeDisplay from './CodeDisplay';

const { Title, Paragraph } = Typography;

const simpleTabItems = [
  { key: '2', label: '分', type: 'minute' },
  { key: '3', label: '时', type: 'hour' },
  { key: '4', label: '日', type: 'day' },
  { key: '5', label: '月', type: 'month' }
];

function SimpleMode() {
  const [cronValue, setCronValue] = useState('0 * * *');

  return (
    <div>
      <Title level={3}>简单模式（不包含周）</Title>
      <Paragraph>
        只显示分、时、日、月标签页，适用于按日期执行的定时任务。
      </Paragraph>
      
      <Alert
        message="当前 Cron 表达式"
        description={cronValue}
        type="info"
        style={{ marginBottom: 16 }}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <NebulaCron 
          value={cronValue} 
          onOk={(value) => setCronValue(value)} 
          tabs={simpleTabItems}
        />
      </div>
      
      <CodeDisplay 
        code={`const simpleTabItems = [
  { key: '2', label: '分', type: 'minute' },
  { key: '3', label: '时', type: 'hour' },
  { key: '4', label: '日', type: 'day' },
  { key: '5', label: '月', type: 'month' }
];

<NebulaCron 
  value={cronValue} 
  onOk={(value) => setCronValue(value)} 
  tabs={simpleTabItems}
/>`}
      />
    </div>
  );
}

export default SimpleMode;
