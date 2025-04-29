import * as React from "react";

import Image from "next/image";

import { cn } from "@/shared/lib/cn.ts";

import { Stars } from "./stars.tsx";
import styles from "./astronaut.module.css";

type AstronautProps = {
  className?: string | undefined;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  fill?: boolean | undefined;
};

export const Astronaut = (props: AstronautProps) => {
  return (
    <div className={cn(styles.container, props.className)}>
      <Stars
        className={styles.stars}
        width={props.width}
        height={props.height}
      />
      <Image
        className={styles.astronaut}
        src="/astronaut.svg"
        width={props.width}
        height={props.height}
        fill={props.fill}
        loading="eager"
        alt="cute little astronaut"
        priority
      />
    </div>
  );
};
