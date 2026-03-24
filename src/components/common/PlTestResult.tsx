import { Check, X } from "lucide-react";
import clsx from "clsx";
import styles from "./PlTestResult.module.css";

export type PlTestResultProps = {
  status?: "pass" | "fail";
  label?: string;
  durationMs?: number;
};

export function PlTestResult({
  status = "pass",
  label = "should resolve with correct data",
  durationMs = 12,
}: PlTestResultProps) {
  const Icon = status === "fail" ? X : Check;
  const iconColor =
    status === "fail" ? "var(--color-accent-error)" : "var(--color-accent-success)";
  return (
    <article
      className={clsx(
        styles["pl-test-result"],
        styles[`pl-test-result--${status}`],
      )}
    >
      <Icon size={16} color={iconColor} aria-hidden />
      <span className={styles["pl-test-result__label"]}>{label}</span>
      <span className={styles["pl-test-result__duration"]}>{durationMs}ms</span>
    </article>
  );
}
