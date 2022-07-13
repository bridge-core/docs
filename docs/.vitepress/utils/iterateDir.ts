import fs from 'fs'
import { join } from 'path'

/**
 * Iterates the given directory to get all files in and out of subfolders
 * @param directory The directory to iterate
 * @returns An array of strings containing the files paths in the given directory
 */
export function iterateDir(directory: string) {
    const allFiles: string[] = []
    const files = fs.readdirSync(directory)
    for (const file of files) {
        const path = join(directory, file)
		const stats = fs.statSync(path)

        if (
            stats.isDirectory()
            // && fs.existsSync(join(path, 'index.md'))
        ) {
            allFiles.push(...iterateDir(path))
        } else if (stats.isFile()) {
            allFiles.push(path)
        }
    }
    return allFiles
}