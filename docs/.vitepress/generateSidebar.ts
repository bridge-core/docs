import { DefaultTheme } from 'vitepress'
import { join, relative, basename, extname, dirname } from 'path'
import matter from 'gray-matter'
import fs from 'fs'
import { iterateDir } from './utils/iterateDir'

export function generateSidebar(directory: string) {
    const mainCategoryName = capitalize(directory)
    const sidebar: DefaultTheme.SidebarGroup[] = [
        {
            text: mainCategoryName,
            items: [],
        },
    ]
    const mainDirectory = join(process.cwd(), 'docs', directory)
    const files = iterateDir(mainDirectory).filter((file) => extname(file) === '.md')

    for (let file of files) {
        file = file.replace(/\\/g, '/')
        const formattedPath = relative(mainDirectory, file)
        const formattedFileName = capitalize(basename(formattedPath).replace(/-/g, ' ').replace('.md', ''))

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

        const element = {
            text: (formattedFileName === 'Index' && capitalize(parentFolder) === mainCategoryName) || formattedFileName !== 'Index' ? formattedFileName : capitalize(parentFolder),
            link: `/${directory}/${formattedPath.replace('.md', '')}`
        }

        if (frontMatter.data.sidebar) {
            const categoryName = capitalize(frontMatter.data.sidebar)
            const existingCategory =  sidebar.find((cat) => cat.text === categoryName)
            if (existingCategory) {
                existingCategory.items.push(element)
            } else {
                sidebar.push({
                    text: categoryName,
                    collapsed: true,
                    collapsible: true,
                    items: [element]
                })
            }
        }
    }

    return sidebar
}

function capitalize(text: string) {
    return text
        .split(' ')
        .map((word) => `${word[0].toUpperCase()}${word.substring(1)}`)
        .join(' ')
}
