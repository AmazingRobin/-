import { createApp } from 'vue'
import { createLifecyle, getMicroApp } from 'vite-plugin-legacy-qiankun'
import pkg from '../package.json' // your micro app name (pkg.name)
import router from './router'
import App from './App.vue'
import './style.css'


const microApp = getMicroApp(pkg.name)
console.log(microApp);
// createApp(App).use(router).mount('#app')

const render = () => {
  createApp(App)
  .use(router)
  .mount('#app3')
}
console.log('vue-sub.js',microApp.__POWERED_BY_QIANKUN__);
if (microApp.__POWERED_BY_QIANKUN__) {
  createLifecyle(pkg.name, {
    mount(props) {
      console.log('mount', pkg.name);
      render();
    },
    bootstrap() {
      console.log('bootstrap', pkg.name);
    },
    unmount() {
      console.log('unmount', pkg.name)
    }
  })
} else {
  render();
}