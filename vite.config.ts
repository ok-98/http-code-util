import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      include: ['lib'],
      exclude: ['**/*.test.ts', 'lib/tsdoc.ts'],
    }),
  ],
  build: {
    lib: {
      entry: './lib/http-code-util.ts',
      name: 'http-code-util',
    },
  }
})
