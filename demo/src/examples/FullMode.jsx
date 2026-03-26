import React, { useState } from 'react';
import { Typography, Alert } from 'antd';
import NebulaCron from '@cron-es';
import CodeDisplay from './CodeDisplay';

const { Title, Paragraph } = Typography;

const allTabItems = [
  { key: '1', label: '秒', type: 'second' },
  { key: '2', label: '分', type: 'minute' },
  { key: '3', label: '时', type: 'hour' },
  { key: '4', label: '日', type: 'day' },
  { key: '5', label: '月', type: 'month' },
  { key: '6', label: '周', type: 'week' },
  { key: '7', label: '年', type: 'year' }
];

function FullMode() {
  const [cronValue, setCronValue] = useState('* * * * * ? *');

  return (
    <div>
      <Title level={3}>完整模式（包含秒和年）</Title>
      <Paragraph>
        显示所有标签页，适用于需要精确到秒和年份的定时任务。
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
          tabs={allTabItems}
        />
      </div>
      
      <CodeDisplay 
        code={`const allTabItems = [
  { key: '1', label: '秒', type: 'second' },
  { key: '2', label: '分', type: 'minute' },
  { key: '3', label: '时', type: 'hour' },
  { key: '4', label: '日', type: 'day' },
  { key: '5', label: '月', type: 'month' },
  { key: '6', label: '周', type: 'week' },
  { key: '7', label: '年', type: 'year' }
];

<NebulaCron 
  value={cronValue} 
  onOk={(value) => setCronValue(value)} 
  tabs={allTabItems}
/>`}
      />
    </div>
  );
}

export default FullMode;
