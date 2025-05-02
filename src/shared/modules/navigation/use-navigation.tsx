import * as React from "react";

import { useRouter } from "next/navigation";

import { siteConfig } from "@/shared/config.ts";

import { NavigationContext } from "./navigation-provider.tsx";

export function useNavigation() {
  const state = React.useContext(NavigationContext);

  if (state === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }

  const router = useRouter();

  const validateHref = (href: string) => {
    if (state.host === null) {
      return href;
    }

    const profileLink = `/${state.profile}`;

    if (href === profileLink) {
      return "/";
    }

    if (href.startsWith(`${profileLink}/`)) {
      return href.slice(profileLink.length);
    }

    return `//${siteConfig.host}${href}`;
  };

  const push = (href: string) => {
    router.push(validateHref(href));
  };

  return { state, validateHref, push };
}
