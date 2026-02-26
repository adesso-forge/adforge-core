import { createBaseConfig } from '@adesso-forge/adforge-shared/build/vite-config';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default createBaseConfig({
  root: resolve(__dirname),
  entry: 'src/index.ts',
});
