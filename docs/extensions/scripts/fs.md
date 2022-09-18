---
title: "📄 @bridge/fs"
description: Module that allows extensions to interact with the user's file system.
sidebar: scripts
---

# 📄 @bridge/fs

Utility module that provides access to environmental project data.
[View Source Code](https://github.com/bridge-core/editor/blob/main/src/components/FileSystem/FileSystem.ts)
```js
import { ... } from "@bridge/fs";
```

[[toc]]

## ⚡ Functions

### setup
The `setup` function does idk.

- Signature: `setup(baseDirectory)`
- Returns: `void`

```js
setup(FileSystemDirectoryHandle);
```

- Parameters

|Name         |Type              |
|-------------|------------------|
|baseDirectory|AnyDirectoryHandle|

---

### getDirectoryHandle
The `getDirectoryHandle` method returns a `FileSystemDirectoryHandle` for a subdirectory with the specified name within the directory handle on which the method is called.

- Signature: `getDirectoryHandle(path,__namedParameters)`
- Returns: `Promise`<`FileSystemDirectoryHandle`>

```js
getDirectoryHandle(); //I do not know what this does.
```

- Parameters

|Name             |Type                      |
|-----------------|--------------------------|
|path             |string                    |
|__namedParameters|Partial\<IGetHandleConfig `<-LINK THIS`>|

---