import { defineConfig } from 'vitepress'
import { generateSidebar } from './generateSidebar'
import { latestBridgeVersion } from './latestBridgeVersion'
import { loadAuthors } from './loadAuthors'
import { loadCreations } from './loadCreations'

loadCreations()
loadAuthors()

const base = '/'

const ogDescription = 'The light-weight, yet powerful, IDE for Minecraft'
const ogImage = `https://bridge-core.app${base}social-preview.png`
const ogTitle = 'bridge.'
const ogUrl = 'https://bridge-core.app'

export default defineConfig({
	title: 'bridge.',
	description: 'The IDE for Minecraft Add-Ons',
	lastUpdated: true,
	ignoreDeadLinks: true,

	head: [
		[
			'link',
			{ rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` },
		],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:title', content: ogTitle }],
		['meta', { property: 'og:image', content: ogImage }],
		['meta', { property: 'og:url', content: ogUrl }],
		['meta', { property: 'twitter:description', content: ogDescription }],
		['meta', { property: 'twitter:title', content: ogTitle }],
		['meta', { property: 'twitter:card', content: 'summary_large_image' }],
		['meta', { property: 'twitter:image', content: ogImage }],
		['meta', { property: 'twitter:url', content: ogUrl }],
	],

	themeConfig: {
		logo: '/favicon.svg',
		outline: 'deep',
		editLink: {
			text: 'Suggest changes to this page',
			pattern: 'https://github.com/bridge-core/docs/edit/main/docs/:path',
		},
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/bridge-core' },
			{
				icon: 'twitter',
				link: 'https://twitter.com/intent/follow?region=follow_link&screen_name=bridgeIde',
			},
			{ icon: 'discord', link: 'https://discord.gg/uj8K2S9' },
		],
		footer: {
			message: 'Released under the GPL-3.0 License.',
			copyright:
				'Copyright © 2019-PRESENT solvedDev & bridge. Contributors',
		},

		nav: [
			{ text: 'Guide', link: '/guide/', activeMatch: '/guide/' },

			{
				text: 'Extensions',
				link: '/extensions/',
				activeMatch: '/extensions/',
			},
			{ text: 'Creations', link: '/creations/' },
			{
				text: 'Resources',
				items: [
					{ text: 'Team', link: '/team' },
					{
						items: [
							{
								text: 'Editor Data ',
								link: 'https://github.com/bridge-core/editor-packages',
							},
							{
								text: 'Dash ',
								link: 'https://github.com/bridge-core/dash-compiler',
							},
							{
								text: 'Standalone Dash ',
								link: 'https://github.com/bridge-core/deno-dash-compiler',
							},
							{
								text: 'Molang ',
								link: 'https://github.com/bridge-core/molang',
							},
							{
								text: 'Model Viewer ',
								link: 'https://github.com/bridge-core/model-viewer',
							},
						],
					},
				],
			},

			{
				text: latestBridgeVersion,
				items: [
					{
						text: 'Download',
						link: '/guide/download/',
					},
					{
						text: 'Release Notes ',
						link: 'https://github.com/bridge-core/editor/releases',
					},
					{
						text: 'Contributing ',
						link: 'https://github.com/bridge-core/editor/blob/main/CONTRIBUTING.md',
					},
					{
						items: [
							{
								text: 'bridge. Nightly ',
								link: 'https://nightly.bridge-core.app/',
							},
							{
								text: 'bridge. v1 ',
								link: 'https://github.com/bridge-core/bridge./',
							},
						],
					},
				],
			},
		],
		algolia: {
			apiKey: 'deec154498ea803ab3d8740b6c740234',
			indexName: 'bridge-core',
			appId: 'YD57CGJO9K',
		},
		sidebar: {
			'/guide/': generateSidebar('guide'),
			'/extensions/': generateSidebar('extensions'),
		},
	},
})
