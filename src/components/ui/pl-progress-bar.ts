import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

@customElement("pl-progress-bar")
export class PlProgressBar extends LitElement {
  @property({ type: Number })
  progress: number = 0;

  static styles = [
    css`
      :host {
        display: block;
      }

      .progress-wrapper {
        background: var(--color-bg-elevated);
        border-radius: var(--radius-full);
        width: 25rem; /* 400px */
        height: 0.5rem;
        overflow: hidden;
      }

      .progress-amount {
        background: linear-gradient(to right, #00d9c0, #6c63ff);
        border-radius: var(--radius-full);
        width: 100%;
        height: 100%;
      }
    `,
  ];

  render() {
    const clamped = Math.min(100, Math.max(0, this.progress)); // ✅

    return html`
      <div class="progress-wrapper">
        <div
          class="progress-amount"
          style=${styleMap({
            transform: `translateX(calc(${clamped}% - 100%))`,
          })}
        ></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pl-progress-bar": PlProgressBar;
  }
}
