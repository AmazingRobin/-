import { createBrowserRouter } from 'react-router-dom'
import Menu from '../pages/Menu'
import User from '../pages/User'

import { getMicroApp } from 'vite-plugin-legacy-qiankun'

import pkg from '../../package.json'
const microApp = getMicroApp(pkg.name)
const BASE_NAME = microApp.__POWERED_BY_QIANKUN__ ? `/${pkg.name}` : ''

const route = createBrowserRouter([
  {
    path: '/menu',
    element: <Menu />
  },
  {
    path: '/user',
    element: <User />
  }
],{
  basename: BASE_NAME
})
export default route