---
title: '🧱 Presets'
description: "Learn about bridge.'s presets and how to create them."
sidebar: 'presets'
nav_order: -1
---

# 🧱 Presets

This page walks you through bridge.'s preset system and details how to create your own preset.

In this page you will learn the following:

:ballot_box_with_check: What is a preset?<br />
:ballot_box_with_check: How to create a simple preset.<br />
:ballot_box_with_check: How presets can become more powerful.<br />

## Basics

A preset is a collection of files that can be created through a simple form inside of bridge.'s "New File" window. They are useful in a variety of ways and power [bridge.'s built-in file creation options](https://github.com/bridge-core/editor-packages/tree/main/packages/minecraftBedrock/preset). Extensions allow you to build your own presets and you will find out how to do so below!

:::tip
If you already know how to make presets and want to discover how to make more [advanced presets](#advanced-presets), learn about [preset scripts](/extensions/presets/preset-scripts)!
:::

## Creating A Simple Preset

### Setup

Before you begin writing your preset, you must set up an [extension](/extensions/index.html#creating-extensions) to contain your presets.
Once you have a valid extension set up, you can begin by creating a `presets` folder inside of the extension's folder. **This directory will contain a folder for each preset** inside of your extension.

Inside of this `presets` folder create a folder for your first preset. Here, our example preset will be a simple entity preset. Therfore, we will create a folder called `simpleEntity` in the `presets` folder.

```txt{3}
.
├─ 📁 presets
│  └─ 📁 simpleEntity
```

### Preset Manifest

Every preset needs a `manifest.json` file in order to tell bridge. what inputs to take from the user and then how to create these files from the user input. The manifest should be created in the root of your preset's folder.

```txt{4}
.
├─ 📁 presets
│  ├─ 📁 simpleEntity
│  │  └─ 📝 manifest.json
```

In this file we will write the following:

```json
{
	"name": "Simple Entity",
	"description": "Creates a new simple entity.",
	"icon": "mdi-minecraft",
	"category": "fileType.entity",
	"requires": {
		"packTypes": ["behaviorPack", "resourcePack"]
	},
	"fields": [
		[
			"Identifier",
			"IDENTIFIER",
			{ "validate": ["required", "alphanumeric", "lowercase"] }
		]
	],
	"createFiles": [
		[
			"entity.json",
			"entities/{{IDENTIFIER}}.json",
			{
				"inject": ["IDENTIFIER", "PROJECT_PREFIX"],
				"openFile": true,
				"packPath": "behaviorPack"
			}
		],
		[
			"clientEntity.json",
			"entity/{{IDENTIFIER}}.json",
			{ "inject": ["IDENTIFIER"], "packPath": "resourcePack" }
		]
	]
}
```

This is quite a lot to understand so lets break this down a little.

-   [`name`](/extensions/presets/manifest/index.html#name), [`description`](/extensions/presets/manifest/index.html#description), [`icon`](/extensions/presets/manifest/index.html#icon) and [`category`](/extensions/presets/manifest/index.html#category) are strings that tell bridge. how to display the preset in the **New File** window.
-   [`requires`](/extensions/presets/manifest/index.html#requires) gives bridge a set of conditions that need to be true in the current project for the preset to be enabled.
-   [`fields`](/extensions/presets/manifest/index.html#fields) defines a list of inputs to show in the **New File** window when creating the preset.
-   [`createFiles`](/extensions/presets/manifest/index.html#createfiles) provides bridge. a list of files to copy from your preset's folder to the user's project when the preset is created.

:::tip
Don't forget to check out our more detailed [preset manifest documentation](/extensions/presets/manifest/).
:::

### Add Your Files

Once you have created your preset manifest, you can add the files that your preset uses into the folder for your preset.

In our example entity preset, the extension folder will look like this:

```
.
├─ 📁 presets
│  ├─ 📁 simpleEntity
│  │  ├─ 📝 manifest.json
│  │  ├─ 📄 entity.json
│  │  └─ 📄 clientEntity.json
```

## Advanced Presets

This guide has just scraped the surface of what is possible with bridge.'s powerful preset system! If you want to dive deeper into presets, you should check out the various different input types available in the [`field`](/extensions/presets/manifest/index.html#field) property of the preset manifest.

However, to create more advanced presets, you can check out [preset scripts](/extensions/presets/preset-scripts)! These allow you to more deeply customize how files are created in a project and are written in JavaScript, meaning you have access to programming constructs such as iterations and selections.
