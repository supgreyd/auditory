import Vue from 'vue'
import Router from 'vue-router'

import Index from '../components/auditory/index'
import EmptyPage from '../components/emptyPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/emptyPage',
      component: EmptyPage,
    }
  ]
})
