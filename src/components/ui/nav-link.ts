import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("nav-link")
export class NavLink extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  @property({ type: String })
  to = "";

  render() {
    return html`
      <a href=${this.to}>
        <slot></slot>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "nav-link": NavLink;
  }
}
