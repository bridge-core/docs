---
title: 📂 @bridge/com-mojang
description: Learn about the @bridge/com-mojang that allows you to access the com.mojang file system.
sidebar: scripts
---

# 📂 @bridge/com-mojang

This module allows access to the com.mojang file system.
[View Source Code](https://github.com/bridge-core/editor/blob/main/src/components/Extensions/Scripts/Modules/comMojang.ts)

```js
import { ... } from "@bridge/com-mojang"
```

[[toc]]

## 💼 Variables

### setup

A signal that states whether the [com.mojang](/guide/misc/com-mojang-syncing/index.html) folder has been setup by the user.

- Type: `Signal<void>`

```js
// Wait for the com.mojang folder to be setup before interacting with it
await setup.fired
// ...

// Check that the com.mojang folder has already been setup
if (setup.hasFired) {
    console.log("com.mojang linking has been setup")
}
```

## ⚡ Functions

### requestFileSystem

The `requestFileSystem` function returns the [com.mojang](/guide/misc/com-mojang-syncing/index.html) file system instance. 

- Signature: `requestFileSystem()`
- Returns: `Promise<FileSystem>`

```js
const comMojangFs = await requestFileSystem()

if (await comMojangFs.directoryExists('test')) {
    console.log('The folder "test" exists in the com.mojang folder.')
}
```

::: tip
This file system instance will have the same methods as the [@bridge/fs module](/extensions/scripts/fs), except for the `onBridgeFolderSetup` method.
:::