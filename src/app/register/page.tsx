"use client";
import { Fade, Paper, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import AuthIllustrationV1Wrapper from "../../components/layouts/AuthIllustrationV1Wrapper";

type TForm = {
  login: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const RegisterPage = () => {
  const { control } = useForm<TForm>();
  return (
    <Fade in={true}>
      <Stack
        height="100vh"
        width="100vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="#F8F7FA"
      >
        <AuthIllustrationV1Wrapper zIndex={2}>
          <Paper
            sx={{
              paddingY: 2,
              padding: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                stroke="#3B82F6"
                stroke-width="2"
                fill="#34D399"
              />
              <path
                d="M50 25C61.0457 25 70 33.9543 70 45C70 56.0457 61.0457 65 50 65C38.9543 65 30 56.0457 30 45C30 33.9543 38.9543 25 50 25ZM50 45L45 50L50 55L55 50L50 45Z"
                fill="white"
              />
              <path
                d="M55 38C56.6569 38 58 36.6569 58 35C58 33.3431 56.6569 32 55 32C53.3431 32 52 33.3431 52 35C52 36.6569 53.3431 38 55 38Z"
                fill="#10B981"
              />
              <path
                d="M45 38C46.6569 38 48 36.6569 48 35C48 33.3431 46.6569 32 45 32C43.3431 32 42 33.3431 42 35C42 36.6569 43.3431 38 45 38Z"
                fill="#10B981"
              />
            </svg>

            <Typography variant="h6">MindCare</Typography>
            <Typography variant="h6">Регистрация</Typography>
            <Controller
              name="login"
              control={control}
              render={({ field, fieldState, formState }) => <TextField />}
            />
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState, formState }) => (
                <TextField type="email" />
              )}
            />
            <Controller
              name="login"
              control={control}
              render={({ field, fieldState, formState }) => (
                <TextField type="password" />
              )}
            />
            <Controller
              name="login"
              control={control}
              render={({ field, fieldState, formState }) => (
                <TextField type="password" />
              )}
            />
          </Paper>
        </AuthIllustrationV1Wrapper>
      </Stack>
    </Fade>
  );
};

export default RegisterPage;
