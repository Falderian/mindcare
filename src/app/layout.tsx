'use client';
import React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Toaster } from 'react-hot-toast';
import { Box, CssBaseline, Stack } from '@mui/material';
import { AuthProvider } from '../contexts/AuthContext';
import { AppLayout } from '../components/layouts/AppLayout';

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="ru">
      <body style={{ margin: 0 }}>
        <AppRouterCacheProvider>
          <AuthProvider>
            <CssBaseline />
            <AppLayout>{children}</AppLayout>
          </AuthProvider>
        </AppRouterCacheProvider>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
