import { siteConfig } from "@/shared/config.ts";
import { Icons } from "@/shared/components/icons.tsx";
import { cn } from "@/shared/lib/cn.ts";

import styles from "./logo.module.css";
import { EasterEgg } from "./easter-egg.tsx";

const Logo = (props: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div
      className={cn(
        styles.container,
        props.className,
      )}
    >
      <Icons.logo className="h-6 w-6" />

      <span className="site-name text-base font-bold">
        {siteConfig.name}
      </span>

      <EasterEgg />
    </div>
  );
};

export { Logo };
