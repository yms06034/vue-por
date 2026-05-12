import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home'
import Test from './test'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/test', component: Test },
  ]
})
