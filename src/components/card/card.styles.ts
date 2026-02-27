// Tier 2: CSS Part and scoped property overrides for forge-card
import { css } from 'lit';

export const forgeCardStyles = css`
  wa-card {
    --wa-card-border-radius: var(--wa-border-radius-m);
    --wa-card-padding: var(--wa-space-l);
  }

  wa-card::part(base) {
    box-shadow:
      0 1px 3px rgb(0 0 0 / 0.08),
      0 1px 2px rgb(0 0 0 / 0.06);
    transition: box-shadow var(--wa-transition-medium) ease;
  }

  wa-card::part(base):hover {
    box-shadow:
      0 4px 6px rgb(0 0 0 / 0.1),
      0 2px 4px rgb(0 0 0 / 0.06);
  }

  wa-card::part(header) {
    font-weight: 600;
    padding-bottom: var(--wa-space-s);
  }

  wa-card::part(footer) {
    border-top: 1px solid var(--wa-color-neutral-90);
    padding-top: var(--wa-space-m);
  }
`;
