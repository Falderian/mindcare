"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Box } from "@mui/material";

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

  return <Box>Login</Box>;
};

export default LoginPage;
