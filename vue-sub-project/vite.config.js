import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import legacy from '@vitejs/plugin-legacy' // need this
import { legacyQiankun } from 'vite-plugin-legacy-qiankun'

export default defineConfig({
  server: {
    port: 8002,
    origin: 'http://127.0.0.1:8000', // 解决资源访问
  },
  plugins: [
    vue(),
    legacy(),
    legacyQiankun({
      name: 'vue-sub-project',
      devSandbox: true  
    })
  ]
})
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })
