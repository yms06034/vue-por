import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Test from './test'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/test', component: Test },
  ]
})
