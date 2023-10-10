import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '@config/consts';

export async function get(context) {
	const posts = await getCollection(
		'blog',
		({ data }) => process.env.NODE_ENV !== 'production' || !data.draft
	);
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			author: post.data.author.name,
			link: `/${post.slug}/`,
		})),
	});
}
