// 1.引入vue
import Vue from 'vue'
// 2.引入vue-router
import VueRouter from 'vue-router'
// 引入登入页面文件
import login from '@/views/login.vue'
// import shouye from '@/shouye/index.vue'
// 3.user
Vue.use(VueRouter)
// 4.创建路由对象,进行路由配置
let router = new VueRouter({
  routes: [
    {
      name: 'login ',
      path: '/',
      component: login
    }
  ]
})
export default router
