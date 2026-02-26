import { createStorybookConfig } from '@adesso-forge/adforge-shared/storybook/main';

const config = createStorybookConfig({
  stories: ['../src/**/*.stories.ts'],
});

export default config;
