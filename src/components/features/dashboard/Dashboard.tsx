import styles from "./Dashboard.module.css";
import { DashboardContinue } from "./DashboardContinue";
import { DashboardRecommended } from "./DashboardRecommended";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardStats } from "./DashboardStats";
import { DashboardWelcome } from "./DashboardWelcome";

function DashboardRoot() {
  return (
    <div className={styles.dashboard}>
      <Dashboard.Sidebar />
      <div className={styles["dashboard__main"]}>
        <Dashboard.Welcome />
        <Dashboard.Stats />
        <Dashboard.Continue />
        <Dashboard.Recommended />
      </div>
    </div>
  );
}

const Dashboard = Object.assign(DashboardRoot, {
  Sidebar: DashboardSidebar,
  Welcome: DashboardWelcome,
  Stats: DashboardStats,
  Continue: DashboardContinue,
  Recommended: DashboardRecommended,
});

export default Dashboard;
