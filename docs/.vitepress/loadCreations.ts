import fs from 'fs'
import { dirname, join } from 'path'
import matter from 'gray-matter'
import sharp from 'sharp'

export function loadCreations() {
	const creationDirEntries = fs.readdirSync(
		join(process.cwd(), 'docs', 'creations'),
		{ withFileTypes: true }
	)
	const creations: any[] = []

	for (const entry of creationDirEntries) {
		if (!entry.isDirectory()) continue

		const creationDir = join(process.cwd(), 'docs/creations', entry.name)
		const creationPath = join(creationDir, 'index.md')

		const str = fs.readFileSync(creationPath, 'utf8')
		let frontMatter: matter.GrayMatterFile<string>
		try {
			frontMatter = matter(str)
		} catch (err) {
			throw new Error(
				`File ${creationPath} has invalid frontmatter! ${err.message}`
			)
		}

		creations.push({
			...frontMatter.data,
			image:
				'/' + join(`creations/${entry.name}`, frontMatter.data.image),
		})

		// Copy thumbnails to public folder
		const outputPath = join(
			process.cwd(),
			'docs/public/creations',
			entry.name,
			frontMatter.data.image
		)
		fs.mkdirSync(dirname(outputPath), { recursive: true })

		// Convert image to avif with sharp
		sharp(join(creationDir, frontMatter.data.image))
			.resize({ width: 600 })
			.avif()
			.toFile(outputPath.replace(/\.(jpg|png)$/, '.avif'))

		// Copy normal image over as a fallback
		fs.copyFileSync(join(creationDir, frontMatter.data.image), outputPath)
	}

	fs.writeFileSync(
		join(process.cwd(), 'docs', 'data/creations.json'),
		JSON.stringify(
			shuffle(creations).sort((a, b) => {
				const aIsJamEntry = a.tags.includes('bridge-jam')
				const bIsJamEntry = b.tags.includes('bridge-jam')

				if (aIsJamEntry && bIsJamEntry) return 0
				if (aIsJamEntry) return 1
				if (bIsJamEntry) return -1

				return 0
			})
		)
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
