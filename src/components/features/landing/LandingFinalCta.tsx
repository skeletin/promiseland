import { useNavigate } from "react-router-dom";
import { PlButton } from "../../ui/PlButton";
import styles from "./Landing.module.css";

export function LandingFinalCta() {
  const navigate = useNavigate();

  return (
    <section className={styles["landing__cta-band"]} aria-label="Sign up">
      <div className={styles["landing__cta-copy"]}>
        <p className={styles["landing__cta-title"]}>
          Ready to level up your async skills?
        </p>
        <p className={styles["landing__cta-sub"]}>
          Create a free account and start learning in minutes.
        </p>
      </div>
      <PlButton
        variant="primary"
        size="md"
        onClick={() => navigate("/auth?mode=register")}
      >
        Get started
      </PlButton>
    </section>
  );
}
