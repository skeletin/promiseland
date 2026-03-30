import { Link, useNavigate } from "react-router-dom";
import { PlButton } from "../../ui/PlButton";
import styles from "./Landing.module.css";

export function LandingNav() {
  const navigate = useNavigate();

  return (
    <header className={styles["landing__nav"]}>
      <Link className={styles["landing__logo"]} to="/">
        PromiseLand
      </Link>
      <div className={styles["landing__nav-actions"]}>
        <Link className={styles["landing__ghost-link"]} to="/auth?mode=login">
          Log in
        </Link>
        <PlButton
          variant="primary"
          size="md"
          onClick={() => navigate("/auth?mode=register")}
        >
          Start learning
        </PlButton>
      </div>
    </header>
  );
}
