---
title: '@bridge/globals'
description: Learn about the @bridge/globals module that allows custom components, custom commands and other plugins to access shared data inside of a globals.json file in the project root.
sidebar: scripts
---

# 🌐 @bridge/globals

Utility module that allows custom components, custom commands and other extension types to access shared data inside of a globals.json file.
[View Source Code](https://github.com/bridge-core/editor/blob/main/src/components/Extensions/Scripts/Modules/globals.ts)

```js
import { ... } from '@bridge/globals'
```

## The globals.json file

This file should always be named `globals.json` and must be located in the root of your project (alongside files such as the [`config.json`](/guide/misc/project-config)). This file should simply contain the json data to be accessed by extension scripts, custom components, custom commands and more.

```json
{
	"settings": {
		"a": true,
		"b": false
	},
	"maximumLength": 164
}
```

## Accessing globals.json data

In order to access the data in the globals.json file, you simply need to import the `@bridge/globals` module and this will contain an object representing the globals.json file.

Example (continuing from the example above):

```js
import { settings, maximumLength } from '@bridge/globals'

console.log(settings.a) // true
console.log(settings.b) // false

console.log(maximumLength) // 164
```
