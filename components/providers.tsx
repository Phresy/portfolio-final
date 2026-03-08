"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const SafeProvider = NextThemesProvider as any;
  return (
    <SafeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </SafeProvider>
  );
}