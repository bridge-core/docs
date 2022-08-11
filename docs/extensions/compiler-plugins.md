---
description: ''
sidebar: 'extensions'
---

# Compiler Plugins

bridge.'s compiler architecture allows anyone to create powerful plugins that can modify the compiler output in almost any way.

:::tip
You can read more about bridge.'s compiler architecture and Dash, bridge.'s compiler, [here](/guide/advanced/dash/).
:::

## Registering a Compiler Plugin

A compiler plugin should be added by putting it in the `<EXTENSION NAME>/compiler` folder of an extension. The plugin can then be registered via the extension manifest.

In the extension manifest you need a [`"compiler"`](/extensions/extension-manifest.html#compiler) property.

## Compiler Plugin File Structure

A compiler plugin should have `module.exports` set as a function which returns the compiler hooks which you are using, with logic within them.

Example:

```js
export default () => {
	const blockPath = 'BP/blocks'

	return {
		transform(filePath, fileContent) {
			// This would add "test" to the end of every block file.
			if (filePath.startsWith(blockPath)) return `${fileContent}test`
			else return
		},
	}
}
```

This function receives context parameters to be used in the plugin. These are:

-   `fileSystem: FileSystem`
    Returns the [FileSystem](https://github.com/bridge-core/editor/blob/main/src/components/FileSystem/FileSystem.ts) instance.

-   `outputFileSystem: FileSystem`
    Returns the output [FileSystem](https://github.com/bridge-core/editor/blob/main/src/components/FileSystem/FileSystem.ts) instance.

-   `hasComMojangDirectory: boolean`
    Allows you to check whether the com.mojang folder has been linked.

-   `compileFiles: (files: string[]) => Promise<void>`
    A function allowing you to force compilation on a list of file paths.

-   `getAliases: (filePath: string) => string[]`
    Returns all aliases registered in the `registerAliases()` hook for a given file path.

-   `targetVersion: string`
    Allows you to read the project target version.

-   `options: { mode: 'dev' | 'build', isFileRequest: boolean, restartDevServer: boolean, [key: string]: any}`

    -   `mode: 'dev' | 'build'`
        Allows you to read the current compiler mode.

    -   `isFileRequest: boolean`
        Some of bridge.'s core components manually request a file to be compiled.
        These file requests don't necessarily need to represent an underlying file on your disk.
        (Example: The particle preview requests a compilation of an unsaved particle file)

    -   `restartDevServer: boolean`
        Whether this compilation is the dev server being restarted.

    -   `[key: string]: any`
        Allows you to access any arguments passed to the plugin in the compiler config.

## Compiler Hooks

```ts
	/**
	 * Runs once before a build process starts
	 */
	buildStart(): Promise<void> | void
	/**
	 * Register files that should be loaded too
	 */
	include(): Maybe<string[]>

	/**
	 * Transform file path
	 * - E.g. adjust file path to point to build folder
	 * - Return null to omit file from build output
	 */
	transformPath(filePath: string | null): Maybe<string>

	/**
	 * Read the file at `filePath` and return its content
	 * - Return null/undefined to just copy the file over
	 */
	read(
		filePath: string,
		fileHandle?: { getFile(): Promise<File> | File }
	): Promise<any> | any

	/**
	 * Load the fileContent and bring it into a usable form
	 */
	load(filePath: string, fileContent: any): Promise<any> | any

	/**
	 * Provide alternative lookups for a file
	 * - E.g. custom component names
	 */
	registerAliases(source: string, fileContent: any): Maybe<string[]>

	/**
	 * Register that a file depends on other files
	 */
	require(source: string, fileContent: any): Maybe<string[]>

	/**
	 * Transform a file's content
	 */
	transform(
		filePath: string,
		fileContent: any,
		dependencies?: Record<string, any>
	): Promise<any> | any

	/**
	 * Prepare data before it gets written to disk
	 */
	finalizeBuild(
		filePath: string,
		fileContent: any
	): Maybe<string | Uint8Array | ArrayBuffer | Blob>

	/**
	 * Runs once after a build process ended
	 */
	buildEnd(): Promise<void> | void
```

## Examples

-   [Texture List Generator](https://github.com/bridge-core/plugins/tree/master/plugins/textureList)

-   [JSON Encoder](https://github.com/bridge-core/plugins/tree/master/plugins/jsonEncoder)

-   [Custom Entity Syntax](https://github.com/bridge-core/plugins/tree/master/plugins/CustomEntitySyntax) **This plugin uses [**rollup.js**](https://www.rollupjs.org/) to bundle third party packages into the plugin.**
