import Link from "next/link";

import { cn } from "@/shared/lib/cn.ts";
import { Button } from "@/shared/components/ui/button.tsx";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
    isActive?: boolean;
  }[];
}

const SidebarNav = (
  { className, items, ...props }: SidebarNavProps,
) => {
  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className,
      )}
      {...props}
    >
      {items.map((item) => (
        <Button
          variant="link"
          size="default"
          asChild
          className={cn(
            item.isActive
              ? "bg-border hover:bg-border"
              : "bg-transparent hover:bg-transparent",
            "justify-start font-serif text-lg text-foreground hover:no-underline",
          )}
        >
          <Link
            key={item.href}
            href={item.href}
          >
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  );
};

export { SidebarNav };
