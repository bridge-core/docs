---
title: '🖨 Command Schema'
description: Learn the JSON schema bridge. uses for command validation and auto-completions.
sidebar: Misc
---

# 🖨 Command Schema

This documentation aims to introduce you to bridge.'s proprietary, internal JSON schema for command validation and auto-completions. You will learn about the following topics:

:ballot_box_with_check: The JSON format and its structure.<br/>
:ballot_box_with_check: How to define new commands.<br/>
:ballot_box_with_check: How to define new selector arguments.<br/>
:ballot_box_with_check: How to define new subcommands.<br/>

:::tip
You can find the internal file for bridge.'s command schema [here](https://github.com/bridge-core/editor-packages/blob/main/packages/minecraftBedrock/language/mcfunction/main.json). We also have a [JSON schema for the format](https://github.com/bridge-core/editor-packages/blob/main/packages/minecraftBedrock/language/mcfunction/schema/main.json).
:::

## Meta

### Regular Types

| Type           | Description                                          |
| -------------- | ---------------------------------------------------- |
| `command`      | Pop state and suggest another defined command        |
| `string`       | Any string is valid                                  |
| `number`       | Decimal or integer number                            |
| `boolean`      | Boolean; `true` or `false` literal                   |
| `selector`     | Minecraft selector, e.g. `@s`                        |
| `molang`       | Molang statement, e.g. `"query.is_jumping + 1"`      |
| `blockState`   | Block state, e.g. `[variant=smooth]`                 |
| `jsonData`     | JSON data, e.g. `{"foo": "bar"}`                     |
| `scoreData`    | Score data, e.g. `{my_score=1..4}`                   |
| `coordinate`   | Coordinate; one number or `~`/`^`                    |
| `subcommand`   | Proceed to propose any of this command's subcommands |
| `integerRange` | Integer range, e.g. `0`, `1..` or `1..4`             |

### Custom Types

Define custom types to be used within the schema.

```json
{
	"$customTypes": {
		"coordinates": [
			{
				"type": "coordinate"
			},
			{
				"type": "coordinate"
			},
			{
				"type": "coordinate"
			}
		]
	}
}
```

The example above would allow you to reference your custom type as `$coordinates` wherever you would normally use a regular type. Internally, bridge. then replaces `$coordinates` with the array of types you defined.

<!-- ## Defining a New Command

## Defining a New Selector Argument

## Defining a New Subcommand -->
