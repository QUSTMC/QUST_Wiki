// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://qustwiki.aurelith.top',
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
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
	// 解决 Cloudflare Pages 构建时 @bruits/satteri-wasm32-wasi 模块无法解析的问题
	vite: {
		build: {
			rolldownOptions: {
				external: ['@bruits/satteri-wasm32-wasi'],
			},
		},
	},
});