import Link from "next/link";

import { Separator } from "@/shared/components/ui/separator.tsx";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <Link href="/about/">Hakkında</Link>
        <Separator className={styles.div} orientation="vertical" decorative={true} />
        <Link href="/policies/">Kurallar</Link>
      </div>
    </footer>
  );
};

export { Footer };
