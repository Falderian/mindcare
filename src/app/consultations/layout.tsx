'use client';
import { Consultation } from '@prisma/client';
import axios from 'axios';
import { useState, useEffect, ReactNode } from 'react';
import { Loader } from '../../components/Loader';
import { useAuth } from '../../hooks/useAuth';
import { useNotify } from '../../hooks/useNotify';

type Props = {
  children: ReactNode;
};

const ConsultationsLayout = ({ children }: Props) => {
  const { user } = useAuth();
  const { notifyFetch } = useNotify();
  const [consulations, setConsultations] = useState<Consultation[] | null>([]);

  useEffect(() => {
    if (user?.id && !!consulations) {
      console.log('REQUEST', user.id);
      const promise = axios.get('/api/consultations/' + user?.id).then(({ data }) => setConsultations(data));
      notifyFetch(promise);
    }
  }, []);

  return <Loader loaded={consulations}>{children}</Loader>;
};

export default ConsultationsLayout;
