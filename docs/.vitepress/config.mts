import { defineConfig } from 'vitepress'
import _theme from './theme.js';
// https://vitepress.dev/reference/site-config
export default {
  title: "bxb",
  description: "A VitePress Site",
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '../temp/binfor-icon.png' }]],
  /** 打包项目的根目录 */
  base: '/bxb/',
  themeConfig: _theme
}
