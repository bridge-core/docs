import { DefaultTheme } from 'vitepress'
import { join, relative, basename, extname, dirname } from 'path'
import matter from 'gray-matter'
import fs from 'fs'
import { iterateDir } from './utils/iterateDir'

interface ISidebarItemWithData {
	text: string
	link: string
	data: {
		[key: string]: any
	}
}
interface ISidebarGroup {
	text?: string
	items: ISidebarItemWithData[]
	collapsed?: boolean
	collapsible?: boolean
}

export function generateSidebar(directory: string) {
	const mainCategoryName = capitalize(directory)
	const sidebar: ISidebarGroup[] = [
		{
			text: mainCategoryName,
			items: [],
		},
	]
	const mainDirectory = join(process.cwd(), 'docs', directory)
	const files = iterateDir(mainDirectory).filter(
		(file) => extname(file) === '.md'
	)

	for (let file of files) {
		file = file.replace(/\\/g, '/')
		const formattedPath = relative(mainDirectory, file)
		const formattedFileName = capitalize(
			basename(formattedPath).replace(/-/g, ' ').replace('.md', '')
		)

		const str = fs.readFileSync(file, 'utf8')
		let frontMatter: matter.GrayMatterFile<string>
		try {
			frontMatter = matter(str)
		} catch (err) {
			throw new Error(
				`File ${file} has invalid frontmatter! ${err.message}`
			)
		}

		const pathParts = dirname(file).split('/')
		const parentFolder = pathParts[pathParts.length - 1].replace(/-/g, ' ')

		const elementTitle =
			(formattedFileName === 'Index' &&
				capitalize(parentFolder) === mainCategoryName) ||
			formattedFileName !== 'Index'
				? formattedFileName
				: capitalize(parentFolder)
		const element = {
			text: frontMatter.data.title ?? elementTitle,
			link: `/${directory}/${formattedPath
				.replace('.md', '')
				.replace(/\\/g, '/')}.html`,
			data: frontMatter.data,
		}

		if (!(frontMatter.data.is_visible ?? true)) continue

		if (frontMatter.data.sidebar) {
			const categoryName = capitalize(frontMatter.data.sidebar)
			const existingCategory = sidebar.find(
				(cat) => cat.text === categoryName
			)
			if (existingCategory) {
				existingCategory.items.push(element)
			} else {
				sidebar.push({
					text: categoryName,
					collapsed: true,
					collapsible: true,
					items: [element],
				})
			}
		}
	}

	for (const category of sidebar) {
		// Sorting logic borrowed and slightly modified from bedrock wiki :)
		category.items.sort(
			({ data: dataA, text: textA }, { data: dataB, text: textB }) => {
				// Default to max int, so without nav order you will show second
				// Multiply by category value if it exists
				const navA = dataA.nav_order ?? 0
				const navB = dataB.nav_order ?? 0

				// Tie goes to the text compare! (Will also apply for elements without nav order)
				if (navA == navB) {
					return textA.localeCompare(textB)
				}

				// Return nav order
				return navA - navB
			}
		)
	}

	return sidebar
}

function capitalize(text: string) {
	return text
		.split(' ')
		.map((word) => `${word[0].toUpperCase()}${word.substring(1)}`)
		.join(' ')
}
