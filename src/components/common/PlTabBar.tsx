import clsx from "clsx";
import styles from "./PlTabBar.module.css";

export type PlTabBarProps = {
  tabs?: string[];
  activeIndex?: number;
  onSelectTab: (index: number) => void;
};

export function PlTabBar({
  tabs = ["Instructions", "Hints", "Solution"],
  activeIndex = 0,
  onSelectTab,
}: PlTabBarProps) {
  const active = Math.min(Math.max(0, activeIndex), tabs.length - 1);

  return (
    <nav className={styles["pl-tab-bar"]} aria-label="Tabs">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          type="button"
          className={clsx(
            styles["pl-tab-bar__tab"],
            index === active && styles["pl-tab-bar__tab--active"],
          )}
          aria-selected={index === active}
          onClick={() => onSelectTab?.(index)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
