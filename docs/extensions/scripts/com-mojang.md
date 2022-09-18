---
title: "📂 @bridge/com-mojang"
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
States whether [com.mojang](/guide/misc/com-mojang-syncing/index.html) has been setup by the user.

- Signature: `setup`
- Returns: `Signal<void>`

```js
if (setup.hasFired) {
    console.log("com.mojang linking has been setup")
}
```

## ⚡ Functions

### requestFileSystem
The `requestFileSystem` Returns the [com.mojang](/guide/misc/com-mojang-syncing/index.html) FileSystem instance.

- Signature: `requestFileSystem()`
- Returns: `Promise<any>`

```js
const comMojangFs = await requestFileSystem()

if (await comMojangFs.directoryExists('test')) {
    console.log('The folder "test" exists in the com.mojang folder.')
}
```