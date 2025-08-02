import React, { useState } from 'react';
import {
  LockOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone
} from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Card,
  Row,
  Col,
  Typography,
  Divider
} from 'antd';
import './Login.less';

const { Title, Text } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    setLoading(true);
    // 模拟登录请求
    setTimeout(() => {
      setLoading(false);
      window.location.hash = '#/';
    }, 1500);
  };

  return (
    <div className="login-container">
      <Row justify="center" align="middle" className="login-row">
        <Col xs={20} sm={16} md={12} lg={10} xl={8}>
          <Card className="login-card">
            <div className="login-header">
              <div className="logo">Odoo</div>
              <Title level={3} className="login-title">登录到您的账户</Title>
            </div>

            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入您的用户名!' }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="用户名"
                  size="large"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入您的密码!' }]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密码"
                  size="large"
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>记住我</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  忘记密码
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  size="large"
                  loading={loading}
                  block
                >
                  登录
                </Button>
              </Form.Item>
            </Form>

            <Divider>或</Divider>

            <div className="login-options">
              <Button block size="large" className="option-button">
                使用企业账户登录
              </Button>
              <Button block size="large" className="option-button">
                使用Google登录
              </Button>
            </div>

            <div className="login-footer">
              <Text type="secondary">© 2023 Odoo. 保留所有权利</Text>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
