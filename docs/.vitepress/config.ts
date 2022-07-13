import { defineConfig } from 'vitepress'
import { getLatestBridgeVersion } from './latestBridgeVersion'

// const latestBridgeVersion = await getLatestBridgeVersion()

export default defineConfig({
	title: 'bridge.',
	description: 'The IDE for Minecraft Add-Ons',
	lastUpdated: true,

	themeConfig: {
		logo: '/favicon.svg',
		editLink: {
			text: 'Suggest changes to this page',
			pattern: 'https://github.com/bridge-core/docs/edit/main/docs/:path',
		},
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/bridge-core' },
			{ icon: 'twitter', link: 'https://twitter.com/bridgeIde' },
			{ icon: 'discord', link: 'https://discord.gg/uj8K2S9' },
		],
		footer: {
			message: 'Released under the GPL-3.0 License.',
			copyright:
				'Copyright © 2019-PRESENT solvedDev & bridge. Contributors',
		},

		nav: [
			{ text: 'Guide', link: '/guide/' },

			{ text: 'Extensions', link: '/extensions/' },
			{ text: 'Creations', link: '/creations/' },
			{
				text: 'Resources',
				items: [
					{ text: 'Team', link: '/team' },
					{
						items: [
							{
								text: 'Editor Data',
								link: 'https://github.com/bridge-core/editor-packages',
							},
							{
								text: 'Dash',
								link: 'https://github.com/bridge-core/dash-compiler',
							},
							{
								text: 'Standalone Dash',
								link: 'https://github.com/bridge-core/deno-dash-compiler',
							},
							{
								text: 'Molang',
								link: 'https://github.com/bridge-core/molang',
							},
							{
								text: 'Model Viewer',
								link: 'https://github.com/bridge-core/model-viewer',
							},
						],
					},
				],
			},

			{
				text: `v2.2.13`,
				items: [
					{
						text: 'Release Notes ',
						link: 'https://github.com/bridge-core/editor/releases',
					},
					{
						text: 'Contributing ',
						link: 'https://github.com/bridge-core/editor/CONTRIBUTING.md',
					},
				],
			},
		],
	},
})
