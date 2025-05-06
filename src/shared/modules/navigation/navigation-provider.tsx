"use client";

import * as React from "react";

import type { Locale } from "@/shared/modules/i18n/locales.ts";

export type NavigationContextStateValues = {
  host: string | null;
  profile: string | null;
  locale: Locale;
};

export type NavigationContextState = NavigationContextStateValues & {
  setLocale: (locale: Locale) => void;
};

export type NavigationProviderProps = {
  state: NavigationContextStateValues;
  children: React.ReactNode;
};

export const NavigationContext = React.createContext<NavigationContextState | undefined>(undefined);

export function NavigationProvider(props: NavigationProviderProps) {
  const [currentLocale, setCurrentLocale] = React.useState<Locale>(props.state.locale);

  const contextValue = {
    ...props.state,
    locale: currentLocale,
    setLocale: setCurrentLocale,
  };

  return (
    <NavigationContext.Provider value={contextValue}>
      {props.children}
    </NavigationContext.Provider>
  );
}
