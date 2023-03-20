/*
 * @Description: 
 * @Author: Liu Yang
 * @Date: 2023-03-20 10:37:04
 * @LastEditTime: 2023-03-20 10:37:20
 * @LastEditors: Liu Yang
 * @FilePath: \vue3\src\router\routes\modules\common.ts
 */
import type { RouteRecordRaw } from 'vue-router'

// 路由规则
const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginPage.vue')
  }
]

export default routes