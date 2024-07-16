import { PaletteMode } from '@mui/material';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import { Sofia_Sans, Great_Vibes } from 'next/font/google';

// Загружаем шрифты
const sofiaSans = Sofia_Sans({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const greatVibes = Great_Vibes({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const createMyTheme = (mode: PaletteMode) => {
  const palette = {
    primary: {
      main: '#7367F0',
      light: '#8F85F3',
      dark: '#675DD8',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#808390',
      light: '#999CA6',
      dark: '#737682',
      contrastText: '#ffffff',
    },
    success: {
      main: '#28C76F',
      light: '#53D28C',
      dark: '#24B364',
      contrastText: '#ffffff',
    },
    error: {
      main: '#FF4C51',
      light: '#FF7074',
      dark: '#E64449',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#FF9F43',
      light: '#FFB269',
      dark: '#E68F3C',
      contrastText: '#ffffff',
    },
    info: {
      main: '#00BAD1',
      light: '#33C8DA',
      dark: '#00A7BC',
      contrastText: '#ffffff',
    },
    background: {
      default: mode === 'light' ? '#F8F7FA' : '#25293C',
      paper: mode === 'light' ? '#FFFFFF' : '#2F3349',
    },
    text: {
      primary: mode === 'light' ? '#1a1a1a' : '#ffffff',
    },
    action: {
      active: '#7367F0',
      hover: 'rgba(115, 103, 240, 0.08)',
      selected: 'rgba(115, 103, 240, 0.16)',
      disabled: 'rgba(115, 103, 240, 0.3)',
      disabledBackground: 'rgba(115, 103, 240, 0.1)',
      focus: 'rgba(115, 103, 240, 0.24)',
    },
    primaryOpacity: {
      lighter: 'rgba(115, 103, 240, 0.08)',
      light: 'rgba(115, 103, 240, 0.16)',
      main: 'rgba(115, 103, 240, 0.24)',
      dark: 'rgba(115, 103, 240, 0.32)',
      darker: 'rgba(115, 103, 240, 0.38)',
    },
    secondaryOpacity: {
      lighter: 'rgba(128, 131, 144, 0.08)',
      light: 'rgba(128, 131, 144, 0.16)',
      main: 'rgba(128, 131, 144, 0.24)',
      dark: 'rgba(128, 131, 144, 0.32)',
      darker: 'rgba(128, 131, 144, 0.38)',
    },
    errorOpacity: {
      lighter: 'rgba(255, 76, 81, 0.08)',
      light: 'rgba(255, 76, 81, 0.16)',
      main: 'rgba(255, 76, 81, 0.24)',
      dark: 'rgba(255, 76, 81, 0.32)',
      darker: 'rgba(255, 76, 81, 0.38)',
    },
    warningOpacity: {
      lighter: 'rgba(255, 159, 67, 0.08)',
      light: 'rgba(255, 159, 67, 0.16)',
      main: 'rgba(255, 159, 67, 0.24)',
      dark: 'rgba(255, 159, 67, 0.32)',
      darker: 'rgba(255, 159, 67, 0.38)',
    },
    infoOpacity: {
      lighter: 'rgba(0, 186, 209, 0.08)',
      light: 'rgba(0, 186, 209, 0.16)',
      main: 'rgba(0, 186, 209, 0.24)',
      dark: 'rgba(0, 186, 209, 0.32)',
      darker: 'rgba(0, 186, 209, 0.38)',
    },
    successOpacity: {
      lighter: 'rgba(40, 199, 111, 0.08)',
      light: 'rgba(40, 199, 111, 0.16)',
      main: 'rgba(40, 199, 111, 0.24)',
      dark: 'rgba(40, 199, 111, 0.32)',
      darker: 'rgba(40, 199, 111, 0.38)',
    },
  };

  return createTheme({
    palette: {
      mode,
      primary: palette.primary,
      secondary: palette.secondary,
      success: palette.success,
      error: palette.error,
      warning: palette.warning,
      info: palette.info,
      background: palette.background,
      text: palette.text,
    },
    typography: {
      fontFamily: sofiaSans.style.fontFamily,
      h1: {
        fontFamily: sofiaSans.style.fontFamily,
        fontWeight: 700,
        fontSize: '3rem',
      },
      h2: {
        fontFamily: sofiaSans.style.fontFamily,
        fontWeight: 700,
        fontSize: '2.5rem',
      },
      h3: {
        fontFamily: sofiaSans.style.fontFamily,
        fontWeight: 700,
        fontSize: '2rem',
      },
      h4: {
        fontFamily: greatVibes.style.fontFamily,
        fontWeight: 400,
        fontSize: '1.75rem',
      },
      h5: {
        fontFamily: sofiaSans.style.fontFamily,
        fontWeight: 700,
        fontSize: '1.5rem',
      },
      h6: {
        fontFamily: sofiaSans.style.fontFamily,
        fontWeight: 700,
        fontSize: '1.25rem',
      },
      subtitle1: {
        fontFamily: sofiaSans.style.fontFamily,
        fontWeight: 400,
        fontSize: '1rem',
      },
      subtitle2: {
        fontFamily: sofiaSans.style.fontFamily,
        fontWeight: 400,
        fontSize: '0.875rem',
      },
      body1: {
        fontFamily: sofiaSans.style.fontFamily,
        fontWeight: 400,
        fontSize: '1rem',
      },
      body2: {
        fontFamily: sofiaSans.style.fontFamily,
        fontWeight: 400,
        fontSize: '0.875rem',
      },
      button: {
        fontFamily: sofiaSans.style.fontFamily,
        fontWeight: 700,
        fontSize: '1rem',
        textTransform: 'uppercase',
      },
      caption: {
        fontFamily: sofiaSans.style.fontFamily,
        fontWeight: 400,
        fontSize: '0.75rem',
      },
      overline: {
        fontFamily: sofiaSans.style.fontFamily,
        fontWeight: 700,
        fontSize: '0.75rem',
        textTransform: 'uppercase',
      },
      logo: {
        fontFamily: greatVibes.style.fontFamily,
        fontWeight: 400,
        fontSize: '2.5rem',
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '16px',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
          },
        },
      },
    },
  } as ThemeOptions);
};

export { createMyTheme };
