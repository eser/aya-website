import styles from "./cards.module.css";

interface CardsProps {
  children?: React.ReactNode;
}

const Cards = (props: CardsProps) => {
  return (
    <div className={styles.cards}>
      {props.children}
    </div>
  );
};

interface CardProps {
  category: string;
  title: string;
  description: string;
  href?: string;
  children?: React.ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <a className={styles.card} href={props.href}>
      <div className={styles.inner}>
        <div className={styles.tags}>
          {props.category}
        </div>
        {/* <div className={styles["image-placeholder"]}>
          {props.title}
        </div> */}
        <h5 className={styles.title}>
          {props.title}
        </h5>
        <p className={styles.description}>
          {props.description}
        </p>
      </div>
    </a>
  );
};

export { Card, type CardProps, Cards, type CardsProps };
