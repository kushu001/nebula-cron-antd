import React, { useState } from 'react';
import { Typography, Alert } from 'antd';
import NebulaCron from '@cron-es';
import CodeDisplay from './CodeDisplay';

const { Title, Paragraph } = Typography;

const customOrderTabItems = [
  { key: '5', label: '月', type: 'month' },
  { key: '4', label: '日', type: 'day' },
  { key: '3', label: '时', type: 'hour' },
  { key: '2', label: '分', type: 'minute' },
  { key: '1', label: '秒', type: 'second' },
  { key: '7', label: '年', type: 'year' }
];

function CustomOrderMode() {
  const [cronValue, setCronValue] = useState('0 0 * * * *');

  return (
    <div>
      <Title level={3}>自定义标签顺序</Title>
      <Paragraph>
        自定义标签页的显示顺序，将常用的标签页放在前面。
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
          tabs={customOrderTabItems}
        />
      </div>
      
      <CodeDisplay 
        code={`const customOrderTabItems = [
  { key: '5', label: '月', type: 'month' },
  { key: '4', label: '日', type: 'day' },
  { key: '3', label: '时', type: 'hour' },
  { key: '2', label: '分', type: 'minute' },
  { key: '1', label: '秒', type: 'second' },
  { key: '7', label: '年', type: 'year' }
];

<NebulaCron 
  value={cronValue} 
  onOk={(value) => setCronValue(value)} 
  tabs={customOrderTabItems}
/>`}
      />
    </div>
  );
}

export default CustomOrderMode;
