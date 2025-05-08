"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { cn } from "@/shared/lib/cn.ts";
import { Icons } from "@/shared/components/icons.tsx";
import { useNavigationClient } from "@/shared/modules/navigation/use-navigation-client.tsx";
import { useTranslations } from "@/shared/modules/i18n/use-translations.tsx";
import { Button } from "@/shared/components/ui/button.tsx";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/shared/components/ui/command.tsx";

export function SearchBar() {
  const [open, setOpen] = React.useState(false);

  const { t, supportedLocales, localeCode } = useTranslations();

  const navigation = useNavigationClient();

  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64",
        )}
        onClick={() => setOpen(true)}
      >
        <span className="hidden lg:inline-flex">{t("Search", "General search")}</span>
        <span className="inline-flex lg:hidden">{t("Search", "Search")}</span>
        <kbd className="pointer-events-none absolute right-[0.4rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded-sm border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={t("Search", "Profile search...")} />
        <CommandList>
          <CommandEmpty>{t("Search", "No results found.")}</CommandEmpty>
          <CommandGroup heading={t("Search", "Suggestions")}>
            <CommandItem disabled>
              <Icons.calendar className="mr-2 h-4 w-4" />
              <span>{t("Search", "Events")}</span>
              <CommandShortcut>⌘E</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading={t("Search", "Profiles")}>
            <CommandItem
              onSelect={() => {
                navigation.push("/aya");
                setOpen(false);
              }}
            >
              <Icons.users className="mr-2 h-4 w-4" />
              <span>AYA</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                navigation.push("/eser");
                setOpen(false);
              }}
            >
              <Icons.user className="mr-2 h-4 w-4" />
              <span>Eser Ozvataf</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading={t("Search", "Themes")}>
            <CommandItem
              onSelect={() => {
                setTheme("default");
                setOpen(false);
              }}
              disabled={theme === "default"}
            >
              <Icons.settings className="mr-2 h-4 w-4" />
              <span>{t("Search", "Theme: System")}</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setTheme("light");
                setOpen(false);
              }}
              disabled={theme === "light"}
            >
              <Icons.settings className="mr-2 h-4 w-4" />
              <span>{t("Search", "Theme: Light")}</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setTheme("midnight");
                setOpen(false);
              }}
              disabled={theme === "midnight"}
            >
              <Icons.settings className="mr-2 h-4 w-4" />
              <span>{t("Search", "Theme: Midnight")}</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading={t("Search", "Localization")}>
            {Object.values(supportedLocales).map((locale) => (
              <CommandItem
                key={`locale-${locale.code}`}
                onSelect={() => {
                  navigation.setLocaleCode(locale.code);
                  setOpen(false);
                }}
                disabled={locale.code === localeCode}
              >
                <span className="mr-2 h-4 w-4">{locale.flag}</span>
                <span>{locale.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
