import type { ReactNode } from "react";
import styles from "./PlCodeBlock.module.css";

export type PlCodeBlockProps = {
  children: ReactNode;
};

export function PlCodeBlock({ children }: PlCodeBlockProps) {
  return (
    <pre className={styles["pl-code-block"]}>
      <code className={styles["pl-code-block__code"]}>{children}</code>
    </pre>
  );
}
