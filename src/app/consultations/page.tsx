'use client';
import { Box } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';
import { useNotify } from '../../hooks/useNotify';
import axios from 'axios';

const ConsulationsPage = () => {
  const { user } = useAuth();
  const { notifyFetch } = useNotify();

  useEffect(() => {
    if (user) {
      const promise = axios.get('/api/consultations/' + user?.id).then((res) => console.log(res));
      notifyFetch(promise);
    }
  }, []);

  return <Box>Consultations</Box>;
};

export default ConsulationsPage;
