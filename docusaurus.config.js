// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '春松客服',
  tagline: '迭代客服系统助力企业持续成长',
  // url: 'https://docs.cskefu.com',
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
            'https://github.com/cskefu/cskefu-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cskefu/cskefu-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
          {
            to: 'blog',
            position: 'left',
            label: '博客',
          },
          {to: 'https://github.com/cskefu/cskefu', label: '源码仓库', position: 'left'},
          {to: 'https://www.cskefu.com/', label: '官网', position: 'left'},
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          {
            href: 'https://github.com/cskefu/cskefu-docs',
            label: 'GitHub',
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
                label: '应用部署',
                to: '/docs/deploy/',
              },
              {
                label: '开发环境搭建',
                to: '/docs/osc/engineering',
              },
              {
                label: '提交代码',
                to: '/docs/osc/contribution',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: '组织原则',
                href: 'https://www.cskefu.com/community-constitution/',
              },
              {
                label: '关于我们',
                href: 'https://www.cskefu.com/about/',
              },
              {
                label: '加入我们',
                href: 'https://www.cskefu.com/join-us/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: '邮件列表',
                to: 'https://lists.cskefu.com/cgi-bin/mailman/listinfo/dev',
              },
              {
                label: 'Rss',
                href: 'https://www.cskefu.com/feed/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 春松客服，Inc. 使用 <a href="https://docusaurus.io/">Docusaurus</a> 构建`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
