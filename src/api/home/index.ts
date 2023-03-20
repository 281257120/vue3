/*
 * @Description: 如果该模块的接口比较多，可把枚举与响应数据的声明放到单独的文件中维护，即下面的enum Api与interface UserInfo
 * @Author: Liu Yang
 * @Date: 2023-03-20 11:18:53
 * @LastEditTime: 2023-03-20 11:52:43
 * @LastEditors: Liu Yang
 * @FilePath: \vue3\src\api\home\index.ts
 */
import request from 'utils/http'


// api枚举
enum Api {
  Login = '/Login/',
  Token = '/getToken/'
}

// 用户信息
interface UserInfo {
  userName: string
}

/**
 * getToken
 */
export const getToken = () => {
  return request<UserInfo>({
    url: '/getToken',
    method: 'get'
  })
}

/**
 * 登录
 */
export const accountLogin = (para) => {
  return request({
    url: Api.Login,
    method: 'post',
    data: para
  })
}

