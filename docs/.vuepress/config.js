module.exports = {
  title: "Dxjs",
  description: "基于 redux-saga 的状态管理工具",
  head: [
    [
      "link",
      {
        rel: "icon",
        href:
          "https://hudson-bucket.oss-cn-shenzhen.aliyuncs.com/localhomeqy/huhulogo/Logo2.png",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ], //在移动端，搜索框在获得焦点时会放大
  ],

  themeConfig: {
    logo:
      "https://hudson-bucket.oss-cn-shenzhen.aliyuncs.com/localhomeqy/huhulogo/Logo2.png",
    displayAllHeaders: true,
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" },
      { text: "API", link: "/api" },
      { text: "讨论", link: "https://github.com/taixw2/dxjs/issues" },
      { text: "github", link: "https://github.com/taixw2/dxjs" },
    ],

    sidebar: {
      "/guide/": ["", "use"],
    },
  },

  plugins: [
    ["vuepress-plugin-smooth-scroll"], // 平滑滚动
    ["@vuepress/nprogress"], // 加载进度条
    ["reading-progress"], // 阅读进度条
  ],
};
