import { Button, ConfigProvider, Space } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#00b96b',
        borderRadius: 2,

        // Alias Token
        colorBgContainer: '#f6ffed',
      },
    }}
  >
    <Space>
      <Button type="primary" className=' animate-none p-4 font-bold bg-blue-400'>Primary</Button>
      <Button>Default</Button>
      <button className='bg-slate-100 px-1 py-1 rounded-sm text-black font-small ' >Custome Button</button>
    </Space>
  </ConfigProvider>
);

export default App;