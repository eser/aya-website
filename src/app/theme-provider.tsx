"use client";

import * as React from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

// https://github.com/pacocoursey/next-themes/issues/152#issuecomment-1364280564

export const ThemeProvider = (props: ThemeProviderProps) => {
  return <NextThemesProvider {...props} />;
};
