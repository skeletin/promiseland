import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

type PlInputProps = {
  name: string;
  value: string;
  type: string;
  placeholder: string;
  invalid: boolean;
  errorMessage: string;
};

@customElement("pl-input")
export class PlInput extends LitElement {
  @property({ type: String })
  name: PlInputProps["name"] = "";

  @property({ type: String })
  value: PlInputProps["value"] = "";

  @property({ type: String })
  type: PlInputProps["type"] = "";

  @property({ type: String })
  placeholder: PlInputProps["placeholder"] = "";

  @property({ type: Boolean, reflect: true })
  invalid: PlInputProps["invalid"] = false;

  @property({ type: String, attribute: "error-message" })
  errorMessage: PlInputProps["errorMessage"] = "";

  @state() _focused = false;

  static styles = [
    css`
      :host {
        display: block;
      }

      .container {
        display: flex;
        flex-direction: column;
        gap: 6px;
        width: 20rem; /* 320px */
        font-family: var(--font-family-body);
      }

      .label {
        color: var(--color-text-secondary);
        font-size: var(--font-size-small);
        font-weight: var(--font-weight-semibold);
      }

      .label.focused {
        color: var(--color-primary);
      }

      .label.error {
        color: var(--color-accent-error);
      }

      .input {
        box-sizing: border-box;
        background: var(--color-bg-surface);
        border-radius: var(--radius-xs);
        color: var(--color-text-primary);
        height: 2.75rem; /* 44px */
        padding: 0 var(--spacing-base);
        border: 1px solid var(--color-border);
        outline: none;
      }

      .input:focus {
        outline: 1px solid var(--color-primary);
        box-shadow: 0 0 12px #6c63ff44;
      }

      .input.error {
        border-color: var(--color-accent-error);
      }

      .input.error:focus {
        outline: 1px solid var(--color-accent-error);
        box-shadow: 0 0 12px #ff5c5c44;
      }

      .error-message {
        color: var(--color-accent-error);
        font-size: var(--font-size-small);
        font-weight: var(--font-weight-regular);
      }
    `,
  ];

  _onFocusIn() {
    this._focused = true;
  }

  _onFocusOut() {
    this._focused = false;
  }
  render() {
    return html` <div
      class="container"
      @focusin=${this._onFocusIn}
      @focusout=${this._onFocusOut}
    >
      <label
        class=${classMap({
          label: true,
          focused: this._focused && !this.invalid,
          error: this.invalid,
        })}
      >
        ${this.name}
      </label>
      <input
        class=${classMap({ input: true, error: this.invalid })}
        name="${this.name}"
        value=${this.value}
        placeholder=${this.placeholder}
        type=${this.type}
        aria-invalid=${this.invalid ? "true" : "false"}
      />
      ${this.invalid && this.errorMessage
        ? html`<span class="error-message">${this.errorMessage}</span>`
        : null}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pl-input": PlInput;
  }
}
