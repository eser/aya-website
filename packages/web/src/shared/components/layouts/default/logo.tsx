import { siteConfig } from "@/shared/config.ts";
import { Icons } from "@/shared/components/icons.tsx";

const Logo = () => {
  return (
    <>
      <Icons.logoOnLight className="h-6 w-6 dark:hidden inline-block" />
      <Icons.logoOnDark className="h-6 w-6 hidden dark:inline-block" />

      <span className="inline-block font-bold">
        {siteConfig.name}
      </span>
    </>
  );
};

export { Logo };
