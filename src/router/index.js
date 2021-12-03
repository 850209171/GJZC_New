import Vue from "vue"
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import { Scrollbar, Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'

Vue.use(VueRouter)

export default new Router ({
  routes: [
    {
      //登录页
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      //导航栏
      path: '/home',
      name: 'Home',
      component: Home
    }


  ]
})
