/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, configDefaults } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tools/setup-tests.ts',
    exclude: ['node_modules', 'e2e', 'tools'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
})
