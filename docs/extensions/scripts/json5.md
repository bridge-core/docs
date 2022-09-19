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

The `parse` function parses a string that is in JSON format to a JavaScript object. This can be benefical over using the default `JSON.parse` since this parses the [json5 format](https://json5.org/) which means features like comments and trailing commas will not throw errors.

- Signature: `parse(str: string)`
- Returns: `any`

```js
const jsonStr = '{ "example": "Example Value" }'

const parsedJSON = parse(jsonStr)
console.log(parsedJSON.example)
```

---

### stringify

The `stringify` function converts a JavaScript object to a JSON string with the specified formatting.

- Signature: `stringify(obj: any, replacer?: ((this: any, key: string, value: any) => any), space?: space?: string | number)`
- Returns: `string`

```js
const jsonObj = {
    example: 'ExampleValue'
}

const convertedJson = stringify(jsonObj)
// When you have converted an object to a string, it can be written to a file for example
await writeFile('./test.json', convertedJson)
```