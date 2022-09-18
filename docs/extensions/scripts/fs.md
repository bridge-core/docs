---
title: "📄 @bridge/fs"
description: Learn about the @bridge/fs module that allows extensions to interact with the user's file system.
sidebar: scripts
---

# 📄 @bridge/fs

This module allows extensions to interact with the file system, contained inside of the user's bridge. folder.
[View Source Code](https://github.com/bridge-core/editor/blob/main/src/components/FileSystem/FileSystem.ts)
```js
import { ... } from '@bridge/fs'
```

[[toc]]

## ⚡ Functions

### setup

TODO

- Signature: `setup(baseDirectory)`
- Returns: `void`

```js
setup(FileSystemDirectoryHandle)
```

---

### getDirectoryHandle

TODO

The `getDirectoryHandle` method returns a `FileSystemDirectoryHandle` for a subdirectory with the specified name within the directory handle on which the method is called.

- Signature: `getDirectoryHandle(path,__namedParameters)`
- Returns: `Promise<FileSystemDirectoryHandle>`

```js
getDirectoryHandle(); //I do not know what this does.
```