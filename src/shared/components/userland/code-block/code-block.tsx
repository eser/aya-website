import React from "react";
import styles from "./code-block.module.css";

export function CodeBlock({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <pre className={styles.codeBlock} {...props}>
      {children}
    </pre>
  );
}
