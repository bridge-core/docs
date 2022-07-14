import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export function loadCreations() {
	const creationDirEntries = fs.readdirSync(
		join(process.cwd(), 'docs', 'creations'),
		{ withFileTypes: true }
	)
	const creations: {}[] = []

	for (const entry of creationDirEntries) {
		if (!entry.isDirectory()) continue

		const creationPath = join(
			process.cwd(),
			'docs',
			'creations',
			entry.name,
			'index.md'
		)

		const str = fs.readFileSync(creationPath, 'utf8')
		let frontMatter: matter.GrayMatterFile<string>
		try {
			frontMatter = matter(str)
		} catch (err) {
			throw new Error(
				`File ${creationPath} has invalid frontmatter! ${err.message}`
			)
		}

		console.log(frontMatter.data)
		creations.push({
			...frontMatter.data,
			image: './' + join(`./${entry.name}`, frontMatter.data.image),
		})
	}

	fs.writeFileSync(
		join(process.cwd(), 'docs', 'data/creations.json'),
		JSON.stringify(shuffle(creations))
	)
}

function shuffle<T>(array: T[]) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		const el = array[i]

		array[i] = array[j]
		array[j] = el
	}

	return array
}
