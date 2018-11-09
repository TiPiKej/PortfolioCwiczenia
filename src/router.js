import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: "/",
      name: "settings",
      component: () =>
        import(/* webpackChunkName: "settings" */ "./views/Settings.vue")
    },
    {
      path: "/loaders",
      name: "loaderView",
      component: () =>
        import(/* webpackChunkName: "loaders" */ "./views/Loaders.vue")
    },

    // Code Challenge links
    {
      path: "/codeChallenge/jiggle_button",
      name: "JiggleButton",
      component: () =>
        import(/* webpackChunkName: "JiggleButton" */ "./views/CodeChallenge/jiggle_button.vue")
    },
    {
      path: "/codeChallenge/calc",
      name: "Calc",
      component: () =>
        import(/* webpackChunkName: "calc" */ "./views/CodeChallenge/calc.vue")
    },

    // Buttons
    {
      path: "/button/clipboard",
      name: "BClipboard",
      component: () => import("./views/Buttons/Clipboard.vue")
    },
    {
      path: "/button/android",
      name: "BAndroid",
      component: () => import("./views/Buttons/AndroidButton.vue")
    }
  ]
});
