"use client";
import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  Divider,
  message,
} from "antd";
import {
  UserOutlined,
  LockOutlined,
  GoogleOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "./login.module.scss";
import Image from "next/image";

const { Title, Text } = Typography;

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/login", values);
      message.success("Вход выполнен успешно!");
      router.push("/dashboard");
    } catch (error) {
      message.error(
        "Ошибка входа. Проверьте свои учетные данные и попробуйте снова."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{ width: "30%" }}
      >
        <Title level={2} style={{ textAlign: "center" }}>
          ВХОД
        </Title>
        <Text
          type="secondary"
          style={{
            display: "block",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          Войдите в свою учетную запись
        </Text>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите ваше имя пользователя!",
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Имя пользователя" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Пожалуйста, введите ваш пароль!" },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Пароль"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Запомнить меня</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Войти
          </Button>
        </Form.Item>
        <Divider>Войти с помощью</Divider>
        <Button icon={<GoogleOutlined />} block style={{ marginBottom: "8px" }}>
          Войти с Google
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
