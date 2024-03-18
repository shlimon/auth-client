import React from "react";
import { Card, Flex, Form, Typography, Input, Button, Alert, Spin } from "antd";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const { error, loading, loginUser } = useLogin();

  const handleLogin = async (value) => {
    await loginUser(value);
  };

  return (
    <Card className="form-container">
      <Flex>
        {/* Form */}
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className="title">
            Sign In
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan">
            Unlock your world
          </Typography.Text>
          <Form
            layout="vertical"
            onFinish={handleLogin}
            autoComplete="off"
            autoSave="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please provide email" },
                { type: "email", message: "It is not a Valid email" },
              ]}
            >
              <Input placeholder="Enter your email" size="large" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please  password" }]}
            >
              <Input.Password placeholder="Enter your password" size="large" />
            </Form.Item>
            {error && (
              <Alert
                description={error}
                type="error"
                showIcon
                closable
                className="alert"
              />
            )}
            <Form.Item>
              <Button
                type={`${loading ? "" : "primary"}`}
                htmlType="submit"
                size="large"
                className="btn"
              >
                {loading ? <Spin /> : "Sign In"}
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/">
                <Button size="large" className="btn">
                  Create Account
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Login;
