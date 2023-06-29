import Link from "next/link";

import { cn } from "@/shared/lib/cn.ts";
import { buttonVariants } from "@/shared/components/ui/button.tsx";

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
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            item.isActive
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start",
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export { SidebarNav };
