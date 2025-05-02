import * as React from "react";

import { cn } from "@/shared/lib/cn.ts";
import { replacePlaceholders } from "@/shared/lib/replace-placeholders.ts";
import { Button } from "@/shared/components/ui/button.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu.tsx";
import { SiteLink } from "@/shared/components/userland/site-link/site-link.tsx";

import { Logo } from "./logo.tsx";

import styles from "./main-nav.module.css";

type NavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
};

const navItems: NavItem[] = [
  {
    title: "Bileşenler",
    href: "/elements/",
  },
  {
    title: "Üretimler",
    href: "/products/",
  },
];

type MainNavProps = {
  placeholders: Record<string, string>;
};

export function MainNav(props: MainNavProps) {
  return (
    <nav className={styles.nav}>
      <div className={styles["nav-links"]}>
        <SiteLink href="/">
          <Logo />
        </SiteLink>
        {navItems.map(
          (item, index) =>
            item.href && (
              <SiteLink
                key={index}
                href={replacePlaceholders(item.href, props.placeholders)}
                className={cn(
                  item.disabled && styles.disabled,
                )}
              >
                {item.title}
              </SiteLink>
            ),
        )}
      </div>
      <div className={styles["nav-dropdown"]}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              asChild
            >
              <Logo />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            sideOffset={14}
            className={styles["nav-dropdown-content"]}
          >
            <DropdownMenuItem asChild>
              <SiteLink href="/">
                Ana Sayfa
              </SiteLink>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {navItems.map(
              (item, index) =>
                item.href && (
                  <DropdownMenuItem key={index} asChild>
                    <SiteLink
                      href={replacePlaceholders(item.href, props.placeholders)}
                    >
                      {item.title}
                    </SiteLink>
                  </DropdownMenuItem>
                ),
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
