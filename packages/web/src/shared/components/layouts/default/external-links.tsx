import * as React from "react";
import Link from "next/link";

import { siteConfig } from "@/shared/config.ts";
import { cn } from "@/shared/lib/cn.ts";
import { replacePlaceholders } from "@/shared/lib/replace-placeholders.ts";
import { Icons } from "@/shared/components/icons.tsx";
import { Button } from "@/shared/components/ui/button.tsx";

interface NavItem {
  title: string;
  href?: string;
  icon: React.ReactNode;
  disabled?: boolean;
}

const navItems: NavItem[] = [
  {
    title: "GitHub",
    icon: <Icons.github className="h-5 w-5" />,
    href: siteConfig.links.github,
  },
  {
    title: "Twitter",
    icon: <Icons.twitter className="h-5 w-5" />,
    href: siteConfig.links.twitter,
  },
  {
    title: "Instagram",
    icon: <Icons.instagram className="h-5 w-5" />,
    href: siteConfig.links.instagram,
  },
];

interface ExternalLinksProps {
  placeholders: Record<string, string>;
}

const ExternalLinks = (props: ExternalLinksProps) => {
  return (
    <div className="flex-1 flex justify-end">
      {navItems.map(
        (item, index) =>
          item.href && (
            <Button key={index} variant="ghost" size="sm" asChild>
              <Link
                href={replacePlaceholders(item.href, props.placeholders)}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "hidden lg:flex",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                {item.icon}
                <span className="sr-only">{item.title}</span>
              </Link>
            </Button>
          ),
      )}
    </div>
  );
};

export { ExternalLinks };
