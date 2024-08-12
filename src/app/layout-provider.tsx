"use client";

import { Inter } from "next/font/google";

import useTheme from "./hooks/useTheme";

const inter = Inter({ subsets: ["latin"] });

export const RootProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const { theme } = useTheme();
  return (
    <html lang="en" className={theme}>
      <body className={inter.className}>{children}</body>
    </html>
  );
};
