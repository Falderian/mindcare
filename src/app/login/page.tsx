"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "./login.module.scss";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/users/login", values);
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  };

  return <div className={styles.container}>login</div>;
};

export default LoginPage;
