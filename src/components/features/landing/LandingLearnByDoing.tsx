import { BookOpen, SquareTerminal, Zap } from "lucide-react";
import styles from "./Landing.module.css";

export function LandingLearnByDoing() {
  return (
    <section aria-labelledby="learn-heading">
      <h2 className={styles["landing__section-title"]} id="learn-heading">
        Learn by doing
      </h2>
      <p className={styles["landing__section-lede"]}>
        Self-paced doesn’t mean alone — get guidance, run real code, and see
        results instantly.
      </p>
      <div className={styles["landing__learn-grid"]}>
        <article className={styles["landing__learn-card"]}>
          <BookOpen
            aria-hidden
            className={styles["landing__learn-icon"]}
            size={24}
            strokeWidth={2}
          />
          <h3 className={styles["landing__learn-title"]}>Guided lessons</h3>
          <p className={styles["landing__learn-body"]}>
            Short explanations with checkpoints so you always know what to try
            next.
          </p>
        </article>
        <article className={styles["landing__learn-card"]}>
          <SquareTerminal
            aria-hidden
            className={styles["landing__learn-icon"]}
            size={24}
            strokeWidth={2}
          />
          <h3 className={styles["landing__learn-title"]}>In-browser editor</h3>
          <p className={styles["landing__learn-body"]}>
            Write and run code without installing tooling — focus on concepts,
            not setup.
          </p>
        </article>
        <article className={styles["landing__learn-card"]}>
          <Zap
            aria-hidden
            className={styles["landing__learn-icon"]}
            size={24}
            strokeWidth={2}
          />
          <h3 className={styles["landing__learn-title"]}>Instant feedback</h3>
          <p className={styles["landing__learn-body"]}>
            Tests and output panels help you learn faster with tight feedback
            loops.
          </p>
        </article>
      </div>
    </section>
  );
}
