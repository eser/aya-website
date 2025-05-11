"use client";

import type * as React from "react";

import { useNavigationClient } from "@/shared/modules/navigation/use-navigation-client.tsx";

import Link from "next/link";

export type SiteLinkProps = Omit<React.ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export function SiteLink(props: SiteLinkProps) {
  const navigation = useNavigationClient();

  const targetHref = navigation.validateHref(props.href);

  return <Link {...props} href={targetHref} />;
}
