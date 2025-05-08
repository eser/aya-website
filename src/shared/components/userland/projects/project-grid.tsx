import * as React from "react";

import styles from "./project-grid.module.css";

interface ProjectGridProps {
  children: React.ReactNode;
}

export function ProjectGrid({ children }: ProjectGridProps) {
  return (
    <div className={styles.grid}>
      {children}
    </div>
  );
}
