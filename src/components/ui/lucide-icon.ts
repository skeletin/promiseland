import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { createElement } from "lucide";
import * as icons from "lucide"; // or import selectively
import type { IconNode } from "lucide";

type LucideIconProps = {
  name: string;
  size: number;
  color: string;
};

@customElement("lucide-icon")
export class LucideIcon extends LitElement {
  @property({ type: String })
  name: LucideIconProps["name"] = "";

  @property({ type: Number })
  size: LucideIconProps["size"] = 24;

  @property({ type: String })
  color: LucideIconProps["color"] = "currentColor";

  static styles = [
    css`
      :host {
        display: inline-flex;
        align-items: center;
      }
      svg {
        display: block;
      }
    `,
  ];

  render() {
    // Convert kebab-case to PascalCase: "arrow-right" → "ArrowRight"
    const key = this.name
      ?.split("-")
      .map((s) => s[0].toUpperCase() + s.slice(1))
      .join("");

    const iconMap = icons as unknown as Record<string, IconNode>;
    const icon = iconMap[key ?? ""];
    if (!icon) return html``;

    const el = createElement(icon);
    el.setAttribute("width", this.size.toString());
    el.setAttribute("height", this.size.toString());
    el.setAttribute("color", this.color);

    return html`${unsafeHTML(el.outerHTML)}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lucide-icon": LucideIcon;
  }
}
