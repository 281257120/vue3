<!--
 * @Description: 
 * @Author: Liu Yang
 * @Date: 2023-03-20 10:37:47
 * @LastEditTime: 2023-03-21 18:02:09
 * @LastEditors: Liu Yang
 * @FilePath: \vue3\src\views\HomePage.vue
-->
<template>
  <div class="wrapper">
    <div class="title">{{ homeStore.title }}</div>
    <img class="logo" :src="imgtest" alt="">
    <h1>vite + vue 3 + ts模板</h1>
    <h1>userStore: {{ userStore.userInfo.userName }}</h1>
  </div>
</template>

<script setup lang="ts">
import { accountLogin } from 'api/home'
import useHomeStore from '@/store/modules/home'
import useUserStore from '@/store/modules/user'
const userStore = useUserStore()
userStore.changeUserName({
  userName: 'pinia使用',
  userId: 123
})
const imgtest = `${import.meta.env.VITE_VUE_ROUTER_BASE}/images/video.svg`
const homeStore = useHomeStore()
let para = { "login_account": "user", "password": "111111" }
accountLogin({ para: JSON.stringify(para) }).then(res => {
  console.log(res)
})
</script>
<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

