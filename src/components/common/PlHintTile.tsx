import { Lightbulb } from "lucide-react";
import clsx from "clsx";
import styles from "./PlHintTile.module.css";

export type PlHintTileProps = {
  title?: string;
  penaltyXp?: number;
  content?: string;
  revealed?: boolean;
};

export function PlHintTile({
  title = "Hint 1",
  penaltyXp = 10,
  content = "Try using .then() to chain the resolved value into the next async operation.",
  revealed = false,
}: PlHintTileProps) {
  return (
    <article
      className={clsx(
        styles["pl-hint-tile"],
        revealed && styles["pl-hint-tile--revealed"],
      )}
    >
      <header className={styles["pl-hint-tile__top"]}>
        <span className={styles["pl-hint-tile__left"]}>
          <Lightbulb size={16} color="var(--color-accent-warn)" aria-hidden />
          <span className={styles["pl-hint-tile__title"]}>{title}</span>
        </span>
        <span className={styles["pl-hint-tile__penalty"]}>-{penaltyXp} XP</span>
      </header>
      {revealed ? (
        <p className={styles["pl-hint-tile__content"]}>{content}</p>
      ) : null}
    </article>
  );
}
