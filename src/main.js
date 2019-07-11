// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import locale from 'element-ui/lib/locale/lang/ro'
import bootstrap from 'bootstrap'

Vue.use(VueResource)
Vue.use(ElementUI,{locale})
/* eslint-disable no-new */

Vue.http.options.root = "http://codeigniter2.menut.ro/";
Vue.http.headers.common['Token'] = "12345678"
Vue.http.headers.common['AppCmd'] = '1'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
