import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("pl-code-block")
export class PlCodeBlock extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      .code-block {
        background: var(--color-bg-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-sm);
        color: var(--color-text-primary);
        font-size: var(--font-size-code);
        font-family: var(--font-family-code);
        font-weight: var(--font-weight-regular);
        padding: 1.25rem; /* 20px */
      }
    `,
  ];

  render() {
    return html` <pre class="code-block">
        <code>
            <slot></slot>
        </code>
        </pre>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pl-code-block": PlCodeBlock;
  }
}
