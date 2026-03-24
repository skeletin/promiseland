import { NavLink } from "./NavLink";
import styles from "./NavigationBar.module.css";

const links = [
  { to: "/", title: "Home" },
  { to: "/about", title: "About" },
  { to: "/profile", title: "Profile" },
  { to: "/contact", title: "Contact" },
] as const;

export function NavigationBar() {
  return (
    <nav className={styles["pl-navigation-bar"]}>
      {links.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={styles["pl-navigation-bar__link"]}
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}
