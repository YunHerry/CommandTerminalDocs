module.exports = {
  title: 'CommandTerminal',
  description: '一套高性能的Java控制台组件库',
  base: '/CommandTerminalDocs/',
  dest: 'public',
  themeConfig: {// 主题设置
    nav: [// 导航栏
      {
        text: '指南',
        link: '/guide/start'
      }, {
        text: '配置',
      }, {
        text: '选择语言',
        items: [
          { text: 'CN', link: '/guide/CN/' },// 以 ‘/’结束，默认读取 README.md
          { text: 'EN', link: '/GUIDE/EN/' } // 外部链接
        ]
      }, {
        text: '贡献者',
        link: 'https://github.com/YunHerry/CommandTerminal'
      }, {
        text: 'Github',
        link: 'https://github.com/YunHerry/CommandTerminal'
      }
    ]
  }
}