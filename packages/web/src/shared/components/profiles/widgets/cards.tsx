import styles from "./cards.module.css";

interface CardsProps {
  children: React.ReactNode;
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
  telegramUri?: string;
  children: React.ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <a className={styles.card} href={props.telegramUri}>
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
        <div className={`${styles.links} buttons`}>
          <div className="button">
            Katıl
          </div>
        </div>
      </div>
    </a>
  );
};

export { Card, type CardProps, Cards, type CardsProps };
