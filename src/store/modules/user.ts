/*
 * @Description: 
 * @Author: Liu Yang
 * @Date: 2023-03-20 10:49:20
 * @LastEditTime: 2023-03-20 10:49:41
 * @LastEditors: Liu Yang
 * @FilePath: \vue3\src\store\modules\user.ts
 */
import { defineStore } from 'pinia'
import { UserInfo } from '#/store'

interface State {
  userInfo: UserInfo
  token: string
}

const useUserStore = defineStore('userStore', {
  state(): State {
    return {
      userInfo: {
        userName: '',
        userId: ''
      },
      token: ''
    }
  },
  actions: {
    changeUserName(userInfo: UserInfo) {
      this.userInfo = userInfo
    }
  }
})

export default useUserStore