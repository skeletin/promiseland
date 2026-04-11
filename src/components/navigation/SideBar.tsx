import { Code } from "lucide-react";
import styles from "./SideBar.module.css";
import { PlNavItem, type PlNavItemProps } from "../common/PlNavItem";
import { NavLink, useLocation } from "react-router-dom";

type Links = (PlNavItemProps & { path: string })[];

const links: Links = [
  {
    icon: "layout-dashboard",
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: "book-open",
    label: "Learning Path",
    path: "/learn",
  },
  {
    icon: "swords",
    label: "Challenges",
    path: "/challenges",
  },
  {
    icon: "user",
    label: "Profile",
    path: "/profile",
  },
];

export default function SideBar() {
  const { pathname: currentPath } = useLocation();
  return (
    <aside className={styles.sidebar} aria-label="Primary">
      <div className={styles["sidebar__logo"]}>
        <Code
          aria-hidden
          className={styles["sidebar__logo-icon"]}
          size={24}
          strokeWidth={2}
        />
        <span className={styles["sidebar__logo-text"]}>PromiseLand</span>
      </div>
      <nav className={styles["sidebar__nav"]}>
        {links.map(({ icon, label, path }) => (
          <NavLink style={{ textDecoration: "none" }} to={path}>
            <PlNavItem
              key={label}
              active={currentPath === path}
              label={label}
              icon={icon}
            />
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
