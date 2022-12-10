<script setup lang="ts">
import DownloadRow from './DownloadRow.vue'
import downloadOptions from '../../../../data/downloadOptions.json'
</script>

<template>
	<Suspense>
		<DownloadRow :items="downloadOptions" />
	</Suspense>
</template>
