import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Compute base for GitHub Pages (/<repo>/) unless VITE_BASE is provided
const repoBase =
  process.env.VITE_BASE ??
  (process.env.GITHUB_REPOSITORY
    ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}/`
    : "/");

export default defineConfig(({ mode }) => ({
  base: repoBase, // ⬅️ base must be top-level (not inside plugins)
  server: {
    host: true, // listen on all interfaces (both 0.0.0.0 and ::)
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
       "@components": path.resolve(__dirname, "src/components"),
      "@": path.resolve(__dirname, "src"),
    },
  },
}));
