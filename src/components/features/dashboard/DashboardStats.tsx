import clsx from "clsx";
import { DASHBOARD_STATS } from "./dashboardContent";
import styles from "./Dashboard.module.css";
import useAuth from "@/hooks/useAuth";

type DashboardStatCardProps = {
  label: string;
  valueTone: string;
};

export function DashboardStats() {
  return (
    <section className={styles["dashboard-stats"]} aria-label="Your stats">
      {DASHBOARD_STATS.map(({ label, valueTone = "default" }) => (
        <DashboardStatCard key={label} label={label} valueTone={valueTone} />
      ))}
    </section>
  );
}

function DashboardStatCard({ label, valueTone }: DashboardStatCardProps) {
  const { user } = useAuth();
  const xp = user?.userProfile.xp ?? 0;
  const dayStreak = user?.userProfile.dayStreak ?? 0;

  const values: Record<string, number | string> = {
    "Challenges Done": "12/36",
    "Total XP": xp,
    "Current Streak": dayStreak + " days",
  };

  return (
    <article key={label} className={styles["dashboard-stat"]}>
      <p className={styles["dashboard-stat__label"]}>{label}</p>
      <p
        className={clsx(
          styles["dashboard-stat__value"],
          styles[`dashboard-stat__value--${valueTone}`],
        )}
      >
        {values[label]}
      </p>
    </article>
  );
}
