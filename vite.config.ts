/*
 * @Description: daimai
 * @Author: Liu Yang
 * @Date: 2023-03-14 13:59:27
 * @LastEditTime: 2023-03-17 09:59:58
 * @LastEditors: Liu Yang
 * @FilePath: \test\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      // '@api': resolve(__dirname, './src/api'),
      // '@assets': resolve(__dirname, './src/assets'),
      // '@common': resolve(__dirname, './src/common'),
      // '@components': resolve(__dirname, './src/components'),
      // '@composables': resolve(__dirname, './src/composables'),
      // '@config': resolve(__dirname, './src/config'),
      // '@i18n': resolve(__dirname, './src/i18n'),
      // '@layouts': resolve(__dirname, './src/layouts'),
      // '@pages': resolve(__dirname, './src/pages'),
      // '@router': resolve(__dirname, './src/router'),
      // '@store': resolve(__dirname, './src/store'),
      // '@types': resolve(__dirname, './src/types'),
      // '@utils': resolve(__dirname, './src/utils')
    }
  },
  // css: {
  //   // CSS 预处理器
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import '@/assets/style/variables.scss';`
  //     }
  //   }
  // },
  // resolve: {
  //   alias: {
  //     '@': resolve(__dirname, 'src')
  //   }
  // }

})
