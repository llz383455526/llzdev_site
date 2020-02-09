---
sidebar: false
---
# 如何进行高效搜索
## github高效搜索
#### (强烈推荐)用法1： awesome 关键词
```
awesome canvas
```
#### 用法1： 关键词 in: name,description,readme
```
//示例
canvas in:name,readme
```
#### 用法2： 关键词 stars forks
```
//示例1 
canvas stars:>1000 forks:>1000
// 示例2
canvas stars:20..100 forks:30..80
```
#### 用法4：高亮代码区间#L
```
//示例，vue源码对数据进行拦截的核心代码：defineReactive
https://github.com/vuejs/vue/blob/dev/src/core/observer/index.js#L135-L194
```

#### 用法5：按下t键，触发项目内搜索文件。
> 更多功能与快捷键：https://help.github.com/en/github/getting-started-with-github/keyboard-shortcuts
#### 用法6：查找志同道合的同志:
```
location:广州 language:javascript
```