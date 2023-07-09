import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import remarkCodeTitles from 'remark-code-titles';

export default defineConfig({
	site: 'https://graceanand.dev',
	integrations: [mdx(), sitemap(), react(), tailwind()],
	markdown: {
		remarkPlugins: [remarkCodeTitles],
		shikiConfig: { theme: 'one-dark-pro' },
	},
});
