import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

export interface PlButtonProps {
  variant: "primary" | "secondary" | "ghost" | "danger";
  size: "small" | "medium" | "large";
  disabled: boolean;
}

@customElement("pl-button")
export class PlButton extends LitElement {
  @property({ type: String })
  variant: PlButtonProps["variant"] = "ghost";

  @property({ type: String, reflect: true })
  size: PlButtonProps["size"] = "medium";

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  static styles = [
    css`
      :host {
        display: inline-block;
      }

      .btn {
        align-items: center;
        border: none;
        border-radius: var(--radius-xs);
        cursor: pointer;
        display: flex;
        font-size: var(--font-size-code);
        font-weight: var(--font-weight-semibold);
        font-family: var(--font-family-body);
        justify-content: center;
        height: 2.5rem; /* 40px */
        padding: 0 1.25rem; /* 0 20px */
      }

      .btn--ghost {
        background: transparent;
        color: var(--color-text-secondary);
      }

      .btn--primary {
        background: var(--color-primary);
        color: #ffffff;
        box-shadow: 0 0 20px #6c63ff59;
      }

      .btn--secondary {
        background: var(--color-bg-elevated);
        box-shadow: inset 0 0 0 1px var(--color-border);
        color: var(--color-text-primary);
      }

      .btn--danger {
        background: #ff5c5c22;
        box-shadow: inset 0 0 0 1px var(--color-accent-error);
        color: var(--color-accent-error);
      }

      :host([size="large"]) .btn {
        height: 2.75rem; /* 44px */
        padding: 0 1.5rem; /* 0 24px */
      }

      :host([size="small"]) .btn {
        height: 2.25rem; /* 36px */
        padding: 0 1rem; /* 0 16px */
      }

      :host([disabled]) .btn {
        background: var(--color-bg-elevated);
        color: var(--color-text-muted);
        cursor: not-allowed;
        box-shadow: none;
      }
    `,
  ];

  render() {
    return html`
      <button ?disabled=${this.disabled} class="btn btn--${this.variant}">
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pl-button": PlButton;
  }
}
