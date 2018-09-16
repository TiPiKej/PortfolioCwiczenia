import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/my-pages',
      name: 'mypages',
      // route level code-splitting
      // this generates a separate chunk (my-pages.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "my-pages" */ './views/MyPages.vue')
    }
  ]
})
