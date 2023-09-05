import { defineCollection, z, reference } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		heroImage: z.string(),
		draft: z.boolean().optional(),
		tags: z.array(reference('tag')).optional(),
	}),
});

const tag = defineCollection({
	type: 'data',
	schema: z.object({
		name: z.string(),
		slug: z.string(),
		imageUrl: z.string(),
	}),
});

export const collections = { blog, tag };
