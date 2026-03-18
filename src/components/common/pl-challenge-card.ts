import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { type PlBadgeProps } from "../ui/pl-badge";
import "../ui/pl-badge";
import "../ui/lucide-icon";

export type PlChallengeCardProps = {
  title: string;
  difficulty: Extract<
    PlBadgeProps["variant"],
    "beginner" | "intermediate" | "advanced"
  >;
  xp?: number;
  progress: number;
  status: Extract<
    PlBadgeProps["variant"],
    "in progress" | "completed" | "locked" | "not started"
  >;
  attempts: number;
};

@customElement("pl-challenge-card")
export class PlChallengeCard extends LitElement {
  @property({ type: String })
  title: PlChallengeCardProps["title"] = "";

  @property({ type: String })
  difficulty: PlChallengeCardProps["difficulty"] = "beginner";

  @property({ type: Number })
  xp: PlChallengeCardProps["xp"];

  @property({ type: Number })
  progress: PlChallengeCardProps["progress"] = 0;

  @property({ type: String, reflect: true })
  status: PlChallengeCardProps["status"] = "not started";

  @property({ type: Number })
  attempts: PlChallengeCardProps["attempts"] = 0;

  static styles = [
    css`
      :host {
        display: block;
      }

      .card__wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.75rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        background-color: var(--color-bg-elevated);
        padding: 1.25rem;
        width: 22.5rem; /* 360px */
      }

      :host([status="completed"]) .card__wrapper {
        border: 1px solid #4ade8044;
        box-shadow: 0 0 16px 0 #4ade8022;
      }

      .card__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }

      .card__title {
        color: var(--color-text-primary);
        font-family: var(--font-family-inter);
        font-size: 1rem; /* 16px */
        font-weight: var(--font-weight-semibold);
      }

      .card__bottom {
        display: flex;
        align-items: center;
        gap: 1rem; /* 16px */
        width: 100%;
      }

      .card__attempts {
        color: var(--color-text-muted);
        font-weight: var(--font-weight-small);
        font-size: 0.75rem; /* 12px */
        font-family: var(--font-family-inter);
      }

      .card__progress {
        color: var(--color-text-secondary);
        font-weight: var(--font-weight-small);
        font-size: 0.75rem; /* 12px */
        font-family: var(--font-family-inter);
      }

      .check-icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #4ade8022;
        border-radius: var(--radius-full);
        width: 1.5rem; /* 24px */
        height: 1.5rem; /*24px */
      }
    `,
  ];

  isCompleted() {
    if (this.status === "completed") {
      return html` <div class="check-icon-wrapper">
        <lucide-icon name="check" color="#00D9C0" size="14"></lucide-icon>
      </div>`;
    }
    if (this.status === "in progress") {
      return html`<pl-badge variant="xp">+${this.xp} XP</pl-badge>`;
    }
  }

  hasAttempts() {
    if (this.status === "in progress")
      return html`<span class="card__attempts"
        >${this.attempts} attempts</span
      >`;
  }

  showProgress() {
    const status = this.status;
    const hasProgress = status === "completed" || status === "in progress";

    return html` <div class="card__bottom">
      <pl-badge variant=${status}>${status}</pl-badge>
      ${hasProgress
        ? html` ${this.hasAttempts()}
            <span class="card__progress">Best: ${this.progress}%</span>`
        : null}
    </div>`;
  }

  render() {
    return html`
      <article class="card__wrapper">
        <div class="card__top">
          <pl-badge variant=${this.difficulty}>${this.difficulty}</pl-badge>
          ${this.isCompleted()}
        </div>
        <div class="card__title">
          <span>${this.title}</span>
        </div>
        ${this.showProgress()}
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pl-challenge-card": PlChallengeCard;
  }
}
