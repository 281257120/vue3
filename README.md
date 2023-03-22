## 关于

这个项目是基于 vite + vue3 + TS 的前端集成方案，已使用最新的前端技术栈。

已经做好项目前期基本的准备工作，并附有示例代码，助力项目快速开发。

项目中用到了 Vite + Typescript 进行开发，使用 Vue 3 `<script setup>` SFCs，查看 [script setup docs](https://cn.vuejs.org/api/sfc-script-setup.html#typescript-only-features) 学习更多。

推荐使用node16+版本，本模板（v16.17.1）。


## 开发 IDE

- [VSCode](https://code.visualstudio.com/)
- 用 vscode 打开项目后，会提示推荐安装的扩展，请安装。

## 功能点

- 使用 vite 构建
- 模块化全局状态管理(基于 pinia)
- 封装了 axios 和请求模拟
- 代码提交规范
- 暗黑模式
- 集成VueCesium

## 安装

约定只能用 [pnpm](https://pnpm.io/) 管理项目依赖。

命令

```bash
$ pnpm i
```

将安装所有依赖。

## 预览

命令

```bash
$ pnpm dev
```

将启动站点供您预览已开发的页面组件。

## 打包

命令

```bash
$ pnpm build
```


## 开发说明

- 统一采用 Vue3 组合式 API 写法。
- 业务复杂的组件应该拆分成小组件，避免一个单组件代码过长，逻辑不清晰的情况出现。
- 业务复杂的组件应该拆分业务，多使用 Composition API 的函数拆分逻辑，如 useXXX。

## 风格指南

### 组件名为多个单词

**组件名应该始终是多个单词的，根组件 App 以及 <transition>、<component> 之类的 Vue 内置组件除外。**

这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。

```ts
export default defineComponent({
  name: 'TodoItem'
  // ...
})
```

```ts
<script lang="ts" setup>
defineOptions({
  name: 'VcDemoViewer'
})
</script>
```

```ts
app.use('todo-item', {
  // ...
})
```

### 避免 v-if 和 v-for 用在一起

**永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上。**

一般我们在两种常见的情况下会倾向于这样做：

为了过滤一个列表中的项目 (比如 v-for="user in users" v-if="user.isActive")。在这种情形下，请将 users 替换为一个计算属性 (比如 activeUsers)，让其返回过滤后的列表。

为了避免渲染本应该被隐藏的列表 (比如 v-for="user in users" v-if="shouldShowUsers")。这种情形下，请将 v-if 移动至容器元素上 (比如 ul、ol)。

### 为组件样式设置作用域

**对于应用来说，顶级 App 组件和布局组件中的样式可以是全局的，但是其它所有组件都应该是有作用域的。**

### 单文件组件文件名的大小写

单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。

components/
|- MyComponent.vue

components/
|- my-component.vue

### 完整单词的组件名

**组件名应该倾向于完整单词而不是缩写。**

编辑器中的自动补全已经让书写长命名的代价非常之低了，而其带来的明确性却是非常宝贵的。不常用的缩写尤其应该避免。

### 简单的计算属性

**应该把复杂计算属性分割为尽可能多的更简单的 property。**
