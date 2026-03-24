import clsx from "clsx";
import styles from "./PlAvatar.module.css";

export type PlAvatarProps = {
  size?: "sm" | "md" | "lg";
  initials?: string;
};

export function PlAvatar({ size = "md", initials = "" }: PlAvatarProps) {
  return (
    <div
      className={clsx(styles["pl-avatar"], styles[`pl-avatar--${size}`])}
    >
      {initials}
    </div>
  );
}
