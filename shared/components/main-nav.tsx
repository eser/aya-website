import * as React from "react";
import Link from "next/link";

import { type NavItem } from "@/shared/config/nav";
import { siteConfig } from "@/shared/config/site";
import { cn } from "@/shared/lib/utils";
import { Icons } from "@/shared/components/icons";
import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";

interface MainNavProps {
  items?: NavItem[];
  placeholders: Record<string, string>;
}

function replacePlaceholders(
  href: string,
  placeholders: Record<string, string>,
): string {
  if (placeholders === undefined) {
    return href;
  }

  return href.replace(
    "{lang}",
    placeholders.lang,
  );
}

function MainNav(props: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
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
            className="-ml-4 text-base hover:bg-transparent focus:ring-0 md:hidden"
          >
            <Icons.logo className="mr-2 h-4 w-4" />{" "}
            <span className="font-bold">Onİleri</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          sideOffset={24}
          className="w-[300px] overflow-scroll"
        >
          <DropdownMenuLabel>
            <Link href="/" className="flex items-center">
              <Icons.logo className="mr-2 h-4 w-4" /> {siteConfig.name}
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {props.items?.map(
            (item, index) =>
              item.href && (
                <DropdownMenuItem key={index} asChild>
                  <Link href={item.href}>{item.title}</Link>
                </DropdownMenuItem>
              ),
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export { MainNav };
