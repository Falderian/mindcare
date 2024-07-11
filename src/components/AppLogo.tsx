import { Box, Typography } from "@mui/material";
import { Logo } from "./Logo";

export const AppLogo = () => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Logo />
      <Typography variant="h4" fontWeight={700} marginTop={1}>
        MindCare
      </Typography>
    </Box>
  );
};
