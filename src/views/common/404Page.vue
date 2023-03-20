<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-01 17:48:18
 * @LastEditTime: 2023-03-20 16:30:55
 * @LastEditors: Liu Yang
 * @Description:
 * @FilePath: \vue3\src\views\common\404Page.vue
-->
<template>
  <div class="">
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">噢. 这儿什么也没有...</div>

      <div :to="defaultPagePath"> 返回主页</div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Error404',
  setup(props, ctx) {
    const defaultPagePath = import.meta.env.VITE_VUE_DEFAULT_PATH
    return {
      defaultPagePath
    }
  }
})
</script>
