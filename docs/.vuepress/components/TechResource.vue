<!--程序员导航-->
<template>
  <div class="my-nav container">
    <!-- <div class="block text-center py-4 text-2xl">程序员.导航</div> -->
    <div class="card bg-orange-100 my-4" v-for="card in cardList" :key="card.title">
      <div class="block p-2 border-b">
        <span class="border-green-400 border-2 h-4"></span>
        <span class="ml-4">{{card.title}}</span>
      </div>
      <div class="flex flex-wrap p-1">
        <a
          class="inline-block card-content-item shadow-outline focus:outline-none text-black p-2 mx-3 my-4 rounded-sm"
          v-for="item in card.urlList"
          :key="item.url"
          target="_blank"
          :href="item.url"
        >{{item.name}}</a>
      </div>
    </div>
  </div>
</template>
<script>
// 划水网站
const huashuiList = [
  {name: '投资界', url: 'https://www.pedaily.cn/index1.shtml'}
]
// 优秀的代码
const githubResourceList = [
    {name: 'css框架-tailwindcss', url: 'https://www.tailwindcss.cn/'}, 
    {name: '李连政-项目2', url: 'www.baidu2.com'}
  ]
// 技术博客
const blogResourceList = [
  {
    name: "阮一峰的博客",
    url: "http://www.ruanyifeng.com/home.html"
  },
  {
    name: "阿里数据中台前端团队分享",
    url: "https://zhuanlan.zhihu.com/purerender"
  },
  {
    name: "腾讯CDC",
    url:
      "https://cdc.tencent.com/2018/12/20/%E5%BE%AE%E4%BF%9D-%E8%BD%A6%E9%99%A9-%E9%A1%B9%E7%9B%AE%E8%AE%BE%E8%AE%A1%E5%B0%8F%E7%BB%93/"
  }
];

// 高质量免费图片资源
const imageResourceList = [
  {
    name: "百度搜图",
    url:
      "https://image.baidu.com/search/index?tn=baiduimage&ipn=r&ct=201326592&cl=2&lm=-1&st=-1&fm=result&fr=&sf=1&fmq=1580724043961_R&pv=&ic=&nc=1&z=&hd=&latest=&copyright=&se=1&showtab=0&fb=0&width=&height=&face=0&istype=2&ie=utf-8&sid=&word=%E7%BE%8E%E6%99%AF"
  }
];
// 在线学习资源
const studyOnlineResourceList = [
  {
    name: "leetcode-cn",
    url: "https://leetcode-cn.com/"
  },
  {
    name: "coding game",
    url: "https://www.codingame.com/home"
  }
];
export default {
  data() {
    return {
      cardList: [
        {
          title: '划水网站',
          urlList: huashuiList
        },
        {
          title: '优秀的代码',
          urlList: githubResourceList
        },
        {
          title: "高质量博客",
          urlList: blogResourceList
        },
        {
          title: "高质量图片资源",
          urlList: imageResourceList
        },
        {
          title: "在线学习资源",
          urlList: studyOnlineResourceList
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style>
/* @import "tailwindcss/base";

  @import "tailwindcss/components";

  @import "tailwindcss/utilities"; */
/* .theme-default-content{
    margin: 0 !important;
  } */

  a:hover {
    color: #e67e22;
    text-decoration-line: none !important;
  }
</style>