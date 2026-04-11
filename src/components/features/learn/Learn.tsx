import {
  getLearnPathChallengeSummary,
  LEARN_LESSONS,
} from "./learnPathContent";
import { LearnLessonList } from "./LearnLessonList";
import { LearnPathHeader } from "./LearnPathHeader";
import styles from "./Learn.module.css";

export default function Learn() {
  const { completedChallenges, totalChallenges, percent } =
    getLearnPathChallengeSummary(LEARN_LESSONS);

  return (
    <div className={styles["learn-page"]}>
      <LearnPathHeader
        completedChallenges={completedChallenges}
        totalChallenges={totalChallenges}
        percent={percent}
      />
      <LearnLessonList lessons={LEARN_LESSONS} />
    </div>
  );
}
