---
title: ⚙️ Project Config
sidebar: Misc
---

# ⚙️ Project Config

This page will cover the different properties that are accepted in a project config. This follows [the standard which has been established with the Bedrock OSS Organisation](https://github.com/Bedrock-OSS/project-config-standard). The file should be located in the root of your project and be named `config.json`.

## type

-   Type: `string`
-   Required: :white_check_mark:

This field should specify the type of project and can be either `minecraftBedrock` or `minecraftJava`.

```json
{
	"type": "minecraftBedrock"
}
```

## name

-   Type: `string`
-   Required: :white_check_mark:

The name property defines the name of the project. It should be a name that encompasses the entire project rather than for a specific element of the project, e.g. `My Project` rather than `My Project BP`.

```json
{
	"name": "My Project"
}
```

## description

-   Type: `string`
-   Required: :white_check_mark:

This property should be a short description of what your project is. It can be left blank, but the property itself must be present.

```json
{
	"description": "My project adds..."
}
```

## authors

-   Type: `(string | { name: string; logo?: string })[]`
-   Required: :white_check_mark:

This should state the authors of the project. It should be an array of strings where each string is the name of an author. Alternatively, the array can contain objects with `name` and `logo` properties where `logo` is optional. The `name` property will be the name of the author and the `logo` can be a path to an image (`.png` or `.jpg`) relative to the config; this will serve as a logo for the author.

```json
{
	"authors": ["Joelant05"]
}
```

## targetVersion

-   Type: `string`
-   Required: :white_check_mark:

The target version of your project should simply be the [Minecraft version](https://github.com/bridge-core/editor-packages/blob/main/packages/minecraftBedrock/formatVersions.json) that you are developing for. This will be used by bridge. to determine auto-completions and which files you can create, in order to prevent you from using files and syntax that you shouldn't.

```json
{
	"targetVersion": "1.19.10"
}
```

## experimentalGameplay

-   Type: `Record<string, boolean>`
-   Required: :white_check_mark:

Here you can set which experimental gameplay toggles that your project is using. This is used to provide correct auto-completions and will filter the files that you can create. If an experimental gameplay toggle is missing, from this property, it should be assumed to be `false`. It should be key/value pairs that map [experimental gameplay ids](https://github.com/bridge-core/editor-packages/blob/main/packages/minecraftBedrock/experimentalGameplay.json) to a boolean that states whether it should be enabled or disabled.

```json
{
	"experimentalGameplay": {
		"holidayCreatorFeatures": true,
		"upcomingCreatorFeatures": false,
		"enableGameTestFramework": true,
		"educationEdition": false
	}
}
```

## namespace

-   Type: `string`
-   Required: :white_check_mark:

The namespace of your project should be a short, alphanumeric, lowercase string that prefixes all identifiers in your project. For example, an if your namespace is `bridge` and item identifier is `apple` then you should change this to `bridge:apple` to include the namespace. This is used by bridge. to provide identifier auto-completions and syntax highlighting of the namespace.

```json
{
	"namespace": "bridge"
}
```

## packs

-   Type: `Record<PackTypeId, string>`
-   Required: :white_check_mark:

This property is crucial in telling tools, including bridge., where to find the packs within your project. This should be a map of [pack type ids](/extensions/misc/pack-types) to strings that specify a path to the pack folder, relative to the project config.

```json
{
	"packs": {
		"behaviorPack": "./BP",
		"resourcePack": "./RP"
	}
}
```

## worlds

-   Type: `string[]`
-   Required: :white_check_mark:

The worlds property allows you to define a list of glob patterns that point to folder storing Minecraft worlds, relative to the project config. These glob patterns should never end in `**` to avoid ambiguity.

```json
{
	"worlds": ["./worlds/1", "./worlds/other/*"]
}
```

## packDefinitions

-   Type: `Record<string, { type?: string; include: string[]; exclude: string[] }>`
-   Required: :white_check_mark:

This field allows you to add additonal data to the project that the tool may not be able to collect easily from your project. For bridge., this could be used to add entity tags to bridge.'s dynamic auto-completions, that can't be cached by bridge. as they are referenced by a command block inside of a world.

:::warning
This field is not yet utilized by bridge. and in order to see the progress of the implementation, see the [GitHub issue that is tracking this feature](https://github.com/bridge-core/editor/issues/126).
:::

```json
{
	"packDefinitions": {
		"socreboardObjectives": {
			"type": "dummy",
			"include": ["red_team_score", "blue_team_score"]
		},
		"tags": {
			"include": ["my_entity_tag", "other_tag"],
			"exclude": ["bad_tag"]
		}
	}
}
```

## bdsProject

-   Type: `boolean`
-   Required: :white_check_mark:

This property is simply used to define whether this project is designed for use on Bedrock Dedicated Server software (BDS). This will be used to determine whether BDS exclusive features should be available in the project, such as the `mojang-minecraft-server-admin` GameTest module.

```json
{
	"bdsProject": true
}
```

## Additional Configuration

The project config standard also allows for different tools to add their own configuration options under a unique tool id property.

bridge. utilizes the unique `compiler` and `bridge` properties.

The `compiler` property is used to configure the default [Dash compiler](/guide/advanced/dash/index) build profile. Documentation for this field can be found [here](/guide/advanced/dash/index.html#default-profile).

The `bridge` property can be used to specify additional configuration to bridge. It accepts a `v1CompatMode` field which should be a boolean stating whether bridge. should run in v1 compatibility mode for a project that has been converted from bridge. v1.
