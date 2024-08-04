import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './router/index.tsx'
import { createLifecyle, getMicroApp } from 'vite-plugin-legacy-qiankun'
import pkg from '../package.json'
console.log('react----main.js');

function render() {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={routes} />
  )
}

const microApp = getMicroApp(pkg.name)
console.log('react----',microApp);

if (microApp.__POWERED_BY_QIANKUN__) {
  createLifecyle(pkg.name, {
    mount(props) {
      console.log('mount', pkg.name);
      render();
    },
    bootstrap() {
      console.log('?咋了');
      
      console.log('bootstrap', pkg.name);
    },
    unmount() {
      console.log('unmount', pkg.name)
    }
  })
} else {
  render();
}

// if(window.__POWERED_BY_QIANKUN__){
//   __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
// }

// function render() {
//   ReactDOM.createRoot(document.getElementById('root')!).render(
//     <RouterProvider router={routes} />
//   )
// }

// if(!window.__POWERED_BY_QIANKUN__){
//   render()
// }

// export async function bootstrap() {
//   console.log('[react18] react app bootstraped--子应用初始化');
// }

// export async function mount() {
//   console.log('[react18] props from main framework--子应用挂载');
//   render()
// }

// export async function unmount() {
//   console.log('[react18] react app unmount--子应用卸载');
//   ReactDOM.unmountComponentAtNode(document.getElementById('root'))
// }