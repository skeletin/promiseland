import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import {
  BookOpen,
  LayoutDashboard,
  Swords,
  Trophy,
  User,
} from "lucide-react";

const icons: Record<string, ComponentType<LucideProps>> = {
  "layout-dashboard": LayoutDashboard,
  "book-open": BookOpen,
  swords: Swords,
  trophy: Trophy,
  user: User,
};

export function NavIcon({ name, size = 18 }: { name: string; size?: number }) {
  const Cmp = icons[name] ?? LayoutDashboard;
  return <Cmp size={size} aria-hidden />;
}
