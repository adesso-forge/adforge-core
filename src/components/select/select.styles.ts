// Tier 2: CSS Part and scoped property overrides for forge-select
import { css } from 'lit';

export const forgeSelectStyles = css`
  wa-select {
    --wa-input-height-medium: 2.75rem;
    --wa-input-border-radius-medium: var(--wa-border-radius-s);
  }

  wa-select::part(combobox) {
    font-family: var(--wa-font-family-sans);
    transition:
      border-color var(--wa-transition-fast) ease,
      box-shadow var(--wa-transition-fast) ease;
  }

  wa-select::part(combobox):focus-within {
    border-color: var(--wa-color-brand-500, currentColor);
    box-shadow: 0 0 0 var(--wa-focus-ring-width) rgb(0 82 204 / 0.2);
  }

  wa-select::part(form-control-label) {
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  wa-select::part(form-control-help-text) {
    font-size: 0.8125rem;
    color: var(--wa-color-neutral-50);
  }

  wa-select::part(listbox) {
    border-radius: var(--wa-border-radius-m);
    box-shadow:
      0 10px 15px rgb(0 0 0 / 0.1),
      0 4px 6px rgb(0 0 0 / 0.05);
  }
`;
