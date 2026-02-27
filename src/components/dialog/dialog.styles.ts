// Tier 2: CSS Part and scoped property overrides for forge-dialog
import { css } from 'lit';

export const forgeDialogStyles = css`
  wa-dialog::part(base) {
    font-family: var(--wa-font-family-sans);
  }

  wa-dialog::part(panel) {
    border-radius: var(--wa-border-radius-l);
    box-shadow:
      0 20px 25px rgb(0 0 0 / 0.1),
      0 8px 10px rgb(0 0 0 / 0.04);
  }

  wa-dialog::part(header) {
    font-weight: 600;
    padding: var(--wa-space-l) var(--wa-space-l) var(--wa-space-m);
  }

  wa-dialog::part(body) {
    padding: var(--wa-space-m) var(--wa-space-l);
  }

  wa-dialog::part(footer) {
    padding: var(--wa-space-m) var(--wa-space-l) var(--wa-space-l);
  }

  wa-dialog::part(overlay) {
    background-color: rgb(0 0 0 / 0.4);
    backdrop-filter: blur(2px);
  }

  wa-dialog::part(close-button) {
    font-size: 1rem;
  }
`;
