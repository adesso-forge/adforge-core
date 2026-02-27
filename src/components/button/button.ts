// forge-button — Tier 3 Lit class extension of wa-button
import '@awesome.me/webawesome/dist/components/button/button.js';
import { LitElement, css } from 'lit';
import { property } from 'lit/decorators.js';

const WaButton = customElements.get('wa-button')!;

export class ForgeButton extends (WaButton as unknown as typeof LitElement) {
  static css = [
    ...(Array.isArray((WaButton as any).css)
      ? (WaButton as any).css
      : (WaButton as any).css
        ? [(WaButton as any).css]
        : []),
    css`
      /* Core DS button additions */
    `,
  ];

  @property({ type: Boolean, attribute: 'track-clicks' })
  trackClicks = false;

  connectedCallback() {
    super.connectedCallback();
    if (this.trackClicks) {
      this.addEventListener('click', this._onTrackedClick);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this._onTrackedClick);
  }

  private _onTrackedClick = () => {
    this.dispatchEvent(
      new CustomEvent('forge-track', {
        detail: { component: 'button', action: 'click' },
        bubbles: true,
        composed: true,
      }),
    );
  };
}

customElements.define('forge-button', ForgeButton as unknown as CustomElementConstructor);
