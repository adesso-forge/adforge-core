// Tier 2: CSS Part and scoped property overrides for forge-button
import { css } from 'lit';

export const forgeButtonStyles = css`
  wa-button {
    --wa-button-height-medium: 2.75rem;
  }

  wa-button::part(base) {
    font-weight: 600;
  }

  wa-button:state(loading)::part(base) {
    opacity: 0.7;
  }
`;
