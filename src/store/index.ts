/*
 * @Description: 
 * @Author: Liu Yang
 * @Date: 2023-03-20 10:47:16
 * @LastEditTime: 2023-03-20 10:47:29
 * @LastEditors: Liu Yang
 * @FilePath: \vue3\src\store\index.ts
 */
import { createPinia } from 'pinia'
import type { App } from 'vue'

const store = createPinia()

export const setupStore = (app: App<Element>) => {
  app.use(store)
}

export default store