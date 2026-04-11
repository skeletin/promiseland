import styles from "./Learn.module.css";

export type LearnPathHeaderProps = {
  title?: string;
  percent: number;
  completedChallenges: number;
  totalChallenges: number;
};

export function LearnPathHeader({
  title = "Learning Path — JavaScript Promises",
  percent,
  completedChallenges,
  totalChallenges,
}: LearnPathHeaderProps) {
  const clamped = Math.min(100, Math.max(0, percent));

  return (
    <header className={styles["learn-lp-header"]}>
      <h1 className={styles["learn-lp-title"]}>{title}</h1>
      <div className={styles["learn-lp-prog-row"]}>
        <div className={styles["learn-lp-prog-track"]}>
          <div
            className={styles["learn-lp-prog-fill"]}
            style={{ width: `${clamped}%` }}
          />
        </div>
        <p className={styles["learn-lp-prog-caption"]}>
          {clamped}% complete · {completedChallenges} of {totalChallenges}{" "}
          challenges
        </p>
      </div>
    </header>
  );
}
