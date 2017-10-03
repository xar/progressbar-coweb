// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$api = {
  baseWebUrl: 'https://progressbar-cowork.netlify.com/',
  base: 'https://yangwao.lib.id/progressbar-coweb@dev/',
  subscribers: '',
  newSubscriber: 'emailSubscribe/',
  verify: 'verify/',
  order: 'order/'
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
