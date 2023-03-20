/*
 * @Description: 新增以下接口声明，为axios响应的data的结构，可根据自己的项目实际情况进行修改
 * @Author: Liu Yang
 * @Date: 2023-03-20 11:12:57
 * @LastEditTime: 2023-03-20 11:13:03
 * @LastEditors: Liu Yang
 * @FilePath: \vue3\src\types\axios.d.ts
 */
export interface CustomResponseType<T> {
  code: number
  message: string
  data: T
}