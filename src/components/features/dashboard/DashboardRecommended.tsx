import { PlChallengeCard } from "../../common/PlChallengeCard";
import { DASHBOARD_RECOMMENDED } from "./dashboardContent";
import styles from "./Dashboard.module.css";

export function DashboardRecommended() {
  return (
    <section
      className={styles["dashboard-recommended"]}
      aria-labelledby="dashboard-rec-heading"
    >
      <h2 className={styles["dashboard-recommended__title"]} id="dashboard-rec-heading">
        Recommended Next
      </h2>
      <div className={styles["dashboard-recommended__grid"]}>
        {DASHBOARD_RECOMMENDED.map((props, i) => (
          <div
            key={`${props.title}-${i}`}
            className={styles["dashboard-recommended__card-wrap"]}
          >
            <PlChallengeCard {...props} />
          </div>
        ))}
      </div>
    </section>
  );
}
