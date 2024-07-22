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
import { setCookie } from 'cookies-next';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

type TForm = {
  login: string;
  password: string;
};

const LoginPage = () => {
  const { notifyPromise } = useNotify();
  const { setUser } = useContext(AuthContext);
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TForm>({ defaultValues: { login: 'test@test.com', password: 'test@test.com' } });
  const submit = (data: TForm) => {
    const promise = axios.post('/api/users/login', data).then(({ data }) => {
      const { user, session } = data;
      setCookie('sessionId', session.id, { expires: new Date(session.expires_at) });
      setUser!(user);
      router.push('calendar');
    });
    notifyPromise({ promise });
  };

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
            <Typography variant="h5" sx={{ mt: 2, mb: 1, fontWeight: 'bold', textAlign: 'center' }}>
              Добро пожаловать! 👋🏻
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, textAlign: 'center', color: 'text.secondary' }}>
              Пожалуйста, войдите в свою учетную запись
            </Typography>
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
              <Button type="submit" variant="contained" sx={{ fontWeight: 700 }}>
                Войти
              </Button>
              <Typography color="secondary">
                У вас нет аккаунта? <Link href="register">Зарегистрироваться</Link>
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

export default LoginPage;
