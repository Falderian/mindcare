'use client';
import React, { useState } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Toaster } from 'react-hot-toast';
import { Box, CssBaseline, Fab, PaletteMode, Stack } from '@mui/material';
import { createMyTheme } from '../configs/theme';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { NavigationMenu } from '../components/navigation/NavigationMenu';
import { usePathname } from 'next/navigation';

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
            <CssBaseline />
            <Stack direction="row">
              {showNavigationMenu && <NavigationMenu />}
              <Box width="70%">
                <Fab sx={{ position: 'absolute', right: 0 }} onClick={toggleMode} size="small">
                  {mode === 'dark' ? <DarkModeOutlined /> : <LightModeOutlined />}
                </Fab>
                {children}
              </Box>
            </Stack>
          </ThemeProvider>
        </AppRouterCacheProvider>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
