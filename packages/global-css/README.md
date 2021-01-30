# GLOBAL CSS

### 什么是 GLOBAL CSS？
Global CSS是micro-react的一部分，用来共享全局的CSS，作用于主应用(app-main)、子应用(app-*)及业务共享的组件库(ui-component)。 目的是在开发组件库、子应用亦或主应用时拥有统一的全局样式环境，避免由于开发环境样式的不一致导致的调整。 目前集成了[tailwindcss](//tailwindcss.com/)，可基于tailwindcss做快速的功能开发。

### Tailwindcss
使用详情请去查看官方文档(https://tailwindcss.com) 或自行搜索相关资源。

### Customize
暂时还没有自定义的功能，新增功能时请在这里添加相应文档....

### 开发GLOBAL CSS
1. 启动服务：npm run start
2. 打包：npm run build

### TODO:
1. lerna发布流程还未完成
2. 是否要单独提供customization文档
3. 是否要提供一个Playground供调试
