/// <reference types="vite/client" />
/// <reference types="@types/node" />
declare module '*.vue' {
	import { defineComponent } from 'vue'
	const component: ReturnType<typeof defineComponent>
	export default component
}
