---
title: '@bridge/import'
description: Learn more about @bridge/import module that allows access to bridge.'s import system.
sidebar: Scripts
---

# 📥 @bridge/import

Module that allows access to bridge.'s import system and register import handlers.
[View Source Code](https://github.com/bridge-core/editor/blob/main/src/components/Extensions/Scripts/Modules/import.ts)

```js
import { ... } from '@bridge/import'
```

[[toc]]

## ⚡ Functions

### addFolderImporter

TODO

-   Signature: <code>addFolderImporter(handle: <a href="#ifolderhandler">IFolderHandler</a>)</code>
-   Returns: `Promise<void> <-IDK if this is correct`

```js
//TODO
await addFolderImporter()
```

---

### importHandle

TODO

-   Signature: <code>importHandle(handle: <a href="#anyhandle">AnyHandle</a>)</code>
-   Returns: `Promise<void>`

```js
//TODO
await importHandle()
```

---

### registerOpenWithHandler

The `registerOpenWithHandler` function registers/adds a new handler in the Open With popup when you drag and drop a file onto bridge.

-   Signatue: <code>registerOpenWithHandler(handler: <a href="#ipluginopenwithaction">IPluginOpenWithAction</a>)</code>
-   Returns: `IDisposable`

```js
//TODO
registerOpenWithHandler()
```

## 📟 Interfaces

### AnyHandle

```ts
export type AnyHandle =
	| FileSystemFileHandle
	| FileSystemDirectoryHandle
	| VirtualHandle
```

---

### IPluginOpenWithAction

```ts
export interface IPluginOpenWithAction {
	icon: string
	name: string
	isAvailable?: (details: IOpenWithDetails) => Promise<boolean> | boolean
	onOpen: (details: IOpenWithDetails) => Promise<void> | void
}
```

---

### IFolderHandler

```ts
export interface IFolderHandler {
	icon: string
	name: string
	description: string
	onSelect: (directoryHandle: AnyDirectoryHandle) => Promise<void> | void
}
```
