import clsx from "clsx";
import { NavIcon } from "./navIcons";
import styles from "./PlNavItem.module.css";

export type PlNavItemProps = {
  label?: string;
  icon?: string;
  active?: boolean;
};

export function PlNavItem({
  label = "Dashboard",
  icon = "layout-dashboard",
  active = false,
}: PlNavItemProps) {
  return (
    <button
      type="button"
      className={clsx(
        styles["pl-nav-item"],
        active && styles["pl-nav-item--active"],
      )}
    >
      <span className={styles["pl-nav-item__icon"]}>
        <NavIcon name={icon} size={18} />
      </span>
      <span className={styles["pl-nav-item__label"]}>{label}</span>
    </button>
  );
}
