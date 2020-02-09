// .vuepress/config.js
module.exports = {
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/pwa',
    '@vuepress/nprogress',
    {
    serviceWorker: true,
    updatePopup: true
  }],
  base: '/',
  theme: 'cool',
  //dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/faviconCustom.ico' }],
    // ['link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css' }],
    // ['link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre-icons.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
  ],
  
  themeConfig: {
    logo: './llz_avatar.png',
    search: false,
    displayAllHeaders: true,
    sidebar: {
      '/tech-manage': [
        {
          title: 'tech-manage',   // 必要的
          path: '/tech-manage/',      // 可选的, 应该是一个绝对路径
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: [
            // '/home2'
          ]
        }
      ],
      '/tech-web/': [
        {
          title: '程序员高效搜索',   // 必要的
          path: '/tech-resource/search',      // 可选的, 应该是一个绝对路径
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 0,
        },
        {
          title: '前端构建工具',   // 必要的
          path: '/tech-web/web-tools/',      // 可选的, 应该是一个绝对路径
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,
          children:[
            'web-tools/webpack-plugin'
          ]
        },
        {
          title: '前端架构',
          path: '/tech-web/web-architecture/',
          collapsable: false, 
          sidebarDepth: 1, 
          children: [
            // '',
            'web-architecture/micro-frontend',
          ]
        },
        {
          title: '前端测试',
          path: '/tech-web/web-test/',
          collapsable: false, 
          sidebarDepth: 1, 
          children: [
            // '',
            'web-test/jest',
            'web-test/vue-test'
          ]
        },
        {
          title: '小程序',   // 必要的
          path: '/tech-web/',      // 可选的, 应该是一个绝对路径
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            // ''
          ]
        },
        
      ],
      '/tech-resource': [ //程序员导航
        {
          title: 'tech-resource',   // 必要的
          path: '/tech-resource/',      // 可选的, 应该是一个绝对路径
          collapsable: false, // 可选的, 默认值是 true,
        }
      ],
      '/': [

        '',
        'admonitions',
        'diagrams',
        'charts-math',
        'custom-components'
      ]
    },
    sidebarDepth: 2,
    // displayAllHeaders: true, // Default: false
    nav: [
      { text: '程序员.导航', link: '/tech-resource/' },
      { text: '技术.前端', link: '/tech-web/' },
      { text: '技术.管理', link: '/tech-manage/' },
      { text: 'Admonitions', link: '/admonitions' },
      { text: 'Diagrams', link: '/diagrams' },
      { text: 'Charts And Math', link: '/charts-math' },
      { text: 'Custom Components', link: '/custom-components' }
    ],
    lastUpdated: 'Last Updated', // string | boolean
    repo: 'llz383455526/llzdev.site',
    repoLabel: 'Github',
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',
    smoothScroll: true

  },
  title: 'Llzdev site',
  description: 'llz dev site',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '../img'
      }
    }
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: true },
    // options for markdown-it-toc
    toc: { includeLevel: [2,3,4] },
    extendMarkdown: md => {
      md.set({ html: true })
      md.use(require('markdown-it-katex'))
      md.use(require('markdown-it-plantuml'))
      md.use(require('markdown-it-admonition'))
    }
  }
}