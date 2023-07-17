import * as React from "react";
import Link from "next/link";

import { siteConfig } from "@/shared/config.ts";
import { cn } from "@/shared/lib/cn.ts";
import { replacePlaceholders } from "@/shared/lib/replace-placeholders.ts";
import { Icons } from "@/shared/components/icons.tsx";
import { Button } from "@/shared/components/ui/button.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu.tsx";

interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
}

const navItems: NavItem[] = [
  {
    title: "Haberler",
    href: "/news/",
  },
  {
    title: "Rehber",
    href: "/guide/",
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
];

interface MainNavProps {
  placeholders: Record<string, string>;
}

const MainNav = (props: MainNavProps) => {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link
        href="/"
        className="hidden items-center space-x-2 md:flex"
      >
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="hidden gap-6 md:flex">
        {navItems.map(
          (item, index) =>
            item.href && (
              <Link
                key={index}
                href={replacePlaceholders(item.href, props.placeholders)}
                className={cn(
                  "flex items-center text-lg font-semibold sm:text-sm",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                {item.title}
              </Link>
            ),
        )}
      </nav>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="-ml-4 flex items-center space-x-2 text-base hover:bg-transparent focus:ring-0 md:hidden cursor-pointer"
            asChild
          >
            <div>
              <Icons.logo className="h-6 w-6" />
              <span className="inline-block font-bold">
                {siteConfig.name}
              </span>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          sideOffset={24}
          className="w-[300px] overflow-scroll"
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
  );
};

export { MainNav };
