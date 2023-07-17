import * as React from "react";
import Link from "next/link";

import { siteConfig } from "@/shared/config.ts";
import { cn } from "@/shared/lib/cn.ts";
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
  external?: boolean;
}

interface MainNavProps {
  items?: NavItem[];
  placeholders: Record<string, string>;
}

const replacePlaceholders = (
  href: string,
  placeholders: Record<string, string>,
): string => {
  return Object.entries(placeholders).reduce(
    (acc, curr) => acc.replace(`{${curr[0]}}`, curr[1]),
    href,
  );
};

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
      {props.items?.length
        ? (
          <nav className="hidden gap-6 md:flex">
            {props.items?.map(
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
        )
        : null}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="-ml-4 flex items-center space-x-2 text-base hover:bg-transparent focus:ring-0 md:hidden"
          >
            <Icons.logo className="h-6 w-6" />
            <span className="inline-block font-bold">
              {siteConfig.name}
            </span>
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
          {props.items?.map(
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

export { MainNav, type NavItem };
