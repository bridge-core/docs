---
title: 🚀 Triggers
description: Learn how to embed your tool into bridge.
sidebar: 'iframe API'
---

# 🚀 Triggers

Triggers allow you to trigger actions within bridge. from your iframe.
Use the `trigger` method on your `Channel` instance to trigger an action.

```ts
const response = await api.trigger('<action>', data)
```

## Dash

### `dash.updateFile`

Re-compiles the given file with [Dash](/guide/advanced/dash/index.html).

```ts
/**
 * @param {string} filePath File path or file reference of the file to re-compile
 * @returns {Promise<void>}
 */
await api.trigger('dash.updateFile', filePath)
```

## File System

### `fs.readAsDataUrl`

Reads the file at the given path as a data URL.

```ts
/**
 * @param {string} filePath File path or file reference of the file to read
 * @returns {Promise<string>} Data URL
 */
const dataUrl = await api.trigger('fs.readAsDataUrl', filePath)
```

### `fs.readFile`

Reads the file at the given path as a Uint8Array.

```ts
/**
 * @param {string} filePath File path or file reference of the file to read
 * @returns {Promise<Uint8Array>} File content
 */
const fileContent = await api.trigger('fs.readFile', filePath)
```

### `fs.readTextFile`

Reads the file at the given path as a string.

```ts
/**
 * @param {string} filePath File path or file reference of the file to read
 * @returns {Promise<string>} File content
 */
const fileContent = await api.trigger('fs.readTextFile', filePath)
```

### `fs.writeFile`

Writes the given data to the file at the given path.

```ts
interface IWriteFilePayload {
	filePath: string
	data: Uint8Array | string
}

/**
 * @param {IWiteFilePayload} payload
 * @returns {Promise<void>}
 */
await api.trigger('fs.writeFile', {
	filePath: myFilePath,
	data: myData,
})
```

## Pack Indexer

### `packIndexer.find`

Find files within the current project based on query parameters.

```ts
interface IFindRequestPayload {
	/**
	 * Which file type to search for
	 */
	findFileType: string
	/**
	 * Which lightning cache key to look up
	 */
	whereCacheKey: string
	/**
	 * What to match the looked up cache value against
	 */
	matchesOneOf: string[]
	/**
	 * Whether to bail out after the first match
	 */
	fetchAll?: boolean
}

/**
 * @param {IFindRequestPayload} payload
 * @returns {Promise<string[]>} Matching file paths
 */
const filePaths = await api.trigger('packIndexer.find', {
	findFileType: 'clientEntity',
	whereCacheKey: 'identifier',
	matchesOneOf: ['minecraft:player'],
})
```

:::info

-   You can find a list of all available file types [here](/extensions/misc/file-types.html).
-   Read more on the lightning cache format [here](/extensions/json/lightning-cache.html).

:::

### `packIndexer.getFile`

Get all of the stored cache data for a given file.

```ts
/**
 * @param {string} filePath File path or file reference of the file to get
 * @returns {Promise<any>} File cache data
 */
const fileCache = await api.trigger('packIndexer.getFile', filePath)
```

## Project

### `project.getItemPreview`

Get a preview image for a given item identifier.

```ts
/**
 * @param {string} itemIdentifier Item identifier
 * @returns {Promise<string>} Data URL
 */
const dataUrl = await api.trigger('project.getItemPreview', itemIdentifier)
```

## Tab

### `tab.setIsLoading`

Set the loading state of the underlying iframe tab.

```ts
/**
 * @param {boolean} isLoading
 * @returns {Promise<void>}
 */
await api.trigger('tab.setIsLoading', isLoading)
```

### `tab.setIsUnsaved`

Set the unsaved state of the underlying iframe tab. Unsaved tabs show a warning when the user tries to close them.

```ts
/**
 * @param {boolean} isUnsaved
 * @returns {Promise<void>}
 */
await api.trigger('tab.setIsUnsaved', isUnsaved)
```

## Util

### `util.platform`

Get the current platform.

```ts
/**
 * @returns {Promise<'darwin' | 'win32' | 'linux'>}
 */
const platform = await api.trigger('util.platform')
```
