import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./lucide-icon";

export interface PlBadgeProps {
  variant:
    | "default"
    | "beginner"
    | "intermediate"
    | "advanced"
    | "in-progress"
    | "completed"
    | "locked"
    | "xp";
}

@customElement("pl-badge")
export class PlBadge extends LitElement {
  @property({ type: String })
  variant: PlBadgeProps["variant"] = "default";

  static styles = [
    css`
      :host {
        display: inline-block;
      }

      .badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 1.625rem; /* 26px */
        padding: 0 0.625rem; /* 0 10px */
        border-radius: var(--radius-full);
        font-family: var(--font-family-body);
        font-size: var(--font-size-small);
        font-weight: var(--font-weight-semibold);
      }

      :host([variant="default"]) .badge {
        background: transparent;
        color: var(--color-text-secondary);
      }

      :host([variant="beginner"]) .badge {
        background: #00d9c022;
        color: var(--color-accent);
      }

      :host([variant="intermediate"]) .badge {
        background: #f5a62322;
        color: var(--color-accent-warn);
      }

      :host([variant="advanced"]) .badge {
        background: #ff5c5c22;
        color: var(--color-accent-error);
      }

      :host([variant="not started"]) .badge {
        background: var(--color-bg-elevated);
        color: var(--color-text-secondary);
      }

      :host([variant="in progress"]) .badge {
        background: #6c63ff22;
        color: var(--color-primary);
      }

      :host([variant="completed"]) .badge {
        background: #4ade8022;
        color: var(--color-accent-succes);
      }

      :host([variant="xp"]) .badge {
        background: #6c63ff22;
        color: var(--color-primary);
        box-shadow: 0 0 16px 0.35px #6c63ff59;
      }

      :host([variant="locked"]) .badge {
        gap: 4px;
        background: var(--color-bg-elevated);
        color: var(--color-text-muted);
      }
    `,
  ];

  getIcon() {
    switch (this.variant) {
      case "locked":
        return html`<lucide-icon size=${12} name="lock"></lucide-icon>`;
    }
  }

  render() {
    return html` <span id="naw" class="badge">
      ${this.getIcon()}
      <slot></slot>
    </span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pl-badge": PlBadge;
  }
}
