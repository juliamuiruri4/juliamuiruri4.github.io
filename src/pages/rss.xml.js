import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../data/site';

export async function GET(context) {
	const posts = await getCollection('blog');

	return rss({
		title: `${site.name} | Blog`,
		description: 'Writing on cloud, AI, JavaScript, and developer growth.',
		site: context.site ?? site.url,
		items: posts
			.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
			.map((post) => ({
				title: post.data.title,
				description: post.data.description,
				pubDate: post.data.pubDate,
				link: `/blog/${post.id}/`,
			})),
	});
}