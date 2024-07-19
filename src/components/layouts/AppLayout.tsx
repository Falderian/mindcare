import { usePathname } from 'next/navigation';
import { AppToolbar } from '../AppToolbar';
import { NavigationMenu } from '../navigation/NavigationMenu';
import { ThemeProvider, Grid, CssBaseline, GlobalStyles, Box, Stack, Paper } from '@mui/material';
import { PaletteMode } from '@mui/material';
import { ReactNode, useState } from 'react';
import { createMyTheme } from '../../configs/theme';

type Props = {
  children: ReactNode;
};

export const AppLayout = ({ children }: Props) => {
  const [mode, setMode] = useState<PaletteMode>('light');
  const pathname = usePathname();

  const toggleMode = () => {
    setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = createMyTheme(mode);
  const isLoginPage = pathname === '/login';
  const isRegisterPage = pathname === '/register';
  const showNavigationMenu = !isLoginPage && !isRegisterPage;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
          },
          a: {
            color: theme.palette.primary.main,
          },
        }}
      />
      <Stack flexDirection="row">
        {showNavigationMenu && <NavigationMenu />}
        <Stack width="100%" paddingX={showNavigationMenu ? 8 : 0} paddingTop={showNavigationMenu ? 2 : 0} gap={4}>
          {showNavigationMenu && <AppToolbar toggleThemeMode={toggleMode} themeMode={mode} />}
          <Paper elevation={3}>{children}</Paper>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};
