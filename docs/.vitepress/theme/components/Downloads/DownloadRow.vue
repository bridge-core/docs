<script setup lang="ts">
import DownloadCard from './DownloadCard.vue'

const releases = await fetch(
	`https://api.github.com/repos/bridge-core/editor/releases`
)
	.then((res) => res.json())
	.catch((err) => {
		console.error(err)
		return null
	})

defineProps<{
	items: {
		title: string
		description: string
		findAssetUrls?: { ext: string; name?: string }[]
		buttons: { url: string; name: string }[]
	}[]
}>()

function urlForExt(ext: string) {
	if (!releases) return null

	// Get the two latest releases which are not pre-releases
	const stableReleases = releases
		.filter((release: any) => !release.prerelease)
		.slice(0, 2)

	// Try to first find asset in the latest release, then fallback to the second latest
	const asset = stableReleases
		.map((release: any) =>
			release.assets.find((asset: any) => asset.name.endsWith(ext))
		)
		.find((asset: any) => asset)

	if (!asset) return null

	return asset.browser_download_url
}

function getButtons(item: any) {
	if (item.buttons) return item.buttons
	if (item.findAssetUrls) {
		return item.findAssetUrls
			.map(({ ext, name }) => ({
				text: name ? 'Download: ' + name : 'Download',
				url: urlForExt(ext),
			}))
			.filter(({ url }) => url !== null) // Filter out buttons with no url
	}

	return null
}
</script>

<template>
	<div v-if="!releases" class="card">
		Oops! We failed to fetch our latest release!
	</div>
	<div v-else class="download-container">
		<DownloadCard
			v-for="item in items"
			:title="item.title"
			:icon="item.icon"
			:description="item.description"
			:buttons="getButtons(item)"
		/>
	</div>
</template>

<style scope>
.download-container {
	display: flex;
	flex-flow: row;
	flex-wrap: wrap;
	gap: 1rem;
}

.download-container > * {
	flex: 1 1 0;
	min-width: 20em;
}
</style>
