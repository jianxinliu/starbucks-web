# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue
3 `<script setup>` SFCs, check out
the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (
  and disable
  Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for
type checking. In editors, we
need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented
a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more
performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
  1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
  2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

# 记录

- [X] 使用 Vite 创建项目
- [X] 定义项目中需要的依赖
- [ ] 根据 API 文档生成基础代码
- [ ] 编写前端逻辑 & 页面

## 问题

### 依赖 @types/node

安装该依赖可以解决 node.js 中的类型 typescript 不识别的问题。如不能识别 node.js 的 path 包

### unplugin-xxx

vite 的相关插件，项目中安装的：

1. [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import): 用于自动导入 vue 相关 api, 编码时可以不用手动导入，编译时自动导入
2. [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components): 用于自动导入 vue 的组件
3. [unplugin-element-plus](https://github.com/element-plus/unplugin-element-plus): 用于自动导入 element-plus 相关组件 &
   样式文件

运行项目后，自动生成 auto-imports.d.ts, components.d.ts 等文件

### 根据 swagger 文件自动生成 api 代码

1. 更新 src/api/starbucks-api.swagger.json 文件 （后端生产）
2. 安装 docker
3. 安装 make
4. 运行 `make apis`
5. `src/api/apis` 下的文件都是生产的，不用管，只管调用 `src/api/index.ts` 中对象的方法即可

请求相关的代码就不用管了，直接生成，直接用。更不用对接口


### vite 配置 devServer

vite 配置：

```js
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:8888/',
      changeOrigin: true,
      secure: false,
      rewrite: (path) => path.replace(/^\/api/, '')
    },
    cors: 'false'
  },
}
```

请求参数调整：

```js
const isDev = import.meta.env.MODE === 'dev'
const configParams: ConfigurationParameters = {
    basePath: import.meta.env.VITE_API_BASE_PATH + isDev ? '/api' : '',
};
```