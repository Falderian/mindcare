import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { AppBar, Toolbar, IconButton, Box, Paper } from '@mui/material';

type Props = {
  toggleThemeMode: () => void;
  themeMode: 'dark' | 'light';
};

export const AppToolbar = ({ toggleThemeMode, themeMode }: Props) => {
  return (
    <Paper elevation={3}>
      <Toolbar>
        <IconButton onClick={toggleThemeMode} color="inherit">
          {themeMode === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined />}
        </IconButton>
      </Toolbar>
    </Paper>
  );
};
