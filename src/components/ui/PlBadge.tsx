import type { ReactNode } from "react";
import clsx from "clsx";
import { Lock } from "lucide-react";
import styles from "./PlBadge.module.css";
import { toBemModifier } from "../../utils/bem";

export type PlBadgeVariant =
  | "not started"
  | "beginner"
  | "intermediate"
  | "advanced"
  | "in progress"
  | "completed"
  | "locked"
  | "xp";

export interface PlBadgeProps {
  variant?: PlBadgeVariant;
  xpAmount?: number | null;
  children?: ReactNode;
}

export function PlBadge({
  variant = "not started",
  xpAmount = null,
  children,
}: PlBadgeProps) {
  const mod = toBemModifier(variant);
  const variantMod = `pl-badge--${mod}` as keyof typeof styles;
  const text =
    children ??
    (variant === "xp" && xpAmount != null ? `+${xpAmount} XP` : variant);

  return (
    <span className={clsx(styles["pl-badge"], styles[variantMod])}>
      {variant === "locked" ? <Lock size={12} aria-hidden /> : null}
      {text}
    </span>
  );
}
