import { ArrowRight } from "lucide-react";
import { PlButton } from "../../ui/PlButton";
import { PlProgressBar } from "../../ui/PlProgressBar";
import { DASHBOARD_CONTINUE } from "./dashboardContent";
import styles from "./Dashboard.module.css";

export function DashboardContinue() {
  const { eyebrow, title, progressPercent } = DASHBOARD_CONTINUE;

  return (
    <section
      className={styles["dashboard-continue"]}
      aria-label="Continue learning"
    >
      <div className={styles["dashboard-continue__left"]}>
        <p className={styles["dashboard-continue__eyebrow"]}>{eyebrow}</p>
        <p className={styles["dashboard-continue__title"]}>{title}</p>
        <div className={styles["dashboard-continue__progress"]}>
          <div style={{ width: "min(100%, 12.5rem)" }}>
            <PlProgressBar progress={progressPercent} />
          </div>
          <p className={styles["dashboard-continue__progress-label"]}>
            {progressPercent}% complete
          </p>
        </div>
      </div>
      <PlButton variant="primary" size="md" type="button">
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--spacing-sm)",
          }}
        >
          Resume
          <ArrowRight size={16} aria-hidden strokeWidth={2} />
        </span>
      </PlButton>
    </section>
  );
}
