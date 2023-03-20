/*
 * @Description: 
 * @Author: Liu Yang
 * @Date: 2023-03-20 10:49:20
 * @LastEditTime: 2023-03-20 13:43:27
 * @LastEditors: Liu Yang
 * @FilePath: \vue3\src\store\modules\home.ts
 */
import { defineStore } from 'pinia'

const useHomeStore = defineStore('homeStore', {
  state: () => ({
    title: '首页'
  }),
  actions: {
    changeHomeName(title: string) {
      this.title = title
    }
  }
})

export default useHomeStore