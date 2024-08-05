import { Box, Typography } from '@mui/material';
import { Logo } from './Logo';

export const AppLogo = ({ size = '' }) => {
  const dimension = size === 'small' ? 40 : 60;
  return (
    <Box display="flex" alignItems="center" gap={1} color={'secondary.disabled'}>
      <Logo size={dimension} />
      <Typography variant={'logo' as 'body1'} marginTop={1} fontSize={25} fontWeight={700}>
        MindCare
      </Typography>
    </Box>
  );
};
