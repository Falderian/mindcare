import { useMediaQuery, useTheme } from '@mui/material';

export const useBreakpoints = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.down('lg'));
  return { isMobile, isTablet, isDesktop };
};
