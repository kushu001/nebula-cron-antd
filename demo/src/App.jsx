import React, { useState } from 'react';
import { Layout, Typography, Card, Alert } from 'antd';
import Cron from '@cron-es';

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

function App() {
  const [cronValue, setCronValue] = useState('* * * * * ? *');

  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <Header style={{ background: '#001529', padding: '0 50px', display: 'flex', alignItems: 'center' }}>
        <Title level={3} style={{ color: '#fff', margin: 0 }}>
          React Cron Antd Demo
        </Title>
      </Header>
      <Content style={{ padding: '50px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <Card>
            <Title level={2}>Cron 表达式生成器</Title>
            <Paragraph>
              这是一个基于 React 和 Ant Design 的 cron 时间表达式生成器组件的演示。
            </Paragraph>
            
            <Alert
              message="当前 Cron 表达式"
              description={cronValue}
              type="info"
              style={{ marginBottom: 24 }}
            />
            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Cron 
                value={cronValue} 
                onOk={(value) => setCronValue(value)} 
              />
            </div>
          </Card>
        </div>
      </Content>
    </Layout>
  );
}

export default App;