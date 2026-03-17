import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("pl-loader")
export class PlLoader extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      .loader {
        height: 2rem; /* 32px */
        width: 2rem;
        border: 3px solid var(--color-primary);
        border-radius: var(--radius-full);
      }
    `,
  ];

  render() {
    return html` <div class="loader"></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pl-loader": PlLoader;
  }
}
