import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

export function LandingFooter() {
  return (
    <footer className={styles["landing__footer"]}>
      <div className={styles["landing__footer-cols"]}>
        <div className={styles["landing__footer-col"]}>
          <p className={styles["landing__footer-heading"]}>Product</p>
          <a className={styles["landing__footer-link"]} href="#">
            Learning path
          </a>
          <a className={styles["landing__footer-link"]} href="#">
            Challenges
          </a>
          <a className={styles["landing__footer-link"]} href="#">
            Progress
          </a>
        </div>
        <div className={styles["landing__footer-col"]}>
          <p className={styles["landing__footer-heading"]}>Account</p>
          <Link className={styles["landing__footer-link"]} to="/auth?mode=login">
            Sign in
          </Link>
          <Link
            className={styles["landing__footer-link"]}
            to="/auth?mode=register"
          >
            Register
          </Link>
          <a className={styles["landing__footer-link"]} href="#">
            Settings
          </a>
        </div>
        <div className={styles["landing__footer-col"]}>
          <p className={styles["landing__footer-heading"]}>Resources</p>
          <a className={styles["landing__footer-link"]} href="#">
            Docs
          </a>
          <a className={styles["landing__footer-link"]} href="#">
            Blog
          </a>
          <a className={styles["landing__footer-link"]} href="#">
            Support
          </a>
        </div>
        <div className={styles["landing__footer-col"]}>
          <p className={styles["landing__footer-heading"]}>Legal</p>
          <a className={styles["landing__footer-link"]} href="#">
            Privacy
          </a>
          <a className={styles["landing__footer-link"]} href="#">
            Terms
          </a>
          <a className={styles["landing__footer-link"]} href="#">
            Cookies
          </a>
        </div>
      </div>
      <div className={styles["landing__footer-bottom"]}>
        <span>© {new Date().getFullYear()} PromiseLand</span>
        <span>v0.1</span>
      </div>
    </footer>
  );
}
