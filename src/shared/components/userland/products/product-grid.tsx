import type * as React from "react";

import styles from "./product-grid.module.css";

interface ProductGridProps {
  children: React.ReactNode;
}

export function ProductGrid({ children }: ProductGridProps) {
  return (
    <div className={styles.grid}>
      {children}
    </div>
  );
}
