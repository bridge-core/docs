---
title: ⚙️ Project Config
sidebar: misc
---

# ⚙️ Project Config

This page will cover the different properties that are accepted in a project config. This follows [the standard which has been established with Bedrock OSS](https://github.com/Bedrock-OSS/project-config-standard). The file should be located in the root of your project and be named `config.json`.

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

TODO

```json

```

## packs

-   Type: `object`
-   Required: :white_check_mark:

TODO

```json

```

## worlds

-   Type: `string[]`
-   Required: :white_check_mark:

TODO

```json

```

## packDefinitions

-   Type: `object`
-   Required: :white_check_mark:

TODO

```json

```

## bdsProject

-   Type: `boolean`
-   Required: :white_check_mark:

TODO

```json

```

## Additional Configuration

The project config standard also allows for different tools to add their own configuration options under a unique tool id property.

bridge. utilizes the unique `compiler` property in order to configure the default [Dash compiler](/guide/advanced/dash/index) build profile. Documentation for this field can be found [here](/guide/advanced/dash/index.html#default-profile).
