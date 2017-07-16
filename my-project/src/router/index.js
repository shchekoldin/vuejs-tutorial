import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Ping from '@/components/Ping'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/ping',
      name: 'Ping',
      component: Ping
    }
  ]
})
