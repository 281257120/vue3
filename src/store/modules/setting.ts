/*
 * @Description: 
 * @Author: Liu Yang
 * @Date: 2023-03-20 10:49:20
 * @LastEditTime: 2023-03-20 17:56:48
 * @LastEditors: Liu Yang
 * @FilePath: \vue3\src\store\modules\setting.ts
 */
import { defineStore } from 'pinia'

const useSettingStore = defineStore('settingStore', {
  state: () => ({
    isDark: false
  }),
  actions: {
    changeIsDark(flag: boolean) {
      this.isDark = flag
    }
  }
})

export default useSettingStore