import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
		alias: {
			"@components": path.resolve(__dirname, "src/components/"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@api": path.resolve(__dirname, "src/api"),
    },
  },
   build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]', // Ensure worker files are named properly
      },
    },
  },
})
