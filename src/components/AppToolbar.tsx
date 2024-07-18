import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { AppBar, Toolbar, IconButton, Box, Paper } from '@mui/material';

type Props = {
  toggleThemeMode: () => void;
  themeMode: 'dark' | 'light';
};

export const AppToolbar = ({ toggleThemeMode, themeMode }: Props) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Paper elevation={3}>
          <IconButton onClick={toggleThemeMode} color="inherit">
            {themeMode === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined />}
          </IconButton>
        </Paper>
      </Toolbar>
    </AppBar>
  );
};
