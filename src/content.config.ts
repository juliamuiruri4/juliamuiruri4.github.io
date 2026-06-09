import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		featured: z.boolean().default(false),
		tags: z.array(z.string()).default([]),
		heroImage: z.string().optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		featured: z.boolean().default(false),
		status: z.enum(['Featured', 'Active', 'Archive']).default('Featured'),
		stack: z.array(z.string()).default([]),
		role: z.string().optional(),
		repoUrl: z.url().optional(),
		demoUrl: z.url().optional(),
		image: z.string().optional(),
		year: z.number(),
		order: z.number().default(0),
	}),
});

const speaking = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: './src/content/speaking' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		format: z.enum(['Talk', 'Workshop', 'Session']).default('Talk'),
		status: z.enum(['Available', 'Upcoming', 'Past']).default('Available'),
		audience: z.string(),
		duration: z.string(),
		topics: z.array(z.string()).default([]),
		image: z.string().optional(),
		date: z.coerce.date().optional(),
		location: z.string().optional(),
		ctaUrl: z.url().optional(),
		featured: z.boolean().default(false),
		order: z.number().default(0),
	}),
});

const videos = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: './src/content/videos' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		videoUrl: z.string(),
		pubDate: z.coerce.date().optional(),
		order: z.number().default(0),
	}),
});

export const collections = { blog, projects, speaking, videos };