import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	site: 'https://graceanand.dev',
	integrations: [mdx(), sitemap(), react(), tailwind()],
	markdown: {
		shikiConfig: {
			theme: 'one-dark-pro',
		},
	},
});
