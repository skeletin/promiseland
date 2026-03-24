import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export type NavLinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
};

export function NavLink({ to, children, className }: NavLinkProps) {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
