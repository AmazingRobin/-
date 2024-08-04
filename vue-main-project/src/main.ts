import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import startQiankun from './qiankun'



// createApp(App).use(router).mount('#app')

const app = createApp(App)
app.use(router)
app.mount('#app')
console.log('qiankun---start');

startQiankun({
  sandbox: {
    // strictStyleIsolation: true,
    experimentalStyleIsolation: true
  }
})