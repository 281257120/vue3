/*
 * @Description: 
 * @Author: Liu Yang
 * @Date: 2023-03-20 10:49:20
 * @LastEditTime: 2023-03-20 10:59:30
 * @LastEditors: Liu Yang
 * @FilePath: \vue3\src\store\modules\home.ts
 */
import { defineStore } from 'pinia'

const useHomeStore = defineStore('homeStore', {
  state(): State {
    return {
      title: '首页'
    }
  },
  actions: {
    changeHomeName(title: String) {
      this.title = title
    }
  }
})

export default useHomeStore