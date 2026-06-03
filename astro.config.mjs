// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
	output: 'static',
	site: 'https://juliamuiruri4.github.io',
	integrations: [sitemap()],
	markdown: {
		shikiConfig: {
			themes: {
				light: 'github-light-default',
				dark: 'github-dark-default',
			},
		},
	},
});
