import{d as k,r as b,k as x,v as N,o as w,c as z,f as a,w as n,a as p,j as i,F as A,m as P,g as G,n as M,q as U,s as Y,_ as q}from"./index-c4034d67.js";const V=m=>(U("data-v-802d1c30"),m=m(),Y(),m),H={class:"vuecesiumWrapper"},J=V(()=>p("div",{class:"vc-box mVcBox"}," aa ",-1)),W=V(()=>p("div",{class:"label-container label-container-var"},[p("div",{class:"label-animate-marker_border"},[p("span",{class:"label-animate-marker_text"},"北京欢迎您")])],-1)),K={class:"position animated animate__backInLeft"},Q=k({name:""}),X=k({...Q,setup(m){b("zh-hans");let r=x([]),t=x({}),y=x({});const S=o=>{console.log(o.cesiumObject),o.viewer.zoomTo(o.cesiumObject),o.cesiumObject.clustering.enabled=!0,o.cesiumObject.clustering.pixelRange=30,o.cesiumObject.clustering.minimumClusterSize=3},_=b(!0),g=b(!0);N(_,()=>{y.scene.camera.changed.raiseEvent()});const j=(o,e)=>{_.value?(e.billboard.show=!0,e.label.show=!1,e.billboard.id=e.label.id,e.billboard.verticalOrigin=t.VerticalOrigin.CENTER,o.length>=300?e.billboard.image="https://zouyaoji.top/vue-cesium/SampleData/images/cluser/300+.png":o.length>=150?e.billboard.image="https://zouyaoji.top/vue-cesium/SampleData/images/cluser/150+.png":o.length>=90?e.billboard.image="https://zouyaoji.top/vue-cesium/SampleData/images/cluser/90+.png":o.length>=30?e.billboard.image="https://zouyaoji.top/vue-cesium/SampleData/images/cluser/30+.png":o.length>10?e.billboard.image="https://zouyaoji.top/vue-cesium/SampleData/images/cluser/10+.png":e.billboard.image="https://zouyaoji.top/vue-cesium/SampleData/images/cluser/"+o.length+".png"):(e.label.show=!0,e.label.scale=.5,e.label.fillColor=t.Color.fromCssColorString("#FFFFFF"),e.label.style=t.LabelStyle.FILL,e.label.font="30px caption",e.label.VerticalOrigin=t.VerticalOrigin.BOTTOM,e.label.pixelOffset=new t.Cartesian2(-7,5),e.label.disableDepthTestDistance=Number.POSITIVE_INFINITY,e.point.show=!0,e.point.id=e.label.id,e.point.color=t.Color.LIGHTSLATEGRAY,o.length>=100?(e.point.pixelSize=38,e.label.pixelOffset=new t.Cartesian2(-12,5)):o.length>=50?e.point.pixelSize=36:o.length>=40?e.point.pixelSize=33:o.length>=30?e.point.pixelSize=28:o.length>=20?e.point.pixelSize=25:o.length>=10?(e.label.pixelOffset=new t.Cartesian2(-6,4),e.label.scale=.4,e.point.pixelSize=20):o.length>=5?(e.label.pixelOffset=new t.Cartesian2(-3,4),e.label.scale=.4,e.point.pixelSize=15):(e.label.pixelOffset=new t.Cartesian2(-3,4),e.label.scale=.4,e.point.pixelSize=13))},I=o=>{console.log(o.Cesium),console.log(o.viewer,o.cesiumObject),y=o.viewer,t=o.Cesium,D({id:"1001",code:"1001",name:"test",iconOn:"https://zouyaoji.top/vue-cesium/SampleData/points/pic.png",giscolor:"#fb7228",datauri:"https://zouyaoji.top/vue-cesium/SampleData/points/custom-data.json"},!0)},D=(o,e)=>{e?t.Resource.fetchJson(o.datauri).then(d=>{const s=new Image;s.src=o.iconOn,s.onload=()=>{let u={name:o.code,clustering:!0,entities:[]};u.entities=d.map(l=>({position:[Number(l.Longitude),Number(l.Latitude),1e3],id:l.id,description:l.name,billboard:{width:s.width,height:s.height,image:o.iconOn,scale:.5},onClick:f=>{console.log("asd",f,l)}})),r.push(u),console.log(r)}}):r=[]};return(o,e)=>{const d=i("vc-overlay-html"),s=i("vc-graphics-point"),u=i("vc-entity"),l=i("vc-datasource-geojson"),f=i("vc-datasource-custom"),O=i("vc-navigation-sm"),R=i("vc-selection-indicator"),F=i("vc-ajax-bar"),v=i("vc-layer-imagery"),h=i("vc-imagery-provider-tianditu"),T=i("vc-viewer"),L=i("vc-config-provider"),C=i("el-switch");return w(),z("div",H,[a(L,null,{default:n(()=>[a(T,{sceneModePicker:"",showCredit:!1,ref:"viewerRef",onReady:I,timeline:!1},{default:n(()=>[a(d,{ref:"html",skyBox:!1,position:[117.186419,45.66446,20],show:!0},{default:n(()=>[J]),_:1},8,["position"]),a(d,{"position:any":{lng:104.04,lat:30.4}},{default:n(()=>[W]),_:1},8,["position:any"]),a(u,{position:[117.186419,45.66446,20]},{default:n(()=>[a(s,{color:"red","pixel-size":8})]),_:1},8,["position"]),a(l,{ref:"datasourceRef",fill:"rgba(0,0,0,0.1)",stroke:"yellow",markerColor:"green",data:"https://zouyaoji.top/vue-cesium/SampleData/geojson/china.json",onReady:S,show:g.value,entities:[]},null,8,["show"]),(w(!0),z(A,null,P(G(r),(c,B)=>(w(),M(f,{key:B,show:!0,name:c.name,ref_for:!0,ref:"datasourceRefs",entities:c.entities,onClusterEvent:j,onReady:S},null,8,["name","entities"]))),128)),a(O,{offset:[50,25]}),a(R,{ref:"selectionIndicator"},null,512),a(F,{position:"bottom",color:"#21BA45",size:"3px",positioning:"fixed"}),a(v,{ref:"layerText"},null,512),a(v,{"sort-order":20},{default:n(()=>[a(h,{"map-style":"cva_c",token:"436ce7e50d27eede2f2929307e6b33c0"})]),_:1}),a(v,{"sort-order":10},{default:n(()=>[a(h,{"map-style":"img_c",token:"436ce7e50d27eede2f2929307e6b33c0"})]),_:1}),a(v,{"sort-order":10},{default:n(()=>[a(h,{"map-style":"img_c","maximum-level":17,token:"436ce7e50d27eede2f2929307e6b33c0",ref:"provider"},null,512)]),_:1})]),_:1},512)]),_:1}),p("div",K,[a(C,{modelValue:_.value,"onUpdate:modelValue":e[0]||(e[0]=c=>_.value=c),"active-text":"聚合方案2","inactive-text":"聚合方案1"},null,8,["modelValue"]),a(C,{modelValue:g.value,"onUpdate:modelValue":e[1]||(e[1]=c=>g.value=c),"active-text":"遮罩","inactive-text":""},null,8,["modelValue"])])])}}});const $=q(X,[["__scopeId","data-v-802d1c30"]]);export{$ as default};