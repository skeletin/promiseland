import { CURRICULUM_CHIPS } from "./landingContent";
import styles from "./Landing.module.css";

export function LandingCurriculum() {
  return (
    <section aria-labelledby="curriculum-heading" id="curriculum">
      <h2
        className={styles["landing__section-title"]}
        id="curriculum-heading"
      >
        Explore the curriculum
      </h2>
      <p className={styles["landing__section-lede"]}>
        Start with foundations and level up with challenges that mirror
        real-world async code.
      </p>
      <div className={styles["landing__chip-rows"]}>
        {CURRICULUM_CHIPS.map((row, rowIndex) => (
          <div key={rowIndex} className={styles["landing__chip-row"]}>
            {row.map((label) => (
              <span key={label} className={styles["landing__chip"]}>
                {label}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
