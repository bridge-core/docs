<script setup lang="ts">
import { computed } from 'vue'
import VPButton from '../VPButton.vue'
import Windows from '../Icons/Windows.vue'
import Linux from '../Icons/Linux.vue'
import Apple from '../Icons/Apple.vue'
import Web from '../Icons/Web.vue'
import ArrowRight from '../Icons/ArrowRight.vue'

const props = defineProps<{
	title: string
	icon: string
	description: string
	buttons: { url: string; text: string }[]
}>()

const icons = {
	windows: Windows,
	linux: Linux,
	apple: Apple,
	web: Web,
}
const firstUrl = computed(() => props.buttons[0]?.url)
</script>

<template>
	<component
		:is="firstUrl ? 'a' : 'div'"
		:href="firstUrl"
		class="download-card"
		:class="{
			'card-focus-enabled': firstUrl !== undefined,
		}"
	>
		<div class="download-content">
			<span class="download-title">
				<component style="margin-right: 4px" :is="icons[icon]" />
				<h1>{{ title }}</h1>
			</span>

			<p>{{ description }}</p>
		</div>

		<div v-if="buttons.length > 0" class="download-actions">
			<a
				v-for="({ url, text }, i) in buttons"
				class="download-link"
				:href="url"
				size="medium"
			>
				{{ text }}
				<ArrowRight class="download-link-icon" />
			</a>
		</div>
		<div v-else class="download-actions">
			We do not have a release for {{ title }} available at this point in
			time.
		</div>
	</component>
</template>

<style scope>
.download-card {
	text-align: left;
	display: flex;
	flex-flow: column;
	background: var(--vp-c-bg-soft);
	border: 1px solid var(--vp-c-bg-soft);
	color: var(--vp-c-text-1) !important;
	border-radius: 12px;
	overflow: hidden;

	transition: border-color 0.25s, background-color 0.25s;
}
.download-card.card-focus-enabled:hover {
	background-color: var(--vp-c-bg-mute);
	border-color: var(--vp-c-brand);
}

.download-content {
	padding: 12px;
	/* Grow to fit available space */
	flex: 1;
}

.download-title {
	display: flex;
	align-items: center;
}

.download-actions {
	display: flex;
	flex-flow: column;

	width: 100%;
	gap: 4px;
	padding: 12px;
}

.download-link {
	display: flex;
	flex-flow: row;
	align-items: center;
	line-height: 24px;
}

.download-link-icon {
	margin-left: 4px;
	width: 18px;
	height: 18px;
	fill: currentColor;
}
</style>
