// @adesso-forge/adforge-core — Main entry point
// Registers all forge-* components and exports theme CSS paths

// Register all components
import './components/index.js';

// Re-export the Button Tier 3 extension class for downstream use
export { ForgeButton } from './components/button/button.js';
