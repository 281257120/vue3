/*
 * @Description: 增加该配置，在使用import.meta.env会有ts的校验与提示
 * @Author: Liu Yang
 * @Date: 2023-03-20 11:10:51
 * @LastEditTime: 2023-03-20 11:16:43
 * @LastEditors: Liu Yang
 * @FilePath: \vue3\src\env.d.ts
 */
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
}