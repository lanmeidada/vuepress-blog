module.exports = {
  title: 'lanmeidada',
  description: '蓝莓哒哒博客',
  port: '80',
  base: '/',
  repo: '',
  head: [['link', {rel:'icon', href:'/logo2.ico'}]],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 0, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上
    search: false, // 禁用默认的搜索框
    lastUpdated: 'Last Updated' ,// 文档更新时间：每个文件git最后提交的时间
    logo: '/logo.gif',
    smoothScroll: true, // 启用页面滚动效果
    activeHeaderLinks: false, // 用户通过滚动查看页面的不同部分时，嵌套的标题链接和 URL 中的 Hash 值会实时更新,默认值：true
      // 顶部导航栏配置
    nav: [
      // 单项 text：显示文字，link：指向链接
      // 这里的'/' 指的是 docs文件夹路径
      // [以 '/' 结尾的默认指向该路径下README.md文件]
      {
        text: 'windows',
        link: '/windows/powershell'
      },
      {
        text: 'javaScript',
        link: '/javaScript/js去除字符串空白字符' // '/'默认为docs文件夹下的README.md文件
      },
      {
        text: 'css',
        link: '/css/水平垂直居中'
      },
      {
        text: 'h5',
        link: '/h5/h5-collect'
      },
      {
        text: 'resources',
        link: '/resources/website'
      },
      {
        text: '友情链接',
           // 这里是下拉列表展现形式。
        items: [
          {
            text: 'Github',
            link: 'https://github.com/lanmeidada'
          },
          {
            text: 'TIM',
            link: 'https://raw.githubusercontent.com/lanmeidada/gallery/master/personalContact/tim.png'
          }
        ]
      }
    ],
    sidebar: {
      '/windows/': [
        'powershell',
        'scoop',
        'node'
      ],
      '/javaScript/': [
        'js去除字符串空白字符',
          'Array.includes'
      ],
      '/css/': [
        '水平垂直居中',
        'footer吸底效果'
      ],
      '/h5/': [
        'h5-collect'
      ]

    }
  }
};
