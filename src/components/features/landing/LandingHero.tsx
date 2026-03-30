import { useNavigate } from "react-router-dom";
import { PlButton } from "../../ui/PlButton";
import { PlCodeBlock } from "../../ui/PlCodeBlock";
import { HERO_CODE_SAMPLE } from "./landingContent";
import styles from "./Landing.module.css";

export function LandingHero() {
  const navigate = useNavigate();

  return (
    <section className={styles["landing__hero-band"]} aria-label="Intro">
      <div className={styles["landing__hero-left"]}>
        <span className={styles["landing__pill"]}>Interactive async training</span>
        <h1 className={styles["landing__hero-title"]}>
          <span>Master </span>
          <span className={styles["landing__hero-title-accent"]}>async</span>
          <span> JavaScript</span>
        </h1>
        <p className={styles["landing__hero-sub"]}>
          Promises, async/await, and real-world patterns—built for focus.
        </p>
        <div className={styles["landing__hero-ctas"]}>
          <PlButton
            variant="primary"
            size="md"
            onClick={() => navigate("/auth?mode=register")}
          >
            Start learning
          </PlButton>
          <a className={styles["landing__ghost-link"]} href="#curriculum">
            Explore curriculum
          </a>
        </div>
        <p className={styles["landing__hero-meta"]}>
          Self-paced · In-browser editor · Instant feedback
        </p>
      </div>
      <div className={styles["landing__hero-right"]}>
        <div className={styles["landing__hero-code-wrap"]}>
          <div className={styles["landing__hero-code-float"]}>
            <PlCodeBlock>{HERO_CODE_SAMPLE}</PlCodeBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
