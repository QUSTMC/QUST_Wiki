// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark'; // 1. 导入 remark 处理器

// https://astro.build/config
export default defineConfig({
  site: 'https://qustwiki.aurelith.top', // 替换为你的实际域名
  markdown: {
    processor: unified(), // 2. 指定使用 remark 处理器
  },
  integrations: [
    starlight({
      title: 'My Docs',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          items: [{ autogenerate: { directory: 'reference' } }],
        },
      ],
    }),
  ],
  // 注意：之前添加的 vite.build.rolldownOptions.external 配置已移除
});