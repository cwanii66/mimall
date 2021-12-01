import Vue from 'vue'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
// import env from './env'

// 根据前端的跨域方式作调整
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000

// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL

// 接口错误拦截
axios.interceptors.response.use((response) => { // 拦截业务异常
    let res =  response.data  // 接口规范，统一固定数据
    let path = location.hash
    if (res.status === 0) {
        return res.data
    } else if (res.status === 10) {
        if (path !== '#/index') {
            window.location.href = '/#/login'
        }
        return Promise.reject(res)
    } else {
        Message.warning(res.msg)
        return Promise.reject(res)
    }
})

Vue.use(axios)
Vue.use(VueCookie)
Vue.use(VueLazyload, {
    loading: '/imgs/loading-svg/loading-bars.svg'
})

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.$message = Message // 为原型扩展出一个$message

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
