import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Ping from '@/components/Ping'
import Counter from '@/components/Counter'

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
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    }
  ]
})
