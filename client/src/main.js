// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import Firebase from 'firebase'

const config = {
  databaseURL: 'https://wtf-firebase-bb67b.firebaseio.com',
  projectId: 'wtf-firebase-bb67b'
}

Vue.prototype.$db = Firebase.initializeApp(config).database().ref('mango')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
