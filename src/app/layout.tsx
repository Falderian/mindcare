import { AntdRegistry } from "@ant-design/nextjs-registry";
import React from "react";

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body style={{ margin: 0 }}>
      <AntdRegistry>{children}</AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
