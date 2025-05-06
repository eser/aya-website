import * as React from "react";

import { useRouter } from "next/navigation";

import { siteConfig } from "@/shared/config.ts";

import type { Locale } from "@/shared/modules/i18n/locales.ts";

import { NavigationContext } from "./navigation-provider.tsx";

export function useNavigationClient() {
  const state = React.useContext(NavigationContext);

  if (state === undefined) {
    throw new Error("useNavigationClient must be used within a NavigationProvider");
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

  const setLocale = (locale: Locale) => {
    state.setLocale(locale);
  };

  return { state, validateHref, push, setLocale };
}
