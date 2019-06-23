import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Router from 'vue-router'
import StartPage from '@/components/StartPage'
import Header from '@/components/Header'
import NewApp from '@/components/NewApp'
import Users from '@/components/Users'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage
    },
    {
      path: '/header',
      name: "Header",
      component: Header
    },
    {
      path: '/newapp',
      name: 'NewApp',
      component: NewApp
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    }
  ]
})
