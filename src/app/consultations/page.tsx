'use client';
import { Consultation } from '@prisma/client';
import MUIDataTable from 'mui-datatables';

type Props = {
  consultations: Consultation[];
};

const ConsulationsPage = ({ consultations }: Props) => {
  return <MUIDataTable columns={[]} data={consultations ?? []} title={'Консультации'} />;
};

export default ConsulationsPage;
