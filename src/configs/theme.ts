import { PaletteMode } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Neucha, Great_Vibes } from 'next/font/google';

const neucha = Neucha({
  weight: ['400'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

const greatVibes = Great_Vibes({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const createMyTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      background: {
        default: mode === 'light' ? '#F8F7FA' : '#121212',
      },
      text: {
        primary: mode === 'light' ? '#1a1a1a' : '#ffffff',
      },
    },
    typography: {
      fontFamily: neucha.style.fontFamily,
      fontSize: 16,
      h4: {
        fontFamily: greatVibes.style.fontFamily,
      },
    },
  });

export { createMyTheme };
