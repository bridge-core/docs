<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import VPButton from 'vitepress/client/theme-default/components/VPButton.vue'
import authors from '../../../data/authors.json'

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
const author = computed(() => authors[props.creation.author])
</script>

<template>
	<div class="card">
		<picture>
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

			<div v-if="author" class="author">
				<picture>
					<source
						:srcset="
							withBase(author.image).replace(
								/\.(jpg|png)$/,
								'.avif'
							)
						"
						type="image/avif"
					/>
					<source :srcset="withBase(author.image)" />
					<img
						class="author-logo"
						:src="withBase(author.image)"
						:alt="`Logo of ${author.title}`"
					/>
				</picture>

				<div class="author-name">
					<span>{{ author.title }}</span>
					<span class="author-position">{{ author.position }}</span>
				</div>
			</div>

			<div class="tag-list">
				<span class="tag" v-for="tag in creation.tags">
					#{{ tag }}
				</span>
			</div>

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
	text-align: left;
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

.author {
	display: flex;
	align-items: center;
	/* background: var(--vp-c-gray-light-4); */
	border-radius: 12px;
	padding: 4px 8px;
	margin: 8px 0;
}
/* .dark .author {
	background: var(--vp-c-bg);
} */
.author-logo {
	height: 32px;
	border-radius: 100%;
	margin-right: 12px;
	background: var(--vp-c-gray-light-4);
}
.dark .author-logo {
	background: var(--vp-c-bg);
}
.author-name {
	display: flex;
	flex-direction: column;
	justify-items: center;
}
.author-position {
	font-size: 12px;
	color: var(--vp-c-text-soft);
	margin-top: -4px;
}

.tag-list {
	display: flex;
	gap: 4px;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 16px;
}
.tag {
	background: var(--vp-c-gray-light-4);
	padding: 4px 8px;
	border-radius: 12px;
	flex: 1;
	text-align: center;
	white-space: nowrap;
}
.dark .tag {
	background: var(--vp-c-bg);
}
</style>
