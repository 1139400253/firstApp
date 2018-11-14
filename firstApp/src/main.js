// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'

import {store} from './store/store'

Vue.use(VueRouter);
//配置默认路径
axios.defaults.baseURL = 'https://wd2792406904qnrdts.wilddogio.com/';

// 配置vue原型(在任何组件中可以正常使用axios)
Vue.prototype.http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
