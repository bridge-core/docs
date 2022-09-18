---
title: "📂 @bridge/com-mojang"
description: Module that allows access to the com.mojang folder
sidebar: scripts
---

# 📂 @bridge/com-mojang

Module that allows access to the com.mojang folder.
[View Source Code](https://github.com/bridge-core/editor/blob/main/src/components/Extensions/Scripts/Modules/comMojang.ts)

```js
import { ... } from "@bridge/com-mojang";
```

[[toc]]

## 💼 Variables

### setup
States wether [com.mojang](/guide/misc/com-mojang-syncing/index.html) has been setup by the user.

- Signature: `setup`
- Returns: __`Signal`__<`void>`

```js
if(setup.hasFired)
{
    console.log("com.mojang linking has been setup");
}
```

## ⚡ Functions

### requestFileSystem
The `requestFileSystem` Returns the [com.mojang](/guide/misc/com-mojang-syncing/index.html) FileSystem instance.

- Signature: `requestFileSystem()`
- Returns: `Promise`<`any`>

```js
await requestFileSystem().then(element => {
    element.ThisIsBroken.IHaveNoIdeaWhatIAmDoing;
});
```