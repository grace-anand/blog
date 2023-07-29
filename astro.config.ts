import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import rehypePrettyCode from 'rehype-pretty-code';

const prettyCodeOptions = {
	theme: 'one-dark-pro',
};

export default defineConfig({
	site: 'https://graceanand.dev',
	integrations: [mdx(), sitemap(), react(), tailwind()],
	markdown: {
		syntaxHighlight: false,
		rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
		shikiConfig: { theme: 'one-dark-pro' },
	},
	experimental: {
		assets: true,
	},
});
