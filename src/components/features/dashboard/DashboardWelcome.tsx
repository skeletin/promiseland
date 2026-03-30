import { Flame } from "lucide-react";
import useAuth from "../../../hooks/useAuth";
import { PlLevelPill } from "../../ui/PlLevelPill";
import { getTimeGreeting } from "./dashboardContent";
import styles from "./Dashboard.module.css";

export function DashboardWelcome() {
  const { user } = useAuth();
  const name = user?.username?.trim() || "there";

  return (
    <header className={styles["dashboard-welcome"]}>
      <div className={styles["dashboard-welcome__left"]}>
        <h1 className={styles["dashboard-welcome__title"]}>
          {getTimeGreeting()}, {name}
        </h1>
        <p className={styles["dashboard-welcome__sub"]}>
          Ready to continue your Promise mastery?
        </p>
      </div>
      <div className={styles["dashboard-welcome__right"]}>
        <div className={styles["dashboard-welcome__streak"]}>
          <Flame size={16} aria-hidden strokeWidth={2} />
          <span>7 day streak</span>
        </div>
        <PlLevelPill level={8} xp={1240} />
      </div>
    </header>
  );
}
