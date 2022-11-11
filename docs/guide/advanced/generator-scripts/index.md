---
title: 🤖 Generator Scripts
description: Learn how to generate any file within your project with JavaScript or TypeScript
sidebar: Advanced
---

# 🤖 Generator Scripts

This page serves as an introduction to bridge.'s generator scripts and how you can utilize them to generate files within your project.
You will learn about the following topics inside of this article:

:ballot_box_with_check: What is a generator script?<br/>
:ballot_box_with_check: How to use a generator script.<br/>
:ballot_box_with_check: How to generate multiple files with a single generator script.<br/>

## Basics

Generator scripts are JavaScript or TypeScript files placed anywhere within your project to generate JSON, mcfunction or other files.

:::warning
Make sure that the "generatorScripts" plugin is listed within your [compiler config](/guide/advanced/dash/index.html#build-profiles) in order for generator scripts to work.
:::

A generator script should "export default" the content of the file to generate. The generated file extension is automatically inferred from the file location.

```ts
// Generate an item file
export default {
    'format_version': '1.16.100',
	'minecraft:item': {...},
}
```

```ts
// Generate a mcfunction file
export default `
/say Hello World!
`
```

:::tip
You can find TypeScript declaration files for the `@bridge/generate` module [here](https://github.com/bridge-core/editor-packages/blob/main/packages/minecraftBedrock/types/generatorScript/main.d.ts). Please note that bridge. automatically loads these type declarations for you so no manual setup is required in this case.
:::

## File Templates

Embedding the full file within a generator script might not be desirable for multiple reasons:

1. It might be hard for people to make edits if they are not familiar with programming
2. You do not get auto-completions, syntax highlighting and diagnostics within generator scripts

That is why you can use a template to generate your files. You can use any file within your content as a template.

### Usage

To start using a template, import the `useTemplate` function from the `@bridge/generate` module.

```ts
import { useTemplate } from '@bridge/generate'
```

Then, use the `useTemplate` function to import a file.

```ts
// mcfunction is of type string
const mcfunctionFile = await useTemplate('../functions/template.mcfunction')

// jsonFile is of type object
const jsonFile = await useTemplate('./template/entity.json')
```

You can now use the `mcfunctionFile` or `jsonFile` variables which store the respective file content.

### API

```ts
interface IUseTemplateOptions {
	/**
	 * Whether to omit the template file from the build output
	 * @default true
	 */
	omitTemplate?: boolean
}

/**
 * Import a file template
 * @param path Path to the template relative to the generator script
 * @param options Configure how to use the template
 */
export function useTemplate<T = any>(
	templatePath: string,
	options: IUseTemplateOptions
): Promise<T>
```

## File Collections

File collections are a convenient way to generate multiple files with a single generator script.

### Usage

To get started, import the `createCollection` function from the `@bridge/generate` module.

```ts
import { createCollection } from '@bridge/generate'
```

Then, create a new collection with the `createCollection` function.

```ts
const collection = createCollection()
```

You can now add files to the collection with the `add` function. The `add` method takes two arguments: The first one sets the file path of the file to generate and the second one sets the content of the file to generate.

```ts
collection.add('./blaze.json', {...})
```

Finally, you can need to "export default" the collection to generate the files.

```ts
export default collection
```

### API

```ts
class FileCollection {
	/**
	 * Add a file to the collection
	 * @param path Path of the file relative to the generator script
	 * @param content Content of the file to generate
	 */
	add(path: string, content: any): void

	/**
	 * Get a file from the collection
	 * @param path Path of the file relative to the generator script
	 */
	get<T = any>(path: string): T

	/**
	 * Returns whether a file exists in the collection
	 * @param path Path of the file relative to the generator script
	 */
	has(path: string): boolean
}

/**
 * Create a new file collection
 */
export function createCollection(): FileCollection
```
