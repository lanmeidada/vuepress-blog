module.exports = {
  title: "lanmeidada",
  description: "蓝莓哒哒博客",
  port: "8111",
  base: '/Wiki1001Pro/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 4, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上
    lastUpdated: 'Last Updated' ,// 文档更新时间：每个文件git最后提交的时间
    logo: "/logo.gif",
      // 顶部导航栏配置
    nav: [
      // 单项 text：显示文字，link：指向链接
      // 这里的'/' 指的是 docs文件夹路径
      // [以 '/' 结尾的默认指向该路径下README.md文件]
      {
        text: "首页",
        link: "/" // '/'默认为docs文件夹下的README.md文件
      },
      {
        text: "文章",
        link: "/view/one"
      },
      {
        text: "友情链接",
        items: [
          {
            text: "Github",
            link: "https://github.com/lanmeidada"
          }
        ]
      }
    ],
    sidebar: [
      {
        title: 'Group 1',   // 必要的
        path: '/foo/',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',   // 必要的
        path: '/view/one',      // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/view/font',
          '/view/one'
        ]
      }
    ]
  }
};
