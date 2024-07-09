"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "./register.module.scss";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/users/register", values);
      router.push("/login");
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  };

  return <div className={styles.container}>register</div>;
};

export default RegisterPage;
