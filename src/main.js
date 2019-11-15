// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'　
Vue.use(ElementUI)

import Axios from 'axios'; /* 引入axios进行地址访问*/ 　
import VueAxios from 'vue-axios'; /* 引入axios进行地址访问*/ 　　
Vue.prototype.$http = Axios;
Vue.use(VueAxios, Axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})