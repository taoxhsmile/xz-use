/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

/**
 * @type {import('vite').UserConfig}
 */
export default {
  optimizeDeps: {
    include: [
      'intersection-observer',
      'localforage',
      'lodash',
      'resize-observer-polyfill',
      'screenfull',
      // 'vue-demi',
      'mockjs',
      'axios',
    ],
    // exclude: ['vue-demi'],
  },
  build: {
    minify: true,
    lib: {
      entry: path.resolve('./src/index.ts'),
      name: 'xz-use',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['axios', 'vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
};
