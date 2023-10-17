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
		heroImages: z
			.array(z.string())
			.max(2)
			.optional()
			.transform((val) => [...(val || ['/placeholder-hero.jpg', '/placeholder-hero-dark.jpg'])]),
		draft: z.boolean().optional(),
		tags: z.array(reference('tag')).optional(),
		author: reference('author'),
	}),
});

const tag = defineCollection({
	type: 'data',
	schema: z.object({
		name: z.string(),
		imageUrl: z.string().optional(),
		description: z.string(),
	}),
});

const category = defineCollection({
	type: 'data',
	schema: z.object({
		name: z.string(),
		imageUrl: z.string().optional(),
	}),
});

export const collections = { blog, tag, category };
