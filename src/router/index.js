import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import NewApp from '@/components/NewApp'
import Users from '@/components/Users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: "Login",
      component: Login
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
