import { useState } from "react";
import clsx from "clsx";
import styles from "./PlToggle.module.css";

export type PlToggleProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  /** Accessible name (falls back to "Toggle" if empty). */
  label?: string;
};

export function PlToggle({
  checked: checkedProp,
  defaultChecked = false,
  onCheckedChange,
  label = "",
}: PlToggleProps) {
  const [internal, setInternal] = useState(defaultChecked);
  const controlled = checkedProp !== undefined;
  const checked = controlled ? checkedProp : internal;

  const accessibleLabel = label.trim() || "Toggle";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={accessibleLabel}
      className={clsx(
        styles["pl-toggle"],
        checked && styles["pl-toggle--checked"],
      )}
      onClick={() => {
        const next = !checked;
        onCheckedChange?.(next);
        if (!controlled) setInternal(next);
      }}
    >
      <span className={styles["pl-toggle__track"]} aria-hidden />
      <span className={styles["pl-toggle__thumb"]} aria-hidden />
    </button>
  );
}
