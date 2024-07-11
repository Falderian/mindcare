import Image from 'next/image';
import { useTheme } from '@mui/material/styles';

export const Logo = () => {
  const { mode } = useTheme().palette;
  return <Image src={`/${mode}Logo.png`} alt="MindCare Logo" width="60" height="60" />;
};
