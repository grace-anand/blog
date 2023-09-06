import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import rehypePrettyCode from 'rehype-pretty-code';
import prettyCodeOptions from './src/lib/utils/code/prettyCodeOptions';

export default defineConfig({
	site: 'https://anandr.vercel.app',
	integrations: [mdx(), sitemap(), react(), tailwind()],
	markdown: {
		syntaxHighlight: false,
		rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
		shikiConfig: { theme: 'one-dark-pro' },
	},
	vite: {
		optimizeDeps: {
			exclude: ['@resvg/resvg-js'],
		},
	},
});
