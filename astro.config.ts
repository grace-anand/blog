import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { theme } from './src/lib/utils/code/syntax-highlighting-theme';

export default defineConfig({
	site: 'https://graceanand.dev',
	integrations: [mdx(), sitemap(), react(), tailwind()],
	markdown: {
		shikiConfig: { theme },
	},
});
