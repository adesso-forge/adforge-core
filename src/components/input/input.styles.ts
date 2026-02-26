// Tier 2: CSS Part and scoped property overrides for forge-input
import { css } from 'lit';

export const forgeInputStyles = css`
  wa-input {
    --wa-input-height-medium: 2.75rem;
    --wa-input-border-radius-medium: var(--wa-border-radius-s);
  }

  wa-input::part(base) {
    transition: border-color var(--wa-transition-fast) ease,
                box-shadow var(--wa-transition-fast) ease;
  }

  wa-input::part(base):focus-within {
    border-color: var(--wa-color-brand-500, currentColor);
    box-shadow: 0 0 0 var(--wa-focus-ring-width) rgb(0 82 204 / 0.2);
  }

  wa-input::part(input) {
    font-family: var(--wa-font-family-sans);
  }

  wa-input::part(form-control-label) {
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  wa-input::part(form-control-help-text) {
    font-size: 0.8125rem;
    color: var(--wa-color-neutral-50);
  }
`;
