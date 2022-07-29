---
title: 📝 Extension Manifest
description: Learn about the structure of an extension manifest.
sidebar: extensions
---

# 📝 Extension Manifest

The extension manifest is used by bridge. to register the extension so it can be used. It contains important information that bridge. requires and this information is described below.

## name

-   Type: `string`
-   Required: :white_check_mark:

This defines the name of your extension and will be shown in bridge.'s extension store UI.

```json
{
	"name": "My Extension"
}
```

## description

-   Type: `string`
-   Required: :white_check_mark:

This field should describe what your extension does in some detail. It will be displayed in bridge.'s extension store UI, underneath the [`name`](#name).

```json
{
	"description": "This extensions adds..."
}
```

## icon

-   Type: `string`
-   Required: :no_entry_sign:

This accepts the [standard icon format](/extensions/misc/icons/) that bridge. uses across its UI. This will be shown next to the [`name`](#name) of the extension.

```json
{
	"icon": "mdi-cloud"
}
```

## author

-   Type: `string`
-   Required: :white_check_mark:

This defines the author of the extension, which should be your name! This will be show in bridge.'s extension store UI at the start of the [`tags`](#tags) list. You should keep this name consistent between all of your extensions to allow users to easily filter by your extensions.

```json
{
	"author": "My Name"
}
```

## releaseTimestamp

-   Type: `string`
-   Required: :white_check_mark:

**This field shouldn't be added by the user.** When your extension is published, this will automatically be added to your manifest. When updating your extension, you shouldn't modify this field. It is used by bridge. to sort extensions to put newest first.

```json
{
	"releaseTimestamp": 1620755291316
}
```

## version

-   Type: `string`
-   Required: :white_check_mark:

The version of your extension should be a [semantic version](https://semver.org/) string. When you want to publish an update your extension, you should increase the version number.

:::tip
When publishing your extension for the first time, it makes sense to set the version to `1.0.0`
:::

```json
{
	"version": "1.0.0"
}
```

## id

-   Type: `string`
-   Required: :white_check_mark:

Your extension id must be unique to your extension and must remain the same between extension updates. In order to keep your extension's id unique, you should generate a [uuid](https://www.uuidgenerator.net/version4) for it.

```json
{
	"id": "e77ac43d-1172-47ec-a09f-3537689e6912"
}
```

## readme

-   Type: `string`
-   Required: :no_entry_sign:

This allows you to set a link to where users can read more about about your extension. This could be the url to your own website or to a readme in a GitHub repository. It will create a button on your extension, in the extension store, that the user can press to go to the url you have specified here.

```json
{
	"readme": "https://github.com/bridge-core/plugins/blob/master/plugins/Templater/README.md"
}
```

## tags

-   Type: `string[]`
-   Required: :white_check_mark:

This field allows you to assign tags to your extension. A tag is shown as a colored label underneath your extension listing in the store and a user can filter extensions by tag, therefore your tags must be carefully chosen to represent the content of your extension.

The available tags are the following: `Curated`, `Verified`, `Utility`, `Theme`, `Snippets`, `Component`, `Command`, `Presets`, `Compiler`

```json
{
	"tags": ["Theme"]
}
```

## target

-   Type: `string`
-   Required: :white_check_mark:

Though this field isn't required for your extension to show in bridge., it is essential to add when publishing it to the extension store. This is because the extension API differs between bridge. v2 and bridge. v1, so you must specify which major app version this extension is for. As this documentation is designed for bridge. v2, it is recommended that you set this field to `"v2"`. The available options are: `"both"`, `"v2"` or `"v1"`.

```json
{
	"target": "v2"
}
```

## dependencies

-   Type: `string[]`
-   Required: :no_entry_sign:

This property allows you to define which other extensions should be loaded before your extension in case your extension depends on the functionality of another extension. You can reference an extension in this list by its [`id`](#id).

```json
{
	"dependencies": ["2959c702-d3a4-4e69-94ce-4ad18e9f816a"]
}
```

## compiler

-   Type: `{ plugins: Record<string, string> }`
-   Required: :no_entry_sign:

The `compiler` should be used exclusivley for extensions containing [compiler plugins](/extensions/compiler-plugins). It is used to register the extension to Dash so that the user can use your plugin by referencing its id in their [project config](/guide/misc/project-config) or [compiler config](/guide/advanced/dash/index.html#adding-new-profiles) file. It should be an object containing a `plugins` property which contains key/value pairs of unique plugin identifiers to file path relative to the root of the extension.

The example below would have the following folder structure:

```
.
├─ 📁 myExtension
│  ├─ 📝 manifest.json
│  └─ 📁 compiler
│     └─ 📄 main.js
```

```json
{
	"compiler": {
		"plugins": {
			"myPluginId": "compiler/main.js"
		}
	}
}
```

## contributeFiles

-   Type: `Record<string, { pack: TPackTypeId; path: string }>`
-   Required: :no_entry_sign:

Sometimes your extension may need to add files to the user's project and that is where this field is used; it should define what and where to copy a file or folder. The source can either be the path to a file or folder relative to the extension root that you want to copy to the user's project. The destination should be an object with `pack` and `path` properties. `pack` should be a [pack type id](/extensions/misc/pack-types) specifying which pack type to copy to and `path` should be the path to the destination relative to the root of the pack specified.

Internally, this field works by checking the extension for a `.installed` file; if it exists then the extension is already installed and nothing will happen. When the file isn't present, bridge. will install the files to the project. You should **delete this file to in order to trigger bridge.'s file installation** and test this field.

:::tip
The main purpose of this field is to add [custom components](/guide/advanced/custom-components/), [custom commands](/guide/advanced/custom-commands/) and [custom molang files](/guide/advanced/molang-files) to the user's project.
:::

Copying over files:

```json
{
	"contributeFiles": {
		"components/item/myComponent.js": {
			"pack": "behaviorPack",
			"path": "components/item/myComponent.js"
		}
	}
}
```

Copying over files:

```json
{
	"contributeFiles": {
		"components/item": {
			"pack": "behaviorPack",
			"path": "components/item/"
		}
	}
}
```

## compatibleAppVersions

-   Type: `{ min?: string; max?: string }`
-   Required: :no_entry_sign:

This field allows you to specify the range of bridge. versions that your extension is available for. This is used to stop users from using an extension that doesn't work on their bridge. version. Incompatibilities with bridge. versions can happen when an extension utilizes a new extension capability or uses old formats.

```json
{
	"compatibleAppVersions": {
		"min": "2.3.0"
	}
}
```
