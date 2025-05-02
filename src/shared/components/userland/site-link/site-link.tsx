"use client";

import * as React from "react";

import { siteConfig } from "@/shared/config.ts";
import { useNavigation } from "@/shared/modules/navigation/use-navigation.tsx";

import Link from "next/link";

export type SiteLinkProps = {
  href: string;
  children?: React.ReactNode;
  target?: string;
  role?: string;
  className?: string;
  rel?: string;
};

export function SiteLink(props: SiteLinkProps) {
  const navigationState = useNavigation();

  let targetHref = props.href;

  if (navigationState.host !== null) {
    const profileLink = `/${navigationState.profile}`;

    if (targetHref === profileLink) {
      targetHref = "/";
    } else if (targetHref.startsWith(`${profileLink}/`)) {
      targetHref = targetHref.slice(profileLink.length);
    } else {
      targetHref = `//${siteConfig.host}${targetHref}`;
    }
  }

  return (
    <Link
      href={targetHref}
      rel={props.rel}
      target={props.target}
      role={props.role}
      className={props.className}
    >
      {props.children ?? targetHref}
    </Link>
  );
}
