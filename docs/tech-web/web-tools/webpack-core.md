---
title: webpack核心概念
tag: webpack
---
[[toc]]
# webpack核心概念
  webpack是一款静态模块打包器，默认情况下它只支持解析js模块。

## :bell:webpack能对哪些模块进行处理打包呢？

  默认情况下webpack可以处理以下几种模块规范：

::: tip
1. [Es2015模块规范](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) 
  ```
  // 导出模块
  export default {}
  // 导入模块
  import util from '
  ```
1. [CommonJs 模块规范](http://www.commonjs.org/specs/modules/1.0/)
  ```
  //导出模块
  module.exports = {}
  exports.a = {}
  // 导入模块
  const util = require('')
  ```
1. [AMD 模块规范](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)
  ```
  define("alpha", ["require", "exports", "beta"], function (require, exports, beta) {
       exports.verb = function() {
           return beta.verb();
           //Or:
           return require("beta").verb();
       }
   });
  ```  
1. [css里的@import指令](https://developer.mozilla.org/en-US/docs/Web/CSS/@import)
1. 样式文件里的```url('')```,和html文件里的```<img src='...'>```文件
:::
而对于Typescript/sass等则需要专门的loader（ts-loader/sass-loader）来处理。

## :bell:webpack核心概念1-Entry
:one: [Entry Points](https://webpack.js.org/concepts/entry-points/)

:two: jfdslkfj