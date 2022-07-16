import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '../store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import api from './utils/api'
import moment from 'moment'
import 'bootstrap'
import $ from 'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use($)
Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.use(ViewUI);
Vue.filter('date', time => moment(time).format('YYYY/MM/DD, HH:mm'))
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
