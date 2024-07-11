"use client";
import { PT_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const ptSans = PT_Sans({
  weight: ["400", "700"], // Only include valid weights
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: ptSans.style.fontFamily,
  },
});

export default theme;
