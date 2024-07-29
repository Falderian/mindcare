import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { Toolbar, IconButton, Box, Paper } from '@mui/material';
import { useBreakpoints } from '../hooks/useBreakpoints';
import { NavigationMenu } from './navigation/NavigationMenu';
import MenuIcon from '@mui/icons-material/Menu';

type Props = {
  toggleThemeMode: () => void;
  themeMode: 'dark' | 'light';
  toggleMenu: () => void;
};

export const AppToolbar = ({ toggleThemeMode, themeMode, toggleMenu }: Props) => {
  const { isTablet } = useBreakpoints();
  return (
    <Paper elevation={3}>
      <Toolbar>
        {isTablet && (
          <IconButton onClick={toggleMenu} color="inherit">
            <MenuIcon />
          </IconButton>
        )}
        <IconButton onClick={toggleThemeMode} color="inherit">
          {themeMode === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined />}
        </IconButton>
      </Toolbar>
    </Paper>
  );
};
