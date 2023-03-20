/*
 * @Description: 
 * @Author: Liu Yang
 * @Date: 2023-03-20 10:39:13
 * @LastEditTime: 2023-03-20 16:45:49
 * @LastEditors: Liu Yang
 * @FilePath: \vue3\src\router\index.ts
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'

import routes from './routes/index'
// console.log(process.env.VITE_VUE_ROUTER_BASE)
const router = createRouter({
  // vueRouter@3版本的mode改成了history，hash模式配置createWebHashHistory，history模式配置createWebHistory
  history: createWebHashHistory(import.meta.env.VITE_VUE_ROUTER_BASE),
  routes
})

/**
 * 路由初始化函数
 * @param app
 */
export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router