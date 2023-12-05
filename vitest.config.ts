/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
// @ts-ignore
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      fs: require.resolve('rollup-plugin-node-builtins'),
      '@': path.resolve(__dirname, './'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'json', 'html', 'cobertura'],
      provider: 'istanbul', // or 'c8',
      exclude: [path.resolve(__dirname, '../test-utils'), path.resolve(__dirname, '../.vercel')],
    },
    setupFiles: path.resolve(__dirname, 'setup-tests.ts'),
  },
});
