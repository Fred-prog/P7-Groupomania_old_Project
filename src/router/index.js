import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Wall from '../views/Wall.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },

  // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/Wall',
      name: 'Wall',
      component: Wall
    }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
