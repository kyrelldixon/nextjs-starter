/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['html', 'text', 'lcov'],
      include: ['src'],
    },
    alias: {
      '~/app': '/src/app',
      '~/components': '/src/components',
      '~/lib': '/src/lib',
      __tests__: '/__tests__',
    },
  },
})
