import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/http-code-util.ts',
      name: 'http-code-util',
    }
  }
})
