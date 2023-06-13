import * as React from "react";
import Link from "next/link";

import { type NavItem } from "@/shared/config/nav.ts";
import { siteConfig } from "@/shared/config/site.ts";
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

interface MainNavProps {
  items?: NavItem[];
  placeholders: Record<string, string>;
}

const replacePlaceholders = (
  href: string,
  placeholders: Record<string, string>,
): string => {
  if (placeholders === undefined) {
    return href;
  }

  return href.replace(
    "{lang}",
    placeholders.lang,
  );
};

const MainNav = (props: MainNavProps) => {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link
        href={replacePlaceholders("/{lang}/", props.placeholders)}
        className="hidden items-center space-x-2 md:flex"
      >
        <Icons.logo className="h-6 w-6" />
        <span className="font-bold inline-block">
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
                      "flex items-center text-lg font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-100 sm:text-sm",
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
            className="-ml-4 text-base hover:bg-transparent focus:ring-0 items-center space-x-2 flex md:hidden"
          >
            <Icons.logo className="h-6 w-6" />
            <span className="font-bold inline-block">
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
            <Link href={replacePlaceholders("/{lang}/", props.placeholders)}>
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

export { MainNav };
