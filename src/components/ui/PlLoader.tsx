import styles from "./PlLoader.module.css";

export function PlLoader() {
  return (
    <div
      className={styles["pl-loader"]}
      role="status"
      aria-label="Loading"
    />
  );
}
