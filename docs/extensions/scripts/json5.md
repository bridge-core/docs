---
title: 🏗️ @bridge/json5
description: Learn about the @bridge/json5 module that gives access to json parsing with the json5 npm package.
sidebar: scripts
---

# 🏗️ @bridge/json5

Module that gives access to json parsing with the [json5 npm package](https://www.npmjs.com/package/json5).
[View Source Code](https://github.com/bridge-core/editor/blob/main/src/components/Extensions/Scripts/Modules/json5.ts)

```js
import { ... } from '@bridge/json5'
```

[[toc]]

## ⚡ Functions

### parse

The `parse` function parses a string that is in JSON format to a JavaScript object.

- Signature: `parse(str)`
- Returns: `any`

```js
const jsonStr = '{"Example":"Example Value"}'

const parsedJSON = parse(jsonStr)
console.log(parseJSON.Example)
```

---

### stringify

The `stringy` function converts a JavaScript object to a JSON string.

- Signature: `stringify(obj, replacer?, space?)`
- Returns: `string`

```js
const jsonObj = {
    Example: ExampleValue
}

const ConvertedJson = stringify(jsonObj)
console.log(ConvertedJson)
```