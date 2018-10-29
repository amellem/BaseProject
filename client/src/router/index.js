import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import register from '@/components/Register'
import about from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
