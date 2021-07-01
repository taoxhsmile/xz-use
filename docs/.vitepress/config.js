const { getRouterConfig } = require('./router');
const { kebabCase } = require('lodash');
const { resolve } = require('path');

const base = process.env.NODE_ENV === 'production' ? '/xz-use' : '';

module.exports = {
  title: 'xz-use',
  description: 'vue hooks',
  alias: {
    'xz-use': resolve('./src/'),
  },
  base,
  // outDir: '../dist',
  themeConfig: {
    lang: 'en-US',
    lastUpdated: '最近更新',
    repo: 'taoxhsmile/xz-use',
    repoLabel: 'Github',
    prevLink: true,
    nextLink: true,
    home: '/zh',
    locales: {
      // '/': {
      //   lang: 'en-US',
      //   title: 'xz-use',
      //   description: 'vue hooks',
      //   label: 'English',
      //   selectText: 'Languages',
      //   nav: [
      //     { text: 'Guide', link: '/' },
      //     { text: 'Document', link: `/${kebabCase('useSize')}/` },
      //   ],
      //   sidebar: getRouterConfig(),
      // },
      '/': {
        lang: 'zh-CN',
        title: 'xz-use',
        description: 'vue hooks',
        label: '中文',
        selectText: '语言',
        nav: [
          { text: '指南', link: '/' },
          { text: '文档', link: `/${kebabCase('useSize')}/` },
        ],
        sidebar: getRouterConfig('/zh/'),
      },
    },
  },
};
