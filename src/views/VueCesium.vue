<!--
* @Description:
* @Author: Liu Yang
* @Date: 2023-03-17 14:02:49
 * @LastEditTime: 2023-03-24 09:49:26
 * @LastEditors: Liu Yang
-->
<template>
  <div class="vuecesiumWrapper">
    <vc-config-provider>
      <vc-viewer sceneModePicker :showCredit="false" ref="viewerRef" @ready="onViewerReady" :timeline="false">
        <!-- 覆盖物 -->
        <vc-overlay-html ref="html" :skyBox="false" :position="[117.186419, 45.66446, 20]" :show="true">
          <div class="vc-box mVcBox">aa</div>
        </vc-overlay-html>
        <vc-overlay-html :position:any="{ lng: 104.04, lat: 30.40 }">
          <div class="label-container label-container-var">
            <div class="label-animate-marker_border">
              <span class="label-animate-marker_text">北京欢迎2您</span>
            </div>
          </div>
        </vc-overlay-html>
        <vc-entity :position="[117.186419, 45.66446, 20]">
          <vc-graphics-point color="red" :pixel-size="8"></vc-graphics-point>
        </vc-entity>
        <vc-datasource-geojson ref="datasourceRef" fill='rgba(0,0,0,0.1)' stroke="yellow" markerColor="green"
          data="https://zouyaoji.top/vue-cesium/SampleData/geojson/china.json" @ready="onDatasourceReady" :show="shade"
          :entities="[]"></vc-datasource-geojson>
        <!-- 自定义数据源 -->
        <vc-datasource-custom :key="index" :show="true" :name="datasource.name" v-for="(datasource, index) of datasources"
          ref="datasourceRefs" :entities="datasource.entities" @cluster-event="onDatasourceClusterEvent"
          @ready="onDatasourceReady">
        </vc-datasource-custom>
        <!-- 导航 -->
        <vc-navigation-sm :offset="[50, 25]">
        </vc-navigation-sm>
        <!-- 选择器 -->
        <vc-selection-indicator ref="selectionIndicator"></vc-selection-indicator>
        <!-- 请求进度条 -->
        <vc-ajax-bar position="bottom" color="#21BA45" size="3px" positioning="fixed"></vc-ajax-bar>
        <!-- 图元 -->
        <!-- <vc-primitive-tileset url="https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json" -->
        <!-- @ready-promise="onTilesetReady"> -->
        <!-- </vc-primitive-tileset> -->
        <!-- 地形  -->
        <!-- <vc-terrain-provider-tianditu ref="provider" -->
        <!-- token="436ce7e50d27eede2f2929307e6b33c0"></vc-terrain-provider-tianditu> -->
        <!-- <vc-terrain-provider-arcgis ref="provider"></vc-terrain-provider-arcgis> -->
        <!-- <vc-terrain-provider-cesium ref="provider"></vc-terrain-provider-cesium> -->
        <!-- 影像 -->
        <vc-layer-imagery ref="layerText"></vc-layer-imagery>
        <vc-layer-imagery :sort-order="20">
          <vc-imagery-provider-tianditu map-style="cva_c"
            token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
        </vc-layer-imagery>
        <vc-layer-imagery :sort-order="10">
          <vc-imagery-provider-tianditu map-style="img_c"
            token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
        </vc-layer-imagery>
        <vc-layer-imagery :sort-order="10">
          <vc-imagery-provider-tianditu map-style="img_c" :maximum-level="17" token="436ce7e50d27eede2f2929307e6b33c0"
            ref="provider"></vc-imagery-provider-tianditu>
        </vc-layer-imagery>
      </vc-viewer>
    </vc-config-provider>
    <div class="position animate__animated animate__backInLeft">
      <el-switch v-model="clusterSch" active-text="聚合方案2" inactive-text="聚合方案1"></el-switch>
      <el-switch v-model="shade" active-text="遮罩" inactive-text=""></el-switch>
    </div>
  </div>
</template>
<script setup lang='ts'>
import 'vue-cesium/dist/index.css'
import { onMounted, computed, nextTick, reactive, ref, watch } from 'vue'
import type { VcReadyObject } from 'vue-cesium/es/utils/types'
defineOptions({
  name: ''
})

let locale = ref('zh-hans')

let datasources: any = reactive([])

let Cesium: any = reactive({})
let _viewer: any = reactive({})

const onDatasourceReady = (readyObj: any) => {
  // window.cesiumObject = cesiumObject
  console.log(readyObj.cesiumObject)
  readyObj.viewer.zoomTo(readyObj.cesiumObject)
  //开启聚合功能
  readyObj.cesiumObject.clustering.enabled = true
  readyObj.cesiumObject.clustering.pixelRange = 30
  readyObj.cesiumObject.clustering.minimumClusterSize = 3
}
const clusterSch = ref(true)
const shade = ref(true)


