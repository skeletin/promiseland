import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("pl-tooltip")
export class PlTooltip extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      .tooltip {
        background: var(--color-bg-elevated);
        border-radius: var(--radius-xs);
        font-family: var(--font-family-inter);
        font-size: var(--font-size-small);
        font-weight: var(--font-weight-body);
        padding: 0.5rem 0.875rem;
        color: var(--color-text-primary);
      }
    `,
  ];

  render() {
    return html`<span class="tooltip">
      <slot></slot>
    </span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pl-tooltip": PlTooltip;
  }
}
