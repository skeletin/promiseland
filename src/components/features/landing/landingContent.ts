import {
  AlertCircle,
  Globe,
  Link2,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const HERO_CODE_SAMPLE = `const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('data'), 1000);
  });
};`;

export type PracticeFocusItem = {
  label: string;
  hint: string;
  Icon: LucideIcon;
};

export const PRACTICE_FOCUS: readonly PracticeFocusItem[] = [
  {
    label: "Promises",
    hint: "Creation & chaining",
    Icon: Link2,
  },
  {
    label: "async/await",
    hint: "Control flow",
    Icon: Workflow,
  },
  {
    label: "Error handling",
    hint: "Rejections & recovery",
    Icon: AlertCircle,
  },
  {
    label: "Fetch + APIs",
    hint: "Network & JSON",
    Icon: Globe,
  },
];

export const CURRICULUM_CHIPS: readonly [string, string, string][] = [
  ["Promise basics", "async/await", "Error handling"],
  ["Fetch + APIs", "Event loop", "Microtasks"],
];
