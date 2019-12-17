import Vue from 'vue'
// 引入路由模块
import router from '@/router/index.js'
// @就代表src目录
import App from '@/App.vue'
// 引入初始化样式文件
import '@/styles/animate.css'
// 引入提示用的插件
import { Toast, Icon } from 'vant'
Vue.use(Toast)
Vue.use(Icon)

Vue.config.productionTip = false

new Vue({
  // 注入,记得要通过 router 配置参数注入路由，
  // 从而让整个应用都有路由功能
  router,
  render: h => h(App)
}).$mount('#app')
