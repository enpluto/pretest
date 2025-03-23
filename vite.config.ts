import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/pretest/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // 將 Chakra-ui 拆分成獨立 chunk
        manualChunks(id) {
          if (id.includes("@chakra-ui")) return "chakra-ui";
        },
      },
    },
  },
});
