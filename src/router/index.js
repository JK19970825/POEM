import Vue from 'vue'
import Router from 'vue-router'
import poem from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'poem',
      component: poem
    }
  ]
})
