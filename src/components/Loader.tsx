import { Backdrop, CircularProgress } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  loaded: any;
};

export const Loader = ({ children, loaded }: Props) => {
  return loaded ? (
    <>{children}</>
  ) : (
    <Backdrop open={!loaded} invisible>
      <CircularProgress color="primary" />
    </Backdrop>
  );
};
