import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
  ]
})
