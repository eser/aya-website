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
        <Logo />
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
              <Logo />
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          sideOffset={15}
          className="w-[300px]"
        >
          <DropdownMenuItem asChild>
            <Link href="/" className="no-underline">
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
                    className="no-underline"
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
