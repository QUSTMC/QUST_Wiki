// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark'; // 1. 导入 unified

export default defineConfig({
  site: 'https://qustwiki.aurelith.top',
  markdown: {
    processor: unified(), // 2. 传入 unified() 的调用结果，而不是字符串
  },
  integrations: [
    starlight({
      title: 'QUSTMC',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/orgs/QUSTMC' }],
      sidebar: [
        {
          label: 'Guides',
          items: [{ label: 'Example Guide', slug: 'guides/example' }],
        },
        {
          label: 'Reference',
          items: [{ autogenerate: { directory: 'reference' } }],
        },
      ],
    }),
  ],
});