import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ManufacturingOrder from './modules/mrp/pages/ManufacturingOrder';
import Login from './modules/auth/pages/Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider theme={{ token: { colorPrimary: '#1890ff' } }}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ManufacturingOrder />} />
        </Routes>
      </Router>
    </ConfigProvider>
  </React.StrictMode>
);
