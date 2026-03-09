import { Router } from "@lit-labs/router";
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./components/features/home/index";
import "./components/common/navigation-bar";

@customElement("app-root")
export class AppRoot extends LitElement {
  private _router = new Router(this, [
    { name: "home", path: "/", render: () => html`<home-page></home-page>` },
  ]);

  static styles = [
    css`
      :host {
        display: block;
      }

      .app-layout {
        display: flex;
        flex-direction: column;
      }
    `,
  ];

  render() {
    return html`
      <main class="app-layout">
        <navigation-bar></navigation-bar>
        ${this._router.outlet()}
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-root": AppRoot;
  }
}
