import { Star } from "lucide-react";
import styles from "./PlLevelPill.module.css";

export type PlLevelPillProps = {
  level?: number;
  xp?: number;
};

export function PlLevelPill({ level = 0, xp = 0 }: PlLevelPillProps) {
  return (
    <div className={styles["pl-level-pill"]}>
      <Star
        className={styles["pl-level-pill__icon"]}
        size={14}
        color="#f5a623"
        aria-hidden
      />
      <span className={styles["pl-level-pill__text"]}>
        Level {level} · {xp.toLocaleString()} XP
      </span>
    </div>
  );
}
