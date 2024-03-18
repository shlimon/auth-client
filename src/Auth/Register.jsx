import React from "react";
import { Card, Flex, Form, Typography, Input, Button, Alert, Spin } from "antd";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";

const Register = () => {
  const { loading, error, registerUser } = useSignup();

  const handleRegister = (values) => {
    registerUser(values);
  };

  return (
    <Card className="form-container">
      <Flex>
        {/* Form */}
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className="title">
            Create an account
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan">
            Join for exclusive access
          </Typography.Text>
          <Form
            layout="vertical"
            onFinish={handleRegister}
            autoComplete="off"
            autoSave="off"
          >
            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true, message: "Please input full Name" }]}
            >
              <Input placeholder="Full Name" size="large" />
            </Form.Item>
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
            <Form.Item
              label="Password"
              name="passwordConfirm"
              rules={[{ required: true, message: "Please confirm password" }]}
            >
              <Input.Password
                placeholder="Please Re-Enter password"
                size="large"
              />
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
                {loading ? <Spin /> : "Create Account"}
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/login">
                <Button className="btn" size="large">
                  Sign In
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Register;
