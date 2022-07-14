<script setup lang="ts">
import { computed } from 'vue'
import CreationCard from './CreationCard.vue'
import type { ICreation } from './CreationCard.vue'

const props = defineProps<{
	items: ICreation[]
	title?: string
	description?: string
	imageBase?: string
}>()

const title = computed(() => props.title ?? 'Creations')
const description = computed(
	() =>
		props.description ??
		'bridge. powers some of the most advanced Minecraft Add-ons. Here are some of our favorites...'
)
</script>

<template>
	<div class="creations">
		<h1>{{ title }}</h1>
		<p>{{ description }}</p>

		<div class="container">
			<CreationCard
				v-for="creation in items"
				:creation="creation"
				:imageBase="imageBase"
			/>
		</div>
	</div>
</template>

<style scoped>
.container {
	grid-template-columns: repeat(auto-fit, minmax(224px, 1fr));
	display: grid;
	gap: 24px;
	margin: 0 auto;
	max-width: 1152px;
	padding: 12px;
}
@media (min-width: 375px) {
	.container {
		grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
	}
}

.creations {
	padding: 48px 32px;
	text-align: center;
}
@media (min-width: 960px) {
	.creations {
		padding: 80px 64px 48px;
	}
}
@media (min-width: 768px) {
	.creations {
		padding: 64px 48px 48px;
	}
}

h1 {
	letter-spacing: 0;
	line-height: 44px;
	font-size: 36px;
	font-weight: 500;
}
@media (min-width: 768px) {
	h1 {
		letter-spacing: -0.5px;
		line-height: 56px;
		font-size: 48px;
	}
}

p {
	margin: 0 auto;
	max-width: 512px;
	padding-top: 12px;
	line-height: 24px;
	font-size: 16px;
	font-weight: 500;
	color: var(--vp-c-text-2);
	padding-bottom: 32px;
}
@media (min-width: 768px) {
	p {
		max-width: 592px;
		letter-spacing: 0.15px;
		line-height: 28px;
		font-size: 20px;
		padding-bottom: 48px;
	}
}
</style>
