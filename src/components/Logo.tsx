import Image from 'next/image';
import { useTheme } from '@mui/material/styles';

export const Logo = ({ size = 60 }) => {
  const { mode } = useTheme().palette;
  return <Image src={`/${mode}Logo.png`} alt="MindCare Logo" width={size} height={size} />;
};
