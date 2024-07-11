"use client";
import {
  Box,
  Button,
  Fade,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import AuthIllustrationV1Wrapper from "../../components/layouts/AuthIllustrationV1Wrapper";

type TForm = {
  login: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const RegisterPage = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TForm>();

  const submit = (data: TForm) => {
    console.log(data);
  };

  const password = watch("password");

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
            elevation={3}
          >
            <Typography variant="h6">MindCare</Typography>
            <Typography variant="h5">Регистрация</Typography>
            <Box
              component="form"
              display="flex"
              gap={2}
              flexDirection="column"
              width="100%"
              onSubmit={handleSubmit(submit)}
            >
              <Controller
                name="login"
                control={control}
                rules={{ required: "Логин обязателен для заполнения" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant="standard"
                    label="Логин"
                    fullWidth
                    error={!!errors.login}
                    helperText={errors.login ? errors.login.message : null}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Почтовый ящик обязателен для заполнения",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Некорректный формат почтового ящика",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant="standard"
                    type="email"
                    label="Почтовый ящик"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : null}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                rules={{ required: "Пароль обязателен для заполнения" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant="standard"
                    type="password"
                    label="Пароль"
                    fullWidth
                    error={!!errors.password}
                    helperText={
                      errors.password ? errors.password.message : null
                    }
                  />
                )}
              />
              <Controller
                name="passwordConfirm"
                control={control}
                rules={{
                  required: "Подтверждение пароля обязательно для заполнения",
                  validate: (value) =>
                    value === password || "Пароли должны совпадать",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant="standard"
                    type="password"
                    label="Повторите пароль"
                    fullWidth
                    error={!!errors.passwordConfirm}
                    helperText={
                      errors.passwordConfirm
                        ? errors.passwordConfirm.message
                        : null
                    }
                  />
                )}
              />
              <Button type="submit" variant="contained">
                Зарегистрироваться
              </Button>
            </Box>
          </Paper>
        </AuthIllustrationV1Wrapper>
      </Stack>
    </Fade>
  );
};

export default RegisterPage;
