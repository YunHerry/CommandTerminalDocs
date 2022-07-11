module.exports = {
  title: 'CommandTerminal',
  description: '一套高性能的Java控制台组件库',
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
          { text: '笔记', link: '/guide/ts/' },// 以 ‘/’结束，默认读取 README.md
          { text: '其它链接', link: 'https://www.baidu.com/' } // 外部链接
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