/*
 * @Description: daimai
 * @Author: Liu Yang
 * @Date: 2023-03-14 13:59:27
 * @LastEditTime: 2023-03-20 16:55:20
 * @LastEditors: Liu Yang
 * @FilePath: \vue3\vite.config.ts
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import postCssPxToRem from 'postcss-pxtorem'
import defineOptions from 'unplugin-vue-define-options/vite'
// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    base: process.env.VITE_VUE_ROUTER_BASE,
    plugins: [vue(), defineOptions()],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '#': resolve(__dirname, './src/types'),
        utils: resolve(__dirname, './src/utils'),
        api: resolve(__dirname, './src/api')
      }
    },
    // css: {
    //Rem 布局适配：移动端使用（ui图设置390宽度）
    // postcss: {
    //   plugins: [
    //     postCssPxToRem({
    //       rootValue: 39,
    //       propList: ['*'],
    //     })
    //   ]
    // }
    // },

    // server: {
    //   host: '0.0.0.0',
    //   https: false,
    //   port: 3000,
    //   proxy: {
    //     '/traffictile': {
    //       target: 'https://tm.amap.com/trafficengine/mapabc/traffictile',
    //       changeOrigin: true,
    //       rewrite: path => path.replace(/^\/traffictile/, '/')
    //     },
    //     '/v3': {
    //       target: 'https://restapi.amap.com/v3',
    //       changeOrigin: true,
    //       rewrite: path => path.replace(/^\/v3/, '/')
    //     },
    //     '/geoserver': {
    //       target: 'http://47.111.68.226:8080/geoserver',
    //       changeOrigin: true,
    //       rewrite: path => path.replace(/^\/geoserver/, '/')
    //     }
    //   }
    // },
    // define: {
    //   __APP_VERSION__: JSON.stringify(packageJson.version)
    // }
  })
}

