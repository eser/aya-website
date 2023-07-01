import Link from "next/link";

import { Separator } from "@/shared/components/ui/separator.tsx";

interface SiteFooterProps {
  placeholders: Record<string, string>;
}

const SiteFooter = (props: SiteFooterProps) => {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex h-5 items-center space-x-4 text-sm">
          <Link href="/about/">Hakkında</Link>
          <Separator orientation="vertical" />
          <Link href="/policies/">Kurallar</Link>
        </div>
      </div>
    </footer>
  );
};

export { SiteFooter };
