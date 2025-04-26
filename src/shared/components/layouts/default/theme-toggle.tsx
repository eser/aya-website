"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Icons } from "@/shared/components/icons.tsx";
import { Button } from "@/shared/components/ui/button.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu.tsx";
import { cn } from "@/shared/lib/cn.ts";

import styles from "./theme-toggle.module.css";

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={styles["theme-selector"]}
          asChild
        >
          <div>
            <Icons.sun
              className={cn(
                styles.sun,
                "rotate-0 scale-100 dark:-rotate-90 dark:scale-0",
              )}
            />
            <Icons.moon
              className={cn(
                styles.moon,
                "rotate-90 scale-0 dark:rotate-0 dark:scale-100",
              )}
            />
            <span className={styles.description}>Temayı değiştir</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={15} forceMount>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Icons.sun className={styles.icon} />
          <span>Açık</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Icons.moon className={styles.icon} />
          <span>Koyu</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Icons.laptop className={styles.icon} />
          <span>Sistem</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ThemeToggle };
