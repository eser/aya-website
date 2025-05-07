import * as React from "react";

import { cn } from "@/shared/lib/cn.ts";
import { getTranslations } from "@/shared/modules/i18n/get-translations.tsx";
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
  key: string;
  title: string;
  href?: string;
  disabled?: boolean;
};

type MainNavProps = {
  placeholders: Record<string, string>;
};

export async function MainNav(props: MainNavProps) {
  const { t } = await getTranslations("Layout");

  const navItems: NavItem[] = [
    {
      key: "elements",
      title: t("Elements"),
      href: "/elements/",
    },
    {
      key: "products",
      title: t("Products"),
      href: "/products/",
    },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles["nav-links"]}>
        <SiteLink href="/">
          <Logo />
        </SiteLink>
        {navItems.map(
          (item, _index) =>
            item.href && (
              <SiteLink
                key={item.key}
                href={replacePlaceholders(item.href, props.placeholders)}
                className={cn(item.disabled && styles.disabled)}
              >
                {item.title}
              </SiteLink>
            ),
        )}
      </div>
      <div className={styles["nav-dropdown"]}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" asChild>
              <Logo />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" sideOffset={14} className={styles["nav-dropdown-content"]}>
            <DropdownMenuItem asChild>
              <SiteLink href="/">{t("Homepage")}</SiteLink>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {navItems.map(
              (item, _index) =>
                item.href && (
                  <DropdownMenuItem key={item.key} asChild>
                    <SiteLink href={replacePlaceholders(item.href, props.placeholders)}>{item.title}</SiteLink>
                  </DropdownMenuItem>
                ),
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
