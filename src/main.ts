// @ts-nocheck
/*
 * @Description: 
 * @Author: Liu Yang
 * @Date: 2023-03-09 17:13:20
 * @LastEditTime: 2023-03-22 09:35:19
 * @LastEditors: Liu Yang
 * @FilePath: \vue3\src\main.ts
 */
// 计算设置rem的基准值，即html的font-size
// import 'amfe-flexible'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
//ElementPlus配置为中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import '@/assets/style/index.scss'
import VueCesium from 'vue-cesium'
import 'vue-cesium/dist/index.css'


import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
  size: 'small',
})
app.use(VueCesium)

// 安装初始化store
setupStore(app)
// 安装初始化路由
setupRouter(app)
app.mount('#app')


