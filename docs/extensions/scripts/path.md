---
title: 📕 @bridge/path
description: Learn about the @bridge/path module that gives access to the node 'path' module.
sidebar: scripts
---

# 📕 @bridge/path

This module gives access to the some methods from the node [path](https://nodejs.org/docs/latest/api/path.html) module.
[View Source Code](https://github.com/bridge-core/editor/blob/main/src/utils/path.ts)

```js
import { ... } from '@bridge/path'
```

[[toc]]

## ⚡ Functions

### dirname

This returns the directory name of a given path.

- Signature: `dirname(path: string)`
- Returns: `string`

```js
console.log(dirname('path/to/folder'))
```

---

### join

The `join` function joins the arguments together and normalises the resulting path.

- Signature: `join(...paths: string[])`
- Returns: `string`

```js
let userInput
// Get input ...

// resolvePackPath from @bridge/env
const behaviorPath = resolvePackPath(
    'behaviorPack',
    join('entities', userInput)
)
// This path will point to the file 'BP/entities/${userInput}'
```

---

### extname

This function returns the extension of the path, from the last '.' to end of string in the last portion of the path. If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string

- Signature: `extname(path: string)`
- Returns: `string`

```js
const fileType = extname(myPath)
switch (fileType) {
    case '.json':
        console.log('This is a json file')
        break
    case '.html':
        console.log('This is a html file')
        break
    case '.css':
        console.log('This is a css file')
        break
}
```

---

### basename

The `basename` function returns the last section of the given path. This is often used to extract the file name from a path. An extension can be specified to be removed from the result.

- Signature: `basename(path: string, extension?: string)`
- Returns: `string`

```js
const fileName = basename('BP/entities/allay.json')
console.log(fileName) // allay.json

const fileNameNoExt = basename('BP/entities/allay.json', '.json')
console.log(fileNameNoExt) // allay
```

---

### resolve

From left to right, this function joins each segment together and resolves to an absolute path.

- Signature: `resolve(...pathSegments: string[])`
- Returns: `string`

```js
console.log(resolve('BP/templates', '../entities/pig.json')) // BP/entities/pig.json
```

---

### relative

This solves the relative path from `from` to `to`. At times we have two absolute paths, and we need to derive the relative path from one to the other.

- Signature: `relative(from: string, to: string)`
- Returns: `string`

```js
const start = 'RP/textures/entity/pig/pig.png'
const end = 'RP/textures/items/apple.png'

console.log(relative(start, end)) // ../../items/apple.png
```