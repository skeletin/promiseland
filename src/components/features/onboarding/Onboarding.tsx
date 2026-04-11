import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "@/network/api";
import styles from "./Onboarding.module.css";
import clsx from "clsx";
import { useMutation } from "@tanstack/react-query";

type ExperienceChoice = Exclude<ExperienceLevel, "unknown">;

const LEVEL_CHOICES: Array<{
  value: ExperienceChoice;
  label: string;
}> = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

export default function Onboarding() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<ExperienceChoice | null>(null);
  const { mutate, isError, isPending } = useMutation({
    mutationFn: api.userProfile.update,
    onSuccess: () => navigate("/dashboard", { replace: true }),
  });

  return (
    <main className={styles["onboarding-feature"]}>
      <section className={styles["onboarding-card"]} aria-label="Onboarding">
        <p className={styles["onboarding-kicker"]}>After sign up</p>
        <h1 className={styles["onboarding-title"]}>
          Your experience with Promises
        </h1>
        <p className={styles["onboarding-subtitle"]}>
          JavaScript Promises — we use this to personalize your path. You can
          change it later in settings.
        </p>

        <p className={styles["onboarding-label"]}>Experience level</p>

        <div className={styles["experience-row"]} role="group">
          {LEVEL_CHOICES.map((opt) => {
            const isSelected = selected === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                className={clsx(
                  styles["experience-option"],
                  isSelected && styles["experience-option--selected"],
                )}
                aria-pressed={isSelected}
                onClick={() => setSelected(opt.value)}
                disabled={isPending}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
        <p className={styles["onboarding-helper"]}>
          Not sure? Continue and pick your level later in settings.
        </p>

        {isError ? (
          <p className={styles["onboarding-error"]}>Something went wrong</p>
        ) : null}

        <button
          type="button"
          className={styles["onboarding-continue"]}
          onClick={() =>
            mutate({
              experienceLevel: selected ?? "unknown",
            })
          }
          disabled={isPending}
        >
          {isPending ? "Saving..." : "Continue"}
        </button>
      </section>
    </main>
  );
}
