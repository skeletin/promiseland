import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "../ui/nav-link";

type NavLink = {
  to: string;
  title: string;
};

@customElement("navigation-bar")
export class NavigationBar extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      nav {
        display: flex;
        padding: 4px;
        width: 100%;
        border: 1px solid black;
        gap: 1rem;
      }
    `,
  ];

  _links: NavLink[] = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/about",
      title: "About",
    },
    {
      to: "/profile",
      title: "Profile",
    },
    {
      to: "/Contact",
      title: "Contact",
    },
  ];

  render() {
    return html`
      <nav>
        ${this._links.map(
          (item) => html`<nav-link to=${item.to}> ${item.title} </nav-link>`,
        )}
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "navigation-bar": NavigationBar;
  }
}
