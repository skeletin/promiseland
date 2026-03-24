import type { ReactNode } from "react";
import styles from "./PlTooltip.module.css";

export type PlTooltipProps = {
  children: ReactNode;
};

export function PlTooltip({ children }: PlTooltipProps) {
  return <span className={styles["pl-tooltip"]}>{children}</span>;
}
