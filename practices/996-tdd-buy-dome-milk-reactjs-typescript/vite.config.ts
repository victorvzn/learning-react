// Triple-Slash Directives: https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-
/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
  }
})
