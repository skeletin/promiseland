import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

type PlAvatarProps = {
  size: "small" | "medium" | "large";
  initials: string;
};

@customElement("pl-avatar")
export class PlAvatar extends LitElement {
  @property({ type: String, reflect: true })
  size: PlAvatarProps["size"] = "medium";

  @property({ type: String })
  initials: PlAvatarProps["initials"] = "";

  static styles = [
    css`
      :host {
        display: block;
      }

      .avatar {
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--color-primary);
        border-radius: var(--radius-full);
        color: #ffffff;
        font-weight: var(--font-semi-bold);
        font-family: var(--font-family-inter);
      }

      :host([size="small"]) .avatar {
        font-size: 0.75rem; /* 12px */
        height: 2rem; /* 32px */
        width: 2rem;
      }

      :host([size="medium"]) .avatar {
        font-size: 0.875rem; /* 14px */
        height: 2.5rem; /* 40px */
        width: 2.5rem;
      }

      :host([size="large"]) .avatar {
        font-size: 1.25rem; /* 20px */
        height: 3.5rem; /* 50px */
        width: 3.5rem;
      }
    `,
  ];

  render() {
    return html`<div class="avatar">${this.initials}</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pl-avatar": PlAvatar;
  }
}
