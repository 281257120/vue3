<!--
 * @Description: 设置
 * @Author: Liu Yang
 * @Date: 2023-03-17 14:02:49
 * @LastEditTime: 2023-03-21 18:08:08
 * @LastEditors: Liu Yang
 * @FilePath: \vue3\src\components\UserSetting.vue
-->
<template>
  <div class="wrapper">
    <el-switch v-model="mDark" @change="toggleDark()" />暗黑模式
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import useSettingStore from '@/store/modules/setting'
const settingStore = useSettingStore()
let mDark = ref(settingStore.isDark)
const isDark = useDark({
  onChanged(dark: boolean) {
    mDark.value = dark
    settingStore.changeIsDark(dark)
    useDark()
  },
})
const toggleDark = useToggle(isDark)
</script>
<style lang="scss" scoped></style>  
