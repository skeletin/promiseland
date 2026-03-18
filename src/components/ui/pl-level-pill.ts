import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./lucide-icon";

export type PlLevelPillProps = {
  level: number;
  xp: number;
};

@customElement("pl-level-pill")
export class PlLevelPill extends LitElement {
  @property({ type: Number })
  level: PlLevelPillProps["level"] = 0;

  @property({ type: Number })
  xp: PlLevelPillProps["xp"] = 0;

  static styles = [
    css`
      :host {
        display: block;
      }

      .level-pill {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-sm);
        background: var(--color-bg-elevated);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-full);
        font-family: var(--font-family-body);
        font-size: var(--font-size-small);
        font-weight: var(--font-weight-semibold);
        color: var(--color-text-primary);
        padding: 0 0.875rem;
        height: var(--spacing-xl);
        width: auto;
      }
    `,
  ];

  render() {
    return html` <div class="level-pill">
      <lucide-icon name="star" color="#f5a623" size="14"></lucide-icon>
      <span>Level ${this.level} · ${this.xp.toLocaleString()} XP</span>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pl-level-pill": PlLevelPill;
  }
}
