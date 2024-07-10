import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../configs/theme";
import { Toaster } from "react-hot-toast";

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="ru">
    <body style={{ margin: 0 }}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </AppRouterCacheProvider>
      <Toaster />
    </body>
  </html>
);

export default RootLayout;
