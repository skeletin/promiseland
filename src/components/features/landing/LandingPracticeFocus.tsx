import { PRACTICE_FOCUS } from "./landingContent";
import styles from "./Landing.module.css";

export function LandingPracticeFocus() {
  return (
    <section
      className={styles["landing__practice"]}
      aria-label="Topics covered"
    >
      <p className={styles["landing__section-kicker"]}>
        Where learners practice
      </p>
      <div className={styles["landing__practice-panel"]}>
        <ul className={styles["landing__practice-grid"]}>
          {PRACTICE_FOCUS.map(({ label, hint, Icon }) => (
            <li key={label} className={styles["landing__practice-cell"]}>
              <div
                className={styles["landing__practice-icon-ring"]}
                aria-hidden
              >
                <Icon
                  className={styles["landing__practice-icon"]}
                  size={22}
                  strokeWidth={2}
                />
              </div>
              <span className={styles["landing__practice-label"]}>{label}</span>
              <span className={styles["landing__practice-hint"]}>{hint}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
