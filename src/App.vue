<!--
 * @Description: daimai
 * @Author: Liu Yang
 * @Date: 2023-03-09 17:13:20
 * @LastEditTime: 2023-03-23 11:55:39
 * @LastEditors: Liu Yang
 * @FilePath: \vue3\src\App.vue
-->

<template>
  <router-view class="mWrapper" :class="{ 'isDark': settingStore.isDark }" />
</template>

<script lang="ts" setup>
import useSettingStore from '@/store/modules/setting'
const settingStore = useSettingStore()

</script>

<style lang="scss" scoped>
.mWrapper {
  box-sizing: border-box;
  // padding: 10px;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  position: relative;
}

.isDark {
  background-image: url('/images/bg-mask.png');
}
</style>
