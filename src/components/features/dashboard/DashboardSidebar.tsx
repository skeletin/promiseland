import clsx from "clsx";
import { Code } from "lucide-react";
import { NavLink } from "react-router-dom";
import { NavIcon } from "../../common/navIcons";
import navStyles from "../../common/PlNavItem.module.css";
import styles from "./Dashboard.module.css";

const NAV_ROUTER = {
  to: "/learn",
  label: "Dashboard",
  icon: "layout-dashboard",
  end: true,
} as const;

const NAV_PLACEHOLDER = [
  { label: "Learning Path", icon: "book-open" },
  { label: "Challenges", icon: "swords" },
  { label: "Leaderboard", icon: "trophy" },
  { label: "Profile", icon: "user" },
] as const;

export function DashboardSidebar() {
  return (
    <aside className={styles["dashboard__sidebar"]} aria-label="Primary">
      <div className={styles["dashboard__logo"]}>
        <Code
          aria-hidden
          className={styles["dashboard__logo-icon"]}
          size={24}
          strokeWidth={2}
        />
        <span className={styles["dashboard__logo-text"]}>PromiseLand</span>
      </div>
      <nav className={styles["dashboard__nav"]}>
        <NavLink
          to={NAV_ROUTER.to}
          end={NAV_ROUTER.end}
          className={({ isActive }) =>
            clsx(
              navStyles["pl-nav-item"],
              isActive && navStyles["pl-nav-item--active"],
            )
          }
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <span className={navStyles["pl-nav-item__icon"]}>
            <NavIcon name={NAV_ROUTER.icon} size={18} />
          </span>
          <span className={navStyles["pl-nav-item__label"]}>
            {NAV_ROUTER.label}
          </span>
        </NavLink>
        {NAV_PLACEHOLDER.map(({ label, icon }) => (
          <div
            key={label}
            className={navStyles["pl-nav-item"]}
            aria-disabled="true"
          >
            <span className={navStyles["pl-nav-item__icon"]}>
              <NavIcon name={icon} size={18} />
            </span>
            <span className={navStyles["pl-nav-item__label"]}>{label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
