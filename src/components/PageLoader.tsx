import { Backdrop, CircularProgress } from '@mui/material';

export function PageLoader() {
  return (
    <Backdrop open={true}>
      <CircularProgress color="primary" />
    </Backdrop>
  );
}
