<!--
* @Description: 布局
* @Author: Liu Yang
* @Date: 2023-03-17 14:02:49
 * @LastEditTime: 2023-03-21 18:25:39
 * @LastEditors: Liu Yang
-->
<template>
  <div class="wrapper">
    <el-menu :router="true" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="(item, index) in menuLs" :key="index" :index="item.path">{{ item.name }}</el-menu-item>
      <UserSetting class="setting" />
    </el-menu>
    <router-view class="content" />
  </div>
</template>
<script setup lang='ts'>
import { reactive } from 'vue'
import UserSetting from '@/components/UserSetting.vue'
import routes from '@/router/routes/modules/common'
defineOptions({
  name: ''
})
let activeIndex: string
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const menuLs: any = reactive([])
// 获取modules中的路由规则
routes[0]?.children?.forEach((ele: any, index) => {
  if (index == 0) activeIndex = ele.path
  let obj = {
    name: ele.name,
    path: ele.path,
  }
  menuLs.push(obj)
})

</script>
<style  lang='scss' scoped>
.wrapper {
  position: relative;
}

.setting {
  position: absolute;
  right: 10px;
  top: 0px;
  height: 100%;
  display: flex;
  align-items: center;
}

.content {
  height: calc(100% - 59px);
}
</style>