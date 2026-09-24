// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'QUSTMC',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/QUSTMC/QUST_Wiki' }],
			sidebar: [
				{
					label: '简介',
					items: [{ autogenerate: { directory: '社团介绍' } }],
				},
				{
					label: '指南',
					items: [
						// Each item here is one entry in the navigation menu.
						{ autogenerate: { directory: '入服须知' } },
					],
				},
				{
					label: '参考',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
