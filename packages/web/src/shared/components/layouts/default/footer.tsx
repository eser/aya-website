import Link from "next/link";

import { Separator } from "@/shared/components/ui/separator.tsx";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <Link href="/aya/">açık yazılım ağı</Link>
        <Separator className={styles.div} orientation="vertical" decorative={true} />
        <Link href="/aya/stories/">Haberler</Link>
        <Separator className={styles.div} orientation="vertical" decorative={true} />
        <Link href="/aya/policies/">Kurallar</Link>
        <Separator className={styles.div} orientation="vertical" decorative={true} />
        <Link href="/aya/about/">Hakkında</Link>
      </div>
    </footer>
  );
};

export { Footer };
