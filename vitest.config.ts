import { defineConfig } from 'vitest/config';
import path from "node:path";

export default defineConfig({
  test: {
    alias: {
     	"@components": path.resolve(__dirname, "src/components/"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@api": path.resolve(__dirname, "src/api"),
    },
    include: ['src/**/*.test.tsx', 'src/**/*.test.ts'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests-setup.ts',

  },
})