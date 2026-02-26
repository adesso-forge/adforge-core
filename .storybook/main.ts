import { createStorybookConfig } from '@adesso-forge/ds-shared/storybook/main';

const config = createStorybookConfig({
  stories: ['../src/**/*.stories.ts'],
});

export default config;
