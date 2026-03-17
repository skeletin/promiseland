import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

type PlToggleProps = {
  checked: boolean;
  label: string;
};

@customElement("pl-toggle")
export class PlToggle extends LitElement {
  @property({ type: Boolean, reflect: true })
  checked: PlToggleProps["checked"] = false;

  @property({ type: String })
  label: PlToggleProps["label"] = "";

  static styles = [
    css`
      :host {
        display: block;
      }

      .toggle {
        display: flex;
        align-items: center;
        border-radius: var(--radius-full);
        position: relative;
        width: 2.75rem; /* 44px */
        height: 1.5rem; /* 24px */
        border: none;
        cursor: pointer;
        padding: 0;
        background: transparent;
        overflow: hidden;
      }

      .track {
        transition:
          background-color 180ms ease,
          border-color 180ms ease;
        position: absolute;
        inset: 0;
        background-color: var(--color-bg-elevated);
        border: 1px solid var(--color-border);
        border-radius: inherit;
      }

      .thumb {
        transition:
          transform 180ms cubic-bezier(0.22, 1, 0.36, 1),
          background-color 180ms cubic-bezier(0.22, 1, 0.36, 1);
        will-change: transform;
        background: var(--color-text-muted);
        border-radius: var(--radius-full);
        height: 1.25rem; /* 20px */
        width: 1.25rem; /* 20px  */
        z-index: 1;
        transform: translateX(2px);
      }

      :host([checked]) .thumb {
        background: white;
        border-radius: var(--radius-full);
        height: 1.25rem; /* 20px */
        width: 1.25rem; /* 20px  */
        z-index: 1;
        transform: translateX(22px);
      }

      :host([checked]) .track {
        background-color: var(--color-primary);
        border-color: transparent;
      }
    `,
  ];

  render() {
    return html`<button
      class="toggle"
      type="button"
      role="switch"
      aria-checked=${this.checked}
      aria-label=${this.label}
    >
      <span class="track" aria-hidden="true"></span>
      <span class="thumb" aria-hidden="true"></span>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pl-toggle": PlToggle;
  }
}
