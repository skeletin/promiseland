import styles from "./PlProgressBar.module.css";

export type PlProgressBarProps = {
  progress?: number;
};

export function PlProgressBar({ progress = 0 }: PlProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, progress));
  return (
    <div className={styles["pl-progress-bar"]}>
      <div
        className={styles["pl-progress-bar__fill"]}
        style={{ transform: `translateX(calc(${clamped}% - 100%))` }}
      />
    </div>
  );
}
