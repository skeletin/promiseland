import { Check, LoaderCircle, X } from "lucide-react";
import clsx from "clsx";
import styles from "./PlSubmissionBanner.module.css";

export type PlSubmissionBannerProps = {
  status?: "pending" | "passed" | "failed";
  message?: string;
};

function defaultMessage(status: PlSubmissionBannerProps["status"]) {
  switch (status) {
    case "passed":
      return "All tests passed! +50 XP";
    case "failed":
      return "3 of 5 tests passed. Keep trying.";
    default:
      return "Grading your submission...";
  }
}

export function PlSubmissionBanner({
  status = "pending",
  message = "",
}: PlSubmissionBannerProps) {
  const text = message || defaultMessage(status);
  const iconColor =
    status === "passed"
      ? "var(--color-accent-success)"
      : status === "failed"
        ? "var(--color-accent-error)"
        : "var(--color-accent-warn)";

  const Icon = status === "passed" ? Check : status === "failed" ? X : LoaderCircle;

  return (
    <div
      className={clsx(
        styles["pl-submission-banner"],
        styles[`pl-submission-banner--${status}`],
      )}
    >
      <Icon size={20} color={iconColor} aria-hidden />
      <span className={styles["pl-submission-banner__text"]}>{text}</span>
    </div>
  );
}
