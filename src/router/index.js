import { createRouter, createWebHashHistory } from 'vue-router'
import { configRouter } from '/@/utils'

import home from './home'
import about from './about'

const routes = configRouter([
  {
    path: '/',
    config: home
  }, {
    path: '/about',
    config: about
  }
])

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
