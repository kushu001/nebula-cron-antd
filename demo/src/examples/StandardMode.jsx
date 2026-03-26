import React, { useState } from 'react';
import { Typography, Alert } from 'antd';
import NebulaCron from '@cron-es';
import CodeDisplay from './CodeDisplay';

const { Title, Paragraph } = Typography;

const standardTabItems = [
  { key: '2', label: '分', type: 'minute' },
  { key: '3', label: '时', type: 'hour' },
  { key: '4', label: '日', type: 'day' },
  { key: '5', label: '月', type: 'month' },
  { key: '6', label: '周', type: 'week' }
];

function StandardMode() {
  const [cronValue, setCronValue] = useState('* * * * ?');

  return (
    <div>
      <Title level={3}>标准模式（不包含秒和年）</Title>
      <Paragraph>
        显示分、时、日、月、周标签页，适用于常见的定时任务场景。
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
          tabs={standardTabItems}
        />
      </div>
      
      <CodeDisplay 
        code={`const standardTabItems = [
  { key: '2', label: '分', type: 'minute' },
  { key: '3', label: '时', type: 'hour' },
  { key: '4', label: '日', type: 'day' },
  { key: '5', label: '月', type: 'month' },
  { key: '6', label: '周', type: 'week' }
];

<NebulaCron 
  value={cronValue} 
  onOk={(value) => setCronValue(value)} 
  tabs={standardTabItems}
/>`}
      />
    </div>
  );
}

export default StandardMode;
