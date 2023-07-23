import Image from "next/image";

import styles from "./astronaut.module.css";

const Astronaut = () => {
  return (
    <div className={styles.astronaut}>
      <Image
        src="/astronaut.svg"
        width={400}
        height={400}
        alt="cute little astronaut"
      />
    </div>
  );
};

export { Astronaut };
