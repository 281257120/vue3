/*
 * @Description: daimai
 * @Author: Liu Yang
 * @Date: 2023-03-09 17:13:20
 * @LastEditTime: 2023-03-17 13:58:07
 * @LastEditors: Liu Yang
 * @FilePath: \test\src\main.ts
 */
import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
//ElementPlus配置为中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import '@/assets/style/index.scss'


import App from './App.vue'
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
  size: 'small',
})
app.mount('#app')


