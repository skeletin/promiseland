import styles from "./Landing.module.css";

export function LandingWhy() {
  return (
    <section aria-labelledby="why-heading">
      <h2 className={styles["landing__section-title"]} id="why-heading">
        Why PromiseLand
      </h2>
      <p className={styles["landing__section-lede"]}>
        Build skills that stand out — with guided practice, instant feedback,
        and a path that grows with you.
      </p>
      <div className={styles["landing__card-grid"]}>
        <article className={styles["landing__card"]}>
          <h3 className={styles["landing__card-title"]}>Hands-on challenges</h3>
          <p className={styles["landing__card-body"]}>
            Solve real promise puzzles with instant feedback and clear test
            output.
          </p>
        </article>
        <article className={styles["landing__card"]}>
          <h3 className={styles["landing__card-title"]}>Personalized path</h3>
          <p className={styles["landing__card-body"]}>
            We adapt difficulty based on your experience so you stay in the flow.
          </p>
        </article>
        <article className={styles["landing__card"]}>
          <h3 className={styles["landing__card-title"]}>Built for focus</h3>
          <p className={styles["landing__card-body"]}>
            A calm, dark UI with readable typography and minimal distractions.
          </p>
        </article>
      </div>
    </section>
  );
}
