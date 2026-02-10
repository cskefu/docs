// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '春松客服',
  tagline: '迭代客服系统助力企业持续成长',
  url: 'https://docs.cskefu.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cskefu', // Usually your GitHub org/user name.
  projectName: 'cskefu-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cskefu/docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cskefu/docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  {
    navbar: {
      title: '春松客服',
      logo: {
        alt: '春松客服图标',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: '文档中心',
        },
        { to: 'https://www.cskefu.com/', label: '官网', position: 'left' },
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          href: 'https://www.chatopera.com/mail.html',
          label: '商务洽谈',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '入门教程',
              to: '/docs/quickstart/',
            },
            {
              label: '成功案例',
              href: 'https://www.chatopera.com/customer.html',
            },
          ],
        },
        {
          title: '新闻',
          items: [
            {
              label: '上线 AI 机器人',
              href: 'https://mp.weixin.qq.com/s/WMEfQyaFFv8dIuDGtJsxlQ',
            },
            {
              label: '春松客服 v10 发布',
              href: 'https://mp.weixin.qq.com/s/WMEfQyaFFv8dIuDGtJsxlQ',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '联系我们',
              to: 'https://www.chatopera.com/mail.html',
            },
            {
              label: '产品或服务价格',
              href: 'https://www.chatopera.com/price.html',
            },
          ],
        },
      ],
      copyright: `Copyright © 2018-${new Date().getFullYear()} 北京华夏春松科技有限公司 | 京公网安备:<a href="https://beian.miit.gov.cn/">京ICP备20023756号-2</a> | 使用 <a href="https://docusaurus.io/">Docusaurus</a> 构建, <a href="https://github.com/cskefu/docs">站点源码</a>`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    // https://docusaurus.io/docs/api/themes/configuration
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    }
  },
};

module.exports = config;
