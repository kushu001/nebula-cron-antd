import React from 'react';
import { Layout, Typography, Card, Tabs } from 'antd';
import FullMode from './examples/FullMode';
import StandardMode from './examples/StandardMode';
import SimpleMode from './examples/SimpleMode';
import CustomOrderMode from './examples/CustomOrderMode';

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

function App() {
  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <Header style={{ background: '#001529', padding: '0 50px', display: 'flex', alignItems: 'center' }}>
        <Title level={3} style={{ color: '#fff', margin: 0 }}>
          @nebula/antd-cron Demo
        </Title>
      </Header>
      <Content style={{ padding: '50px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Card>
            <Title level={2}>Cron 表达式生成器</Title>
            <Paragraph>
              这是一个基于 React 和 Ant Design 的 cron 时间表达式生成器组件的演示。
              支持通过 <code>tabs</code> 属性自定义显示的标签页。
            </Paragraph>
            
            <Tabs
              defaultActiveKey="1"
              items={[
                {
                  key: '1',
                  label: '完整模式',
                  children: <FullMode />
                },
                {
                  key: '2',
                  label: '标准模式',
                  children: <StandardMode />
                },
                {
                  key: '3',
                  label: '简单模式',
                  children: <SimpleMode />
                },
                {
                  key: '4',
                  label: '自定义顺序',
                  children: <CustomOrderMode />
                }
              ]}
            />
          </Card>
        </div>
      </Content>
    </Layout>
  );
}

export default App;