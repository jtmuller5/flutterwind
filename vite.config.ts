import { defineConfig } from "vite";
import { resolve } from "path";
import plugin from "@vitejs/plugin-react";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    plugin({
      jsxRuntime: "classic",
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src", "index.ts"),
      formats: ["es", "cjs"],
      fileName: (ext) => `index.${ext}.js`,
      // for UMD name: 'GlobalName'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    target: "esnext",
    sourcemap: true,
  },
});
