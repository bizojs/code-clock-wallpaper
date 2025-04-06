import { viteSingleFile } from "vite-plugin-singlefile"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import { defineConfig } from "vite"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    viteSingleFile()
  ],
  build: {
    target: "esnext",
    assetsInlineLimit: 0,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  },
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
      $types: path.resolve("./src/lib/types")
    }
  }
})
