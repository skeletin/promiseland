import { Check, Lock } from "lucide-react";
import clsx from "clsx";
import { PlBadge } from "../../ui/PlBadge";
import {
  getLessonMetaLine,
  type LearnLesson,
} from "./learnPathContent";
import styles from "./Learn.module.css";

function LessonLeading({ lesson }: { lesson: LearnLesson }) {
  if (lesson.status === "completed") {
    return (
      <div
        className={clsx(styles["learn-lesson__lead"], styles["learn-lesson__lead--done"])}
        aria-hidden
      >
        <Check size={20} strokeWidth={2} className={styles["learn-lesson__check"]} />
      </div>
    );
  }
  if (lesson.status === "in_progress") {
    return (
      <div
        className={clsx(styles["learn-lesson__lead"], styles["learn-lesson__lead--active"])}
        aria-hidden
      >
        <span className={styles["learn-lesson__fraction"]}>
          {lesson.challengesCompleted}/{lesson.challengesTotal}
        </span>
      </div>
    );
  }
  return (
    <div
      className={clsx(styles["learn-lesson__lead"], styles["learn-lesson__lead--locked"])}
      aria-hidden
    >
      <Lock size={18} strokeWidth={2} className={styles["learn-lesson__lock"]} />
    </div>
  );
}

export function LearnLessonList({ lessons }: { lessons: LearnLesson[] }) {
  return (
    <ul className={styles["learn-lesson-list"]}>
      {lessons.map((lesson) => (
        <li
          key={lesson.id}
          className={clsx(
            styles["learn-lesson"],
            lesson.status === "completed" && styles["learn-lesson--completed"],
            lesson.status === "in_progress" && styles["learn-lesson--in-progress"],
            lesson.status === "locked" && styles["learn-lesson--locked"],
          )}
        >
          <LessonLeading lesson={lesson} />
          <div className={styles["learn-lesson__info"]}>
            <p className={styles["learn-lesson__title"]}>{lesson.title}</p>
            <p
              className={clsx(
                styles["learn-lesson__meta"],
                lesson.status === "completed" && styles["learn-lesson__meta--success"],
                lesson.status === "in_progress" && styles["learn-lesson__meta--primary"],
                lesson.status === "locked" && styles["learn-lesson__meta--muted"],
              )}
            >
              {getLessonMetaLine(lesson)}
            </p>
          </div>
          <div className={styles["learn-lesson__badge"]}>
            <PlBadge variant={lesson.difficulty}>{lesson.difficulty}</PlBadge>
          </div>
        </li>
      ))}
    </ul>
  );
}
