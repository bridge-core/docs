---
title: '📝 Documentation'
description: Read about what properties make up a snippet's JSON file.
sidebar: 'snippets'
---

# 📝 Snippet Documentation

A snipper file should contain some information on how to display your snippet as well as what data it should insert into the user's file.

## name

-   Type: `string`
-   Required: :white_check_mark:

This states the name of your snippet and will be used by bridge. to display your snippet inside of the auto-completions list. This should be something that the user can find your snippet with.

```json
{
	"name": "Snippet: Entity Melee Attack"
}
```

## description

-   Type: `string`
-   Required: :no_entry_sign:

Here you can set a short description of what your snippet will add to the file.

```json
{
	"description": "Adds entity attacking behaviors."
}
```

## targetFormatVersion

-   Type: `{ min?: string; max?: string }`
-   Required: :no_entry_sign

This field allows you to specifiy which target Minecraft versions that your snippet should be compatible with. The given `min` and `max` values will be used to compare with the target version that is set in the user's config. This is useful for stopping your snippet from being used with versions where the syntax may be invalid.

```json
{
	"targetFormatVersion": {
		"min": "1.16.0",
		"max": "1.18.0"
	}
}
```

## fileTypes

-   Type: `string[]`
-   Required: :white_check_mark:

This should define the [ids of the file types](/extensions/misc/file-types) that your snippet is able to be used in.

```json
{
	"fileTypes": ["entity"]
}
```

## locations

-   Type: `string[]`
-   Required: :no_entry_sign:

This states the locations inside of a JSON file where the snippet should be allowed. It should be a list of glob patterns that specify where the snippet is permitted.

```json
{
	"locations": [
		"minecraft:entity/components",
		"minecraft:entity/component_groups/*"
	]
}
```

## data

-   Type: `any`
-   Required: :white_check_mark:

The data that your snippet should insert is defined here; if it is a JSON file then it should be an object, but for text files, it should be a string to be inserted into the file.

```json
{
    "data": {
        "minecraft:behavior.look_at_player": {
			"priority": 5
		}
    }
}
```

```json
{
    "data": "# Hello World\nsay test"
}
```
