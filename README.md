# @bdlite/vue3-bdlite

此项目为vue3针对开发过程的改造，旨在助力消灭vue自带的副作用，尽可能让状态可复用又不会受到其他副作用干扰。

>vue3基于功能和组合的逻辑打法一定程度上让开发者如行云流水般实现组件内部上下文的因果关系，一旦考虑到复用初始状态及组合函数时，可导出、可解构和可信任的初始值这几个问题都促使该项目提供了本套方案，不算是高明但可让多人开发的隔离需要得以解决。


## Features

- 使用utils提供的conbineReactUse将state和use函数分离，并返回一些带有只读性质和保有响应式的属性
- 初步utils提供了configRouter把路由配置分散到各自一级甚至嵌套层级中，目录结构基本与views保持一致
- 后续还会有一些工程化的配套设施

## Development

Use Gitpod, a free online dev environment for GitHub.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/bdlite/vue3-bdlite)

clone locally:

```bash
$ git clone git@github.com:bdlite/vue3-bdlite.git
$ cd vue3-bdlite
$ npm install
$ npm run dev
```

Open your browser and visit http://127.0.0.1:3000/ or http://localhost:3000/.
