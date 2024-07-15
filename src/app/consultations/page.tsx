'use client';
import { Box } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';

const ConsulationsPage = () => {
  const { user } = useAuth();
  return <Box>Consultations</Box>;
};

export default ConsulationsPage;
