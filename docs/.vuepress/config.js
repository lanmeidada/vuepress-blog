module.exports = {
  title: 'lanmeidada',
  description: '蓝莓哒哒博客',
  port: '8111',
  base: '/Wiki1001Pro/', // 这是部署到github相关的配置
  repo: '', // 添加 github 链接
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
        link: '/windows/powershell配置'
      },
      {
        text: 'javaScript',
        link: '/javaScript/js去除字符串空白字符' // '/'默认为docs文件夹下的README.md文件
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
      '/javaScript/': [
        'js去除字符串空白字符',
      ],
      '/windows/': [
        'powershell配置',
        'scoop使用',
        'node多版本控制'
      ]
    }
  }
};
