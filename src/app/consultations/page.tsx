'use client';
import { Consultation } from '@prisma/client';
import axios from 'axios';
import { useState, useEffect, ReactNode, useMemo } from 'react';
import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables';
import { datatableOptions } from '../../utils/utils';
import { useAuth } from '../../hooks/useAuth';
import { useNotify } from '../../hooks/useNotify';
import { Loader } from '../../components/Loader';

const Page: React.FC = () => {
  const { user } = useAuth();
  const { notifyFetch } = useNotify();
  const [consultations, setConsultations] = useState<Consultation[] | null>(null);

  useEffect(() => {
    if (user?.id) {
      console.log('REQUEST', user.id);
      const promise = axios.get('/api/consultations/' + user.id).then(({ data }) => setConsultations(data));
      notifyFetch(promise);
    }
  }, [user?.id]);

  const options = useMemo(() => datatableOptions(), []);
  const consultationColumns: MUIDataTableColumn[] = useMemo(
    () => [
      {
        name: 'id',
        label: 'ID',
        options: {
          filter: false,
          sort: true,
        },
      },
      {
        name: 'type',
        label: 'Тип',
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: 'completed',
        label: 'Завершено',
        options: {
          filter: true,
          sort: true,
          customBodyRender: (value: boolean) => (value ? 'Да' : 'Нет'),
        },
      },
      {
        name: 'startTime',
        label: 'Время начала',
        options: {
          filter: true,
          sort: true,
          customBodyRender: (value: string) => new Date(value).toLocaleString('ru-RU'),
        },
      },
      {
        name: 'created_at',
        label: 'Дата создания',
        options: {
          filter: true,
          sort: true,
          customBodyRender: (value: string) => new Date(value).toLocaleString('ru-RU'),
        },
      },
    ],
    []
  );
  return (
    <Loader loaded={Boolean(consultations)}>
      <MUIDataTable columns={consultationColumns} data={consultations ?? []} title={'Консультации'} options={options} />
    </Loader>
  );
};

export default Page;
