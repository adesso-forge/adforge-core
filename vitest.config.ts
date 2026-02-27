import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';
import { createVitestConfig } from '@adesso-forge/adforge-shared/testing/vitest';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: createVitestConfig(),
  }),
);
