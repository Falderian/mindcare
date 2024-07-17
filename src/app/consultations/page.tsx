'use client';
import { Consultation } from '@prisma/client';
import MUIDataTable from 'mui-datatables';
import { datatableOptions } from '../../utils/utils';
import { useMemo } from 'react';
import { AppBar } from '@mui/material';

type Props = {
  consultations: Consultation[];
};

const ConsulationsPage = ({ consultations }: Props) => {
  const options = useMemo(() => datatableOptions(), []);
  return (
    <>
      <MUIDataTable columns={[]} data={consultations ?? []} title={'Консультации'} options={options} />
    </>
  );
};

export default ConsulationsPage;
