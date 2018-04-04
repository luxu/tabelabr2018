// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './filters'
import App from './app/Main'
import router from './router'
import store from './vuex'
import Loader from './plugins/loader'

Vue.use(Loader, store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
