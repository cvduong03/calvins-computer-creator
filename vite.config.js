import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/calvins-computer-creator", // for GitHub Pages
  // for GitHub Pages
  base:
    process.env.NODE_ENV === "production" ? "/calvins-computer-creator/" : "/",
});
