// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/common.css'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Mock from './mock'; // 引入mock模块

Mock.start(); //并且执行初始化函数

Vue.use(Vuex)

Vue.config.productionTip = false

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
