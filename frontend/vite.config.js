import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

import {viteCommonjs,esbuildCommonjs} from '@originjs/vite-plugin-commonjs'
// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [
      viteCommonjs(),
      react(),
  ],
  optimizeDeps:{
    esbuildOptions:{
      plugins:[
          esbuildCommonjs(['isomorphic-fetch' ,'pexels'])
      ]
    }
  },
  build:{
    commonjsOptions:{
      include:[/node_modules/]
    }
  },
  resolve:{
    alias:[
      {find:'@services', replacement: path.resolve("src/shared/services")},
      {find: '@utils', replacement: path.resolve("src/shared/utils")},
      {find:'@components', replacement:path.resolve("src/shared/components")},
      {find:'@pages', replacement: path.resolve("src/pages")},
      {find:'@controllers', replacement: path.resolve("src/controllers")}
    ]
  }
})
