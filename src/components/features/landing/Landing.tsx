import styles from "./Landing.module.css";
import { LandingCurriculum } from "./LandingCurriculum";
import { LandingFinalCta } from "./LandingFinalCta";
import { LandingFooter } from "./LandingFooter";
import { LandingHero } from "./LandingHero";
import { LandingLearnByDoing } from "./LandingLearnByDoing";
import { LandingNav } from "./LandingNav";
import { LandingPracticeFocus } from "./LandingPracticeFocus";
import { LandingWhy } from "./LandingWhy";

function LandingRoot() {
  return (
    <div className={styles.landing}>
      <div className={styles["landing__inner"]}>
        <Landing.Nav />
        <main className={styles["landing__main"]}>
          <Landing.Hero />
          <Landing.PracticeFocus />
          <Landing.Why />
          <Landing.Curriculum />
          <Landing.LearnByDoing />
          <Landing.FinalCta />
          <Landing.Footer />
        </main>
      </div>
    </div>
  );
}

const Landing = Object.assign(LandingRoot, {
  Nav: LandingNav,
  Hero: LandingHero,
  PracticeFocus: LandingPracticeFocus,
  Why: LandingWhy,
  Curriculum: LandingCurriculum,
  LearnByDoing: LandingLearnByDoing,
  FinalCta: LandingFinalCta,
  Footer: LandingFooter,
});

export default Landing;
