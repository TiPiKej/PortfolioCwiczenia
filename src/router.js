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
      path: '/settings',
      name: 'settings',
      component: () => import(/* webpackChunkName: "settings" */ './views/Settings.vue')
    },



    // Code Challenge links
    {
      path: '/codeChallenge/jiggle_button',
      name: 'JiggleButton',
      component: () => import(/* webpackChunkName: "JiggleButton" */ './views/CodeChallenge/jiggle_button.vue')
    },
    {
      path: '/codeChallenge/calc',
      name: 'Calc',
      component: () => import(/* webpackChunkName: "calc" */ './views/CodeChallenge/calc.vue')
    }
  ]
})
