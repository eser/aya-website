/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

const config = defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    // globals: true,
    environment: "jsdom",
  },
});

export { config as default };
