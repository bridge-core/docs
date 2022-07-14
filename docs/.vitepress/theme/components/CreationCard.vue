<script setup lang="ts">
import { withBase } from 'vitepress'
import VPButton from 'vitepress/client/theme-default/components/VPButton.vue'
export interface ICreation {
	title: string
	excerpt: string
	tags: string[]
	author: string
	download: string
}

const props = defineProps<{
	creation: ICreation
}>()
</script>

<template>
	<div class="card">
		<picture :alt="`Thumbnail of ${creation.title}`">
			<source
				:srcset="
					withBase(creation.image).replace(/\.(jpg|png)$/, '.avif')
				"
				type="image/avif"
			/>
			<source :srcset="withBase(creation.image)" />
			<img
				:src="withBase(creation.image)"
				:alt="`Thumbnail of ${creation.title}`"
			/>
		</picture>

		<div class="content">
			<h1>{{ creation.title }}</h1>
			<p>{{ creation.excerpt }}</p>
		</div>

		<div class="actions">
			<VPButton
				tag="a"
				text="Download"
				:href="creation.download"
				theme="brand"
				size="medium"
			/>
		</div>
	</div>
</template>

<style scoped>
.card {
	display: flex;
	flex-flow: column;
	background: var(--vp-c-bg-soft);
	border-radius: 12px;
	overflow: hidden;
}

.content {
	padding: 12px;
	/* Grow to fit available space */
	flex: 1;
}
h1 {
	line-height: 36px;
	font-size: 24px;
}

.actions {
	align-self: flex-end;
	display: flex;
	justify-content: flex-end;
	padding: 12px;
}
</style>
