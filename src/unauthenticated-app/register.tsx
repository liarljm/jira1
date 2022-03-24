import React, { FormEvent } from "react";
import * as qs from "qs";
import { Form, Button, Input } from "antd";
import { useAuth } from "context/auth_context";
import { LongButton } from "unauthenticated-app";
const apiUrl = process.env.REACT_APP_API_URL;
export const RegisterScreen = () => {
  const { register, user } = useAuth();
  const handleSubmit = (values: { username: string; password: string }) => {
    register(values);
  };
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name="username">
        <label htmlFor="username">用户名</label>
        <Input type="text" id="username" />
      </Form.Item>

      <Form.Item name="password">
        <label htmlFor="password">密码</label>
        <Input type="password" id="password" />
      </Form.Item>
      <Form.Item>
        <LongButton type="primary">注册</LongButton>
      </Form.Item>
    </Form>
  );
};
