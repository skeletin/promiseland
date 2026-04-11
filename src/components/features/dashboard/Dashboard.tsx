import styles from "./Dashboard.module.css";
import { DashboardContinue } from "./DashboardContinue";
import { DashboardRecommended } from "./DashboardRecommended";
import { DashboardStats } from "./DashboardStats";
import { DashboardWelcome } from "./DashboardWelcome";

function DashboardRoot() {
  return (
    <div className={styles["dashboard-page"]}>
      <Dashboard.Welcome />
      <Dashboard.Stats />
      <Dashboard.Continue />
      <Dashboard.Recommended />
    </div>
  );
}

const Dashboard = Object.assign(DashboardRoot, {
  Welcome: DashboardWelcome,
  Stats: DashboardStats,
  Continue: DashboardContinue,
  Recommended: DashboardRecommended,
});

export default Dashboard;
