import { usePathname } from 'next/navigation';
import { AppToolbar } from '../AppToolbar';
import { NavigationMenu } from '../navigation/NavigationMenu';
import { ThemeProvider, Grid } from '@mui/material';
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
    setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light') as PaletteMode);
  };

  const theme = createMyTheme(mode);
  const isLoginPage = pathname === '/login';
  const isRegisterPage = pathname === '/register';
  const showNavigationMenu = !isLoginPage && !isRegisterPage;

  return (
    <ThemeProvider theme={theme}>
      <Grid container style={{ height: '100vh' }}>
        {showNavigationMenu && (
          <Grid item xs={1.5}>
            <NavigationMenu />
          </Grid>
        )}
        <Grid item xs={showNavigationMenu ? 10.5 : 12} padding={2} paddingRight={6}>
          <Grid item xs={12} style={{ display: showNavigationMenu ? 'block' : 'none' }}>
            <AppToolbar toggleThemeMode={toggleMode} themeMode={mode} />
          </Grid>
          <Grid item xs={12} height={'80%'} mt={4}>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
