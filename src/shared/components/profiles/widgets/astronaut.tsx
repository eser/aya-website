import Image from "next/image";

import { cn } from "@/shared/lib/cn.ts";

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
      <Image
        className={styles.stars}
        src="/stars.svg"
        width={props.width}
        height={props.height}
        fill={props.fill}
        loading="lazy"
        alt="stars"
      />
      <Image
        className={styles.astronaut}
        src="/astronaut.svg"
        width={props.width}
        height={props.height}
        fill={props.fill}
        loading="lazy"
        alt="cute little astronaut"
      />
    </div>
  );
};
