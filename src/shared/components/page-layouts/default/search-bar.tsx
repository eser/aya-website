"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Calendar, Settings, User, Users } from "lucide-react";

import { cn } from "@/shared/lib/cn.ts";
import { useNavigationClient } from "@/shared/modules/navigation/use-navigation-client.tsx";
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

  const navigation = useNavigationClient();

  const { setTheme } = useTheme();

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
        <span className="hidden lg:inline-flex">Genel arama...</span>
        <span className="inline-flex lg:hidden">Arama...</span>
        <kbd className="pointer-events-none absolute right-[0.4rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded-sm border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Profil ara..." />
        <CommandList>
          <CommandEmpty>Sonuç bulunamadı.</CommandEmpty>
          <CommandGroup heading="Öneriler">
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Etkinlikler</span>
              <CommandShortcut>⌘E</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Profiller">
            <CommandItem
              onSelect={() => {
                navigation.push("/aya");
                setOpen(false);
              }}
            >
              <Users className="mr-2 h-4 w-4" />
              <span>AYA</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                navigation.push("/eser");
                setOpen(false);
              }}
            >
              <User className="mr-2 h-4 w-4" />
              <span>Eser Ozvataf</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Tema">
            <CommandItem
              onSelect={() => {
                setTheme("default");
                setOpen(false);
              }}
            >
              <Settings className="mr-2 h-4 w-4" />
              <span>Tema: Sistem</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setTheme("light");
                setOpen(false);
              }}
            >
              <Settings className="mr-2 h-4 w-4" />
              <span>Tema: Açık</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setTheme("midnight");
                setOpen(false);
              }}
            >
              <Settings className="mr-2 h-4 w-4" />
              <span>Tema: Koyu</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
