import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './theme.css'

const theme: Theme = {
	...DefaultTheme,

	enhanceApp: ({ app }) => {},
}
export default theme
