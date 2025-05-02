import * as React from "react";

import { NavigationContext } from "./navigation-provider.tsx";

export function useNavigation() {
  const context = React.useContext(NavigationContext);

  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }

  return context;
}
