---
title: '📝 Preset Manifest'
description: "Learn about the manifest used inside of bridge.'s presets."
sidebar: 'presets'
---

# :memo: Preset Manifest

The preset manifest is essential for bridge. to register your preset. Below are detailed descriptions all of the fields available in a preset manifest.

## name

- Type: `string`
- Required: :white_check_mark:

This states the name that you want to give to your preset. It will be the primary text used to display the preset in bridge.s UI, both in the sidebar and window content of the **New File** window.

```json
{
    "name": "Simple Entity"
}
```

## description

- Type: `string`
- Required: :no_entry_sign:

This should be a description of what this preset creates. In bridge.'s UI, this will display when the preset is selected in the **New File** window, under the preset [name](#name).

```json
{
    "description": "Creates a basic entity."
}
```

## icon

- Type: `string`
- Required: :white_check_mark:

This must be the name of a [material design icon](https://materialdesignicons.com/), prefixed with `mdi-`. To use an icon from this site, find an icon that you like, either by looking through the list or searching, and hover your mouse over it. In the tooltip that appears, you should copy the id at the top and prefix it with `mdi-`. For example, an icon with an id of `rocket` would be `mdi-rocket` in the `icon` field.

```json
{
    "icon": "mdi-minecraft"
}
```

## category

- Type: `string`
- Required: :white_check_mark:

TODO

```json
{
    "category": "fileType.entity"
}
```

```json
{
    "category": "[Custom Category]"
}
```

## requires

- Type: `object`
- Required: :white_check_mark:

TODO

```json
{
    "requires": {
        "packTypes": ["behaviorPack", "resourcePack"],
        "targetVersion": [">=", "1.19.0"],
        "experimentalGameplay": ["holidayCreatorFeatures", "!upcomingCreatorFeatures"]
    }
}
```

## additonalModels

- Type: `Record<string, any>`
- Required: :no_entry_sign:

TODO

```json
{
    "additonalModels": {
        "PRESET_PATH": "entities/",
        "CUSTOM_VARIABLE": "data"
    }
}
```

## fields

- Type: `string`
- Required: :white_check_mark:

TODO

```json
{
    "fields": [
        [
            "Identifier",
            "IDENTIFIER",
            { "validate": ["required", "alphanumeric", "lowercase"] }
        ]
    ]
}
```

```json
{
    "fields": [
        [
			"Entity Model (Optional)",
			"MODEL",
			{
				"type": "fileInput",
				"accept": "application/json",
				"optional": "true",
				"icon": "mdi-file-chart"
			}
		]
    ]
}
```

## createFiles

- Type: `string`
- Required: :no_entry_sign:

TODO

```json
{
    "createFiles": [
        [
			"entity.json",
			"entities/{{PRESET_PATH}}{{IDENTIFIER}}.json",
			{ "inject": ["IDENTIFIER", "PROJECT_PREFIX", "PRESET_PATH"], "openFile": true, "packPath": "behaviorPack" }
		]
    ]
}
```

```json
{
    "createFiles": [
        "presetScript/entityImages.js"
    ]
}
```

## expandFiles

- Type: `string`
- Required: :no_entry_sign:

TODO

```json
{
    "expandFiles": [
        [
			"en_US.lang",
			"texts/en_US.lang",
			{ "inject": ["IDENTIFIER", "DISPLAY_NAME", "PROJECT_PREFIX"], "packPath": "resourcePack" }
		]
    ]
}
```
