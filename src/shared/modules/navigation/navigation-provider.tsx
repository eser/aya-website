"use client";

import * as React from "react";

export type NavigationContextState = {
  host: string | null;
  profile: string | null;
};

export type NavigationProviderProps = {
  state: NavigationContextState;
  children: React.ReactNode;
};

export const NavigationContext = React.createContext<NavigationContextState | undefined>(undefined);

export function NavigationProvider(props: NavigationProviderProps) {
  return (
    <NavigationContext.Provider value={props.state}>
      {props.children}
    </NavigationContext.Provider>
  );
}
