import clsx from "clsx";
import { DASHBOARD_STATS } from "./dashboardContent";
import styles from "./Dashboard.module.css";

export function DashboardStats() {
  return (
    <section className={styles["dashboard-stats"]} aria-label="Your stats">
      {DASHBOARD_STATS.map(({ label, value, valueTone = "default" }) => (
        <article key={label} className={styles["dashboard-stat"]}>
          <p className={styles["dashboard-stat__label"]}>{label}</p>
          <p
            className={clsx(
              styles["dashboard-stat__value"],
              styles[`dashboard-stat__value--${valueTone}`],
            )}
          >
            {value}
          </p>
        </article>
      ))}
    </section>
  );
}
