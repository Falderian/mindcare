'use client';
import { Consultation } from '@prisma/client';
import MUIDataTable from 'mui-datatables';
import { datatableOptions } from '../../utils/utils';
import { ReactNode, useMemo } from 'react';
import { AppBar } from '@mui/material';

type Props = {
  params: {
    consultations: Consultation[];
  };
};

const ConsultationsPage: React.FC<Props> = ({ params: { consultations } }): ReactNode => {
  const options = useMemo(() => datatableOptions(), []);
  return (
    <>
      <MUIDataTable columns={[]} data={consultations ?? []} title={'Консультации'} options={options} />
    </>
  );
};

export default ConsultationsPage;
