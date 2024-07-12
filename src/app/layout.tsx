'use client';
import React, { useState } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Toaster } from 'react-hot-toast';
import { Box, CssBaseline, Fab, IconButton, PaletteMode } from '@mui/material';
import { createMyTheme } from '../configs/theme';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';

const RootLayout = ({ children }: React.PropsWithChildren) => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const toggleMode = () => {
    setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light') as PaletteMode);
  };
  const theme = createMyTheme(mode);

  return (
    <html lang="ru">
      <body style={{ margin: 0 }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Fab sx={{ position: 'absolute' }} onClick={toggleMode} size="small">
              {mode === 'dark' ? <DarkModeOutlined /> : <LightModeOutlined />}
            </Fab>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
