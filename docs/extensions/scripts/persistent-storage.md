---
title: '@bridge/persistent-storage'
description: Learn about the @bridge/persistent-storage module that allows your extension to store data between sessions.
sidebar: scripts
---

# 💾 @bridge/persistent-storage

This module grants access to methods to handle persistent idb data storage. When using this module, keep in mind the user can clear site data in their browser settings, so the data here is able to be lost.
[View Source Code](https://github.com/bridge-core/editor/blob/main/src/components/Extensions/Scripts/Modules/persistentStorage.ts)

```js
import { ... } from "@bridge/persistent-storage"
```

[[toc]]

## ⚡ Functions

### save

This allows you to save any type of data into persistent storage for your extension to access it at a later point.

-   Signature: `save(data: any)`
-   Returns: `Promise<void>`

```js
const settings = {
	a: {
		b: 'c',
	},
	d: ['e', 'f', 'g'],
}

await save(settings)
```

### load

The `load` function is used to access data that has been saved in local storage previously.

-   Signature: `load()`
-   Returns: `Promise<any>`

```js
const settings = await load()

console.log(settings.a.b)
```

### delete

This function clears any data that has been stored by your extension.

-   Signature: `delete()`
-   Returns: `Promise<void>`

```js
await delete()
const settings = await load()

console.log(settings.a.b) // undefined since data has been deleted
```
