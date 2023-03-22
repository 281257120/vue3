<!--
* @Description:
* @Author: Liu Yang
* @Date: 2023-03-17 14:02:49
 * @LastEditTime: 2023-03-21 18:21:33
 * @LastEditors: Liu Yang
-->
<template>
  <div class="vuecesiumWrapper">
    <vc-config-provider>
      <vc-viewer ref="viewerRef" @ready="onViewerReady">
        <vc-navigation></vc-navigation>
        <vc-layer-imagery ref="layerText">
          <vc-imagery-provider-tianditu map-style="cia_c"
            token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
        </vc-layer-imagery>
      </vc-viewer>
    </vc-config-provider>
    <div class="position">
    </div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, computed, nextTick, reactive, ref, watch } from 'vue'
import type { VcReadyObject } from 'vue-cesium/es/utils/types'
defineOptions({
  name: ''
})
let locale = ref('zh-hans')
const onViewerReady = (readyObj: VcReadyObject) => {
  //Cesium 变量即命名空间，你可以通过它访问 CesiumJS 原生的 API，例如 Cesium.Cartesian3；而 viewer 参数则是观察者实例，参考 CesiumJS 官方文档即可
  console.log(readyObj.Cesium) // Cesium namespace object
  console.log(readyObj.viewer) // instanceof Cesium.Viewer
}
</script>
<style  lang='scss' scoped>
.vuecesiumWrapper {
  position: relative;

  .position {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>