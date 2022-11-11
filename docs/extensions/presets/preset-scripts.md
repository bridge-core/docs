---
title: '🧾 Preset Scripts'
description: 'Learn about how advanced presets can utilize preset scripts and how to make them.'
sidebar: Presets
---

# 🧾 Preset Scripts

This article will go over preset scripts; an advanced way of creating presets.

In this page you will learn the following:

:ballot_box_with_check: What is a preset script?<br />
:ballot_box_with_check: How to create a preset script.<br />
:ballot_box_with_check: How presets scripts can be used in conjunction with advanced preset inputs.<br />

## Overview

A preset script is a JavaScript file that allow for more complex file creation in a preset. They are essential when using complex [input fields](/extensions/presets/manifest/index.html#fields) as they allows you to handle file and boolean inputs correctly, for example.

:::warning
You must have knowledge of JavaScript before creating a preset script.
:::

## Creating A Preset Script

To get started with preset scripts, you must first have a valid [preset](/extensions/presets/) created. Once you have done this, you can create a JavaScript file inside of your preset's folder, you can name this whatever you like.

```txt{7}
.
├─ 📁 presets
│  ├─ 📁 simpleEntity
│  │  ├─ 📝 manifest.json
│  │  ├─ 📄 entity.json
│  │  ├─ 📄 clientEntity.json
│  │  └─ 🧾 myScript.js
```

Inside of this file, you should assign `module.exports` as a function of type `PresetScript`, which is described below.

```ts
module.exports: (context: IPresetScriptContext) => void
```

```ts
export interface IPresetScriptContext {
	/**
	 * Creates a file at the specified path
	 * @param filePath The location to create the file in the user's project
	 * @param data The data to write to this file when it is created
	 * @param opts An object containing additional options when creating the file
	 */
	createFile: (
		filePath: string,
		data: string | File,
		opts: IPresetFileOpts
	) => Promise<void>
	/**
	 * Expands a file at the specified path
	 * @param filePath The location to expand the file in the user's project
	 * @param data The data to append or merge to the file
	 * @param opts An object containing additional options when expanding the file
	 */
	expandFile: (
		filePath: string,
		data: any,
		opts: IPresetFileOpts
	) => Promise<void>
	/**
	 * Creates a JSON file at the specified path
	 * @param filePath The location to create the file in the user's project
	 * @param data The parsed JSON data to be written to the file
	 * @param opts An object containing additional options when creating the file <link>Test</link>
	 */
	createJSONFile: (
		filePath: string,
		data: any,
		opts: IPresetFileOpts
	) => Promise<void>
	/**
	 * Loads a file from within the preset that this script is ran inside
	 * @param filePath The path of the file to load
	 */
	loadPresetFile: (filePath: string) => Promise<File>
	/**
	 * Key/value pairs of the variables that have been defined in the preset, either through additionalModels or fields
	 */
	models: Record<string, any>
}
```

It is important to note that:

-   Both `createFile` and `expandFile` behave simlarly to [`createFiles`](/extensions/presets/manifest/index.html#createfiles) and [`expandFiles`](/extensions/presets/manifest/index.html#expandfiles) inside of the preset manifest.
-   `IPresetFileOpts` is the same as the object in [`createFiles`](/extensions/presets/manifest/index.html#createfiles) and [`expandFiles`](/extensions/presets/manifest/index.html#expandfiles), with the [`inject`](/extensions/presets/manifest/index.html#inject), [`openFile`](/extensions/presets/manifest/index.html#openfile) and [`packPath`](/extensions/presets/manifest/index.html#packpath) parameters.
-   The functions exposed to a preset script return a promise, therefore you should `await` them and declare `module.exports` as an `async` function.

An example preset script would look like this, and more examples can be found from our [built-in preset scripts](https://github.com/bridge-core/editor-packages/tree/main/packages/minecraftBedrock/presetScript):

```js
module.exports = async ({ createFile, loadPresetFile, models, expandFile }) => {
	// Destructure the models to get the variables that we need in this preset script
	let { TEXTURE, IDENTIFIER, PROJECT_PREFIX, DEFAULT_TEXTURE, PRESET_PATH } =
		models
	let fileName = `${IDENTIFIER}.png`

	// If the TEXTURE variable, that should have been defined with a fileInput, hasn't been set, load the default texture from the preset
	if (!TEXTURE) TEXTURE = await loadPresetFile(DEFAULT_TEXTURE)
	else fileName = TEXTURE.name
	const fileNameNoExtension = fileName.replace(/.png|.tga|.jpg|.jpeg/gi, '')

	// Create the texture file in the user's project
	await createFile(`textures/blocks/${PRESET_PATH}${fileName}`, TEXTURE, {
		packPath: 'resourcePack',
	})
	// Merge data with terrain_texture.json to register the texture key
	await expandFile(
		'textures/terrain_texture.json',
		{
			texture_data: {
				[`${PROJECT_PREFIX}_${IDENTIFIER}`]: {
					textures: `textures/blocks/${PRESET_PATH}${fileNameNoExtension}`,
				},
			},
		},
		{ packPath: 'resourcePack' }
	)
}
```

## Handling Input Fields

When creating your preset, you should have defined inputs in the [`fields`](/extensions/presets/manifest/index.html#fields) property of your preset manifest. The variables that you assign these inputs to are accessed through `models` in a preset script. Here we will go over how to handle each type of input in a preset script.

### Text field

The [text field input](/extensions/presets/manifest/index.html#text-input) is simply assigned as a string.

```js
const { TEXT_FIELD_INPUT } = models

// Logs exactly what the user typed in the input
console.log(TEXT_FIELD_INPUT)
```

### File Input

The [file field input](/extensions/presets/manifest/index.html#file-input) is assigned a `File` object, which can be handled in a few different ways.

```js
const { FILE_FIELD_INPUT } = models

// Logs the name of the file that the user has input
console.log(FILE_FIELD_INPUT.name)

// The createFile function accepts a File in its data parameter, so this would write the data of the file that the user has input
await createFile('path/to/dest', FILE_FIELD_INPUT, {
	packPath: 'behaviorPack',
	openFile: true,
})
```

### Number Input

The [number slider input](/extensions/presets/manifest/index.html#number-input) is simply assigned a number.

```js
const { NUMBER_SLIDER_INPUT } = models

// Logs the number that was selected on the slider
console.log(NUMBER_SLIDER_INPUT)
```

### Switch Input

The [switch input](/extensions/presets/manifest/index.html#switch-input) is simply assigned a boolean.

```js
const { SWITCH_INPUT } = models

if (SWITCH_INPUT) {
	// Do something if the switch was turned on
} else {
	// Do something if the switch was turned off
}
```

### Select Input

The [select input](/extensions/presets/manifest/index.html#select-input) is assigned a string representing the chosen option. You will see that the value will depend on how the [`options`](/extensions/presets/manifest/index.html#options) were defined.

```js
const { SELECT_INPUT } = models

// Logs the selected option's "value" field, if defined. Otherwise it will be the display text of the option
console.log(SELECT_INPUT)
```
