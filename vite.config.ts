import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "https://MrJohn616.github.io/porfolio--giovanni-francisco-gonzalez-ruiz",
});
