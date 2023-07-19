import * as React from "react";
import Link from "next/link";

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
import { Logo } from "./logo.tsx";

import styles from "./main-nav.module.css";

interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
}

const navItems: NavItem[] = [
  {
    title: "Haberler",
    href: "/aya/news/",
  },
  {
    title: "Rehber",
    href: "/aya/guide/",
  },
  {
    title: "Topluluk",
    href: "/community/",
  },
  {
    title: "Kişiler",
    href: "/people/",
  },
  {
    title: "Üretimler",
    href: "/products/",
  },
  {
    title: "Merkezler",
    href: "/venues/",
  },
];

interface MainNavProps {
  placeholders: Record<string, string>;
}

const MainNav = (props: MainNavProps) => {
  return (
    <nav>
      <div className={styles["nav-links"]}>
        <Link href="/">
          <Logo />
        </Link>
        {navItems.map(
          (item, index) =>
            item.href && (
              <Link
                key={index}
                href={replacePlaceholders(item.href, props.placeholders)}
                className={cn(
                  item.disabled && styles.disabled,
                )}
              >
                {item.title}
              </Link>
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
              <Link href="/">
                Ana Sayfa
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {navItems.map(
              (item, index) =>
                item.href && (
                  <DropdownMenuItem key={index} asChild>
                    <Link
                      href={replacePlaceholders(item.href, props.placeholders)}
                    >
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                ),
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export { MainNav };
