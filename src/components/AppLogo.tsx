import { Box, Typography } from '@mui/material';
import { Logo } from './Logo';

export const AppLogo = () => {
  return (
    <Box display="flex" alignItems="center" gap={1} color={'secondary.disabled'}>
      <Logo />
      <Typography variant={'logo' as 'body1'} fontWeight={700} marginTop={1}>
        MindCare
      </Typography>
    </Box>
  );
};
