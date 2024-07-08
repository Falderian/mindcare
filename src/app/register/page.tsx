"use client";
import React, { useState } from "react";
import { Form, Input, Button, Typography, Divider, message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "./register.module.scss";

const { Title, Text } = Typography;

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/users/register", values);
      message.success("Регистрация выполнена успешно!");
      router.push("/login");
    } catch (error) {
      console.log(error);
      message.error("Ошибка регистрации. Пожалуйста, попробуйте снова.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Form
        name="register"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{ width: "30%" }}
      >
        <Title level={2} style={{ textAlign: "center" }}>
          Регистрация
        </Title>
        <Text
          type="secondary"
          style={{
            display: "block",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          Создайте новую учетную запись
        </Text>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите ваше имя пользователя.",
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Имя пользователя" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Пожалуйста, введите ваш Email.",
            },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Пожалуйста, введите ваш пароль." },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Пароль"
          />
        </Form.Item>
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Пожалуйста, подтвердите ваш пароль.",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Пароли не совпадают!"));
              },
            }),
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Подтвердите пароль"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Зарегистрироваться
          </Button>
        </Form.Item>
        <Divider>или</Divider>
        <Button
          block
          style={{ marginBottom: "8px" }}
          onClick={() => router.push("/login")}
        >
          Войти
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
