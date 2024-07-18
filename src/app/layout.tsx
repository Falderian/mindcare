'use client';
import React, { useState } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Toaster } from 'react-hot-toast';
import { AppBar, Box, CssBaseline, Fab, IconButton, PaletteMode, Stack, Toolbar } from '@mui/material';
import { createMyTheme } from '../configs/theme';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { NavigationMenu } from '../components/navigation/NavigationMenu';
import { usePathname } from 'next/navigation';
import { AuthProvider } from '../contexts/AuthContext';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { AppToolbar } from '../components/AppToolbar';

const RootLayout = ({ children }: React.PropsWithChildren) => {
  const [mode, setMode] = useState<PaletteMode>('light');
  const pathname = usePathname();

  const toggleMode = () => {
    setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light') as PaletteMode);
  };
  const theme = createMyTheme(mode);
  const isLoginPage = pathname === '/login';
  const isRegisterPage = pathname === '/register';
  const showNavigationMenu = !isLoginPage && !isRegisterPage;

  return (
    <html lang="ru">
      <body style={{ margin: 0 }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <AuthProvider>
              <CssBaseline />
              <Stack direction="row">
                {showNavigationMenu && <NavigationMenu />}
                <AppToolbar toggleThemeMode={toggleMode} themeMode={mode} />
                <Box width="100%" padding={4} paddingTop={12}>
                  {children}
                  <ProgressBar height="4px" color="primary" options={{ showSpinner: false }} shallowRouting />
                </Box>
              </Stack>
            </AuthProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