watch(clusterSch, () => {
  _viewer.scene.camera.changed.raiseEvent()
})
const onDatasourceClusterEvent = (clusteredEntities: any, cluster: any) => {
  if (clusterSch.value) {
    cluster.billboard.show = !0
    cluster.label.show = !1
    cluster.billboard.id = cluster.label.id
    cluster.billboard.verticalOrigin = Cesium.VerticalOrigin.CENTER
    clusteredEntities.length >= 300
      ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/300+.png')
      : clusteredEntities.length >= 150
        ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/150+.png')
        : clusteredEntities.length >= 90
          ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/90+.png')
          : clusteredEntities.length >= 30
            ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/30+.png')
            : clusteredEntities.length > 10
              ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/10+.png')
              : (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/' + clusteredEntities.length + '.png')
  } else {
    cluster.label.show = true
    cluster.label.scale = 0.5
    cluster.label.fillColor = Cesium.Color.fromCssColorString('#FFFFFF')
    cluster.label.style = Cesium.LabelStyle.FILL
    cluster.label.font = '30px caption'
    cluster.label.VerticalOrigin = Cesium.VerticalOrigin.BOTTOM
    cluster.label.pixelOffset = new Cesium.Cartesian2(-7, 5)
    cluster.label.disableDepthTestDistance = Number.POSITIVE_INFINITY
    cluster.point.show = true
    //聚合体属性
    cluster.point.id = cluster.label.id
    cluster.point.color = Cesium.Color.LIGHTSLATEGRAY
    if (clusteredEntities.length >= 100) {
      cluster.point.pixelSize = 38
      cluster.label.pixelOffset = new Cesium.Cartesian2(-12, 5)
    } else if (clusteredEntities.length >= 50) {
      cluster.point.pixelSize = 36
    } else if (clusteredEntities.length >= 40) {
      cluster.point.pixelSize = 33
    } else if (clusteredEntities.length >= 30) {
      cluster.point.pixelSize = 28
    } else if (clusteredEntities.length >= 20) {
      cluster.point.pixelSize = 25
    } else if (clusteredEntities.length >= 10) {
      cluster.label.pixelOffset = new Cesium.Cartesian2(-6, 4)
      cluster.label.scale = 0.4
      cluster.point.pixelSize = 20
    } else if (clusteredEntities.length >= 5) {
      cluster.label.pixelOffset = new Cesium.Cartesian2(-3, 4)
      cluster.label.scale = 0.4
      cluster.point.pixelSize = 15
    } else {
      cluster.label.pixelOffset = new Cesium.Cartesian2(-3, 4)
      cluster.label.scale = 0.4
      cluster.point.pixelSize = 13
    }
  }
}

const onTilesetReady = (tileset: any, viewer: any) => {
  // const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)
  // const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height)
  // const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 5)
  // const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())
  // tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)
  viewer.zoomTo(tileset)
  console.log(tileset)
  viewer.scene.globe.depthTestAgainstTerrain = true
  // this.restoreCursorMove = 'auto'
  // this.drawing = false
}
const onViewerReady = (readyObj: VcReadyObject) => {
  //Cesium 变量即命名空间，你可以通过它访问 CesiumJS 原生的 API，例如 Cesium.Cartesian3；而 viewer 参数则是观察者实例，参考 CesiumJS 官方文档即可
  console.log(readyObj.Cesium) // Cesium namespace object
  console.log(readyObj.viewer, readyObj.cesiumObject) // instanceof Cesium.Viewer
  _viewer = readyObj.viewer
  Cesium = readyObj.Cesium
  const options = {
    id: '1001',
    code: '1001',
    name: 'test',
    iconOn: 'https://zouyaoji.top/vue-cesium/SampleData/points/pic.png',
    giscolor: '#fb7228',
    datauri: 'https://zouyaoji.top/vue-cesium/SampleData/points/custom-data.json'
  }
  addPoints(options, true)
}
const addPoints = (options: any, flag: boolean) => {
  if (flag) {
    Cesium.Resource.fetchJson(options.datauri).then((res: any) => {
      const img = new Image()
      img.src = options.iconOn
      img.onload = () => {
        let datasource: any = {
          name: options.code,
          clustering: true,
          entities: []
        }
        datasource.entities = res.map((cur: any) => {
          return {
            position: [Number(cur.Longitude), Number(cur.Latitude), 1000],
            id: cur.id,
            description: cur.name,
            billboard: {
              width: img.width,
              height: img.height,
              image: options.iconOn,
              scale: 0.5
            },
            onClick: (e: any) => {
              console.log('asd', e, cur)
            }
          }
        })

        datasources.push(datasource)
        console.log(datasources)
      }
    })
  } else {
    datasources = []
  }
}

</script>
<style  lang='scss' scoped>
.vuecesiumWrapper {
  position: relative;

  :deep(.cesium-viewer-bottom) {
    // display: none;
  }

  .mVcBox {
    color: red;
    background-image: url('/images/bg-stack-button-active.png');
    background-size: 100% 100%;
  }

  .position {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>