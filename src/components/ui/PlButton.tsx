import type { MouseEvent, ReactNode } from "react";
import clsx from "clsx";
import styles from "./PlButton.module.css";

export interface PlButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md";
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  key?: React.Key | null;
}

export function PlButton({
  variant = "ghost",
  size = "sm",
  disabled = false,
  onClick,
  children,
  type = "button",
  key = null,
}: PlButtonProps) {
  return (
    <button
      key={key}
      type={type}
      className={clsx(
        styles["pl-btn"],
        styles[`pl-btn--${size}`],
        styles[`pl-btn--${variant}`],
        disabled && styles["pl-btn--disabled"],
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
