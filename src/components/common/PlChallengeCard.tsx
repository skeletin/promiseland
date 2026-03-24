import { Check } from "lucide-react";
import clsx from "clsx";
import type { PlBadgeVariant } from "../ui/PlBadge";
import { PlBadge } from "../ui/PlBadge";
import styles from "./PlChallengeCard.module.css";

export type PlChallengeCardProps = {
  title?: string;
  difficulty?: Extract<PlBadgeVariant, "beginner" | "intermediate" | "advanced">;
  xp?: number;
  progress?: number;
  status?: Extract<
    PlBadgeVariant,
    "in progress" | "completed" | "locked" | "not started"
  >;
  attempts?: number;
};

export function PlChallengeCard({
  title = "",
  difficulty = "beginner",
  xp = 0,
  progress = 0,
  status = "not started",
  attempts = 0,
}: PlChallengeCardProps) {
  const hasProgress = status === "completed" || status === "in progress";

  return (
    <article
      className={clsx(
        styles["pl-challenge-card"],
        status === "completed" && styles["pl-challenge-card--completed"],
      )}
    >
      <div className={styles["pl-challenge-card__top"]}>
        <PlBadge variant={difficulty}>{difficulty}</PlBadge>
        {status === "completed" ? (
          <div className={styles["pl-challenge-card__check"]}>
            <Check size={14} color="#00d9c0" aria-hidden />
          </div>
        ) : null}
        {status === "in progress" ? (
          <PlBadge variant="xp">+{xp} XP</PlBadge>
        ) : null}
      </div>
      <div className={styles["pl-challenge-card__title"]}>
        <span>{title}</span>
      </div>
      <div className={styles["pl-challenge-card__bottom"]}>
        <PlBadge variant={status}>{status}</PlBadge>
        {hasProgress ? (
          <>
            {status === "in progress" ? (
              <span className={styles["pl-challenge-card__attempts"]}>
                {attempts} attempts
              </span>
            ) : null}
            <span className={styles["pl-challenge-card__progress"]}>
              Best: {progress}%
            </span>
          </>
        ) : null}
      </div>
    </article>
  );
}
