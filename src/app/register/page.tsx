'use client';
import { Box, Button, Divider, Fade, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import AuthIllustrationV1Wrapper from '../../components/layouts/AuthIllustrationV1Wrapper';
import { AppLogo } from '../../components/AppLogo';
import axios from 'axios';
import { useNotify } from '../../hooks/useNotify';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Google } from '@mui/icons-material';

type TForm = {
  login: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const RegisterPage = () => {
  const { notifyPromise } = useNotify();
  const router = useRouter();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TForm>();

  const submit = (data: TForm) => {
    const promise = axios.post('/api/users/register', data).then(() => router.push('/login'));
    notifyPromise({ promise });
  };

  const password = watch('password');

  return (
    <Fade in={true}>
      <Stack height="100vh" width="100vw" display="flex" justifyContent="center" alignItems="center">
        <AuthIllustrationV1Wrapper zIndex={2}>
          <Paper
            sx={{
              paddingY: 2,
              padding: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            elevation={3}
          >
            <AppLogo />
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
                rules={{ required: 'Логин обязателен для заполнения' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={field.value}
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
                  required: 'Почтовый ящик обязателен для заполнения',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Некорректный формат почтового ящика',
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={field.value}
                    variant="standard"
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
                rules={{ required: 'Пароль обязателен для заполнения' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={field.value}
                    variant="standard"
                    type="password"
                    label="Пароль"
                    fullWidth
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : null}
                  />
                )}
              />
              <Controller
                name="passwordConfirm"
                control={control}
                rules={{
                  required: 'Подтверждение пароля обязательно для заполнения',
                  validate: (value) => value === password || 'Пароли должны совпадать',
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={field.value}
                    variant="standard"
                    type="password"
                    label="Повторите пароль"
                    fullWidth
                    error={!!errors.passwordConfirm}
                    helperText={errors.passwordConfirm ? errors.passwordConfirm.message : null}
                  />
                )}
              />
              <Button type="submit" variant="contained" sx={{ fontWeight: 700 }}>
                Зарегистрироваться
              </Button>
              <Typography>
                У вас уже есть аккаунт? <Link href="login">Войти</Link>
              </Typography>
              <Divider
                sx={{
                  '&::before, &::after': {
                    borderColor: 'primary.light',
                  },
                }}
              >
                или
              </Divider>
              <Box display="flex" justifyContent="center">
                <IconButton color="error" size="small">
                  <Google />
                </IconButton>
              </Box>
            </Box>
          </Paper>
        </AuthIllustrationV1Wrapper>
      </Stack>
    </Fade>
  );
};

export default RegisterPage;
