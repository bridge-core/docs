import fs from 'fs'
import { dirname, join } from 'path'
import matter from 'gray-matter'
import sharp from 'sharp'

export function loadAuthors() {
	const authorDirEntries = fs.readdirSync(
		join(process.cwd(), 'docs', 'authors'),
		{ withFileTypes: true }
	)
	const authors: any = {}

	for (const entry of authorDirEntries) {
		if (!entry.isDirectory()) continue

		const creationDir = join(process.cwd(), 'docs/authors', entry.name)
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

		authors[frontMatter.data.id] = {
			...frontMatter.data,
			image: '/' + join(`authors/${entry.name}`, frontMatter.data.image),
		}

		// Copy thumbnails to public folder
		const outputPath = join(
			process.cwd(),
			'docs/public/authors',
			entry.name,
			frontMatter.data.image
		)
		fs.mkdirSync(dirname(outputPath), { recursive: true })

		// Convert image to avif with sharp
		sharp(join(creationDir, frontMatter.data.image))
			.resize({ width: 80, height: 80 })
			.avif()
			.toFile(outputPath.replace(/\.(jpg|png)$/, '.avif'))

		// Copy normal image over as a fallback
		fs.copyFileSync(join(creationDir, frontMatter.data.image), outputPath)
	}

	fs.writeFileSync(
		join(process.cwd(), 'docs', 'data/authors.json'),
		JSON.stringify(authors)
	)
}
