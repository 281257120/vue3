/*
 * @Description: 如果该模块的接口比较多，可把枚举与响应数据的声明放到单独的文件中维护，即下面的enum Api与interface UserInfo
 * @Author: Liu Yang
 * @Date: 2023-03-20 11:18:53
 * @LastEditTime: 2023-03-20 11:24:39
 * @LastEditors: Liu Yang
 * @FilePath: \vue3\src\api\user\index.ts
 */
import request from 'utils/http'

// api枚举
enum Api {
  Login = '/login'
}

// 用户信息
interface UserInfo {
  userName: string
}

/**
 * 登录
 */
export const accountLogin = () => {
  return request<UserInfo>({
    url: Api.Login,
    method: 'get'
  })
}
