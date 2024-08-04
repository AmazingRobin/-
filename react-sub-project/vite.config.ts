import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { legacyQiankun } from 'vite-plugin-legacy-qiankun'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: false,
    port: 8001,
    origin: 'http://127.0.0.1:8000',
    headers: {
      'Access-Control-Allow-Origin': '*', // 主应用获取子应用时跨域响应头
    }
  },
  plugins: [
    react({
      fastRefresh: false
    }),
    legacy({
      targets: {
        "chrome": "58",
      }
    }),
    legacyQiankun({
      name: 'react-sub-project',
      devSandbox: true
    })
  ]
})
