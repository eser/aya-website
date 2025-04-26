import * as React from "react";
import Link from "next/link";

import { siteConfig } from "@/shared/config.ts";
import { cn } from "@/shared/lib/cn.ts";
import { Icons } from "@/shared/components/icons.tsx";
import { Button } from "@/shared/components/ui/button.tsx";

import styles from "./external-links.module.css";

interface NavItem {
  title: string;
  href?: string;
  icon: React.ReactNode;
  disabled?: boolean;
}

const navItems: NavItem[] = [
  {
    title: "GitHub",
    icon: <Icons.github className={styles.icon} />,
    href: siteConfig.links.github,
  },
  {
    title: "Twitter",
    icon: <Icons.twitter className={styles.icon} />,
    href: siteConfig.links.twitter,
  },
  {
    title: "Instagram",
    icon: <Icons.instagram className={styles.icon} />,
    href: siteConfig.links.instagram,
  },
];

const ExternalLinks = () => {
  return (
    <div className={styles.container}>
      {navItems.map(
        (item, index) =>
          item.href && (
            <Button key={index} variant="ghost" size="sm" asChild>
              <Link
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  item.disabled && styles.disabled,
                )}
              >
                {item.icon}
                <span className={styles.description}>{item.title}</span>
              </Link>
            </Button>
          ),
      )}
    </div>
  );
};

export { ExternalLinks };
