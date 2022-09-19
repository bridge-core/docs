---
title: 🎴 @bridge/ui
description: Learn more about the @bridge/ui module that provides programmatic access to Vue components defined inside of the plugin's ui/ folder.
sidebar: scripts
---

# 🎴 @bridge/ui

This module provides programmatic access to [Vue](https://v2.vuejs.org/) components defined inside of the extension's `ui/` folder.
[View Source Code](https://github.com/bridge-core/editor/blob/main/src/components/Extensions/Scripts/Modules/ui.ts)

```js
import { ... } from '@bridge/ui'
```

[[toc]]

## 💼 Variables

### BuiltIn

TODO

- Type: `BuiltIn`

```js
//TODO
/*
BuiltIn includes
BaseWindow
SidebarWindow
DirectoryViewer
BridgeSheet
*/
```

### UI

This variable is of `any` type variable which references the name of your Vue filename located in `ui/` folder.

- Type: `any`

```js
//Accesses the component inside of the ui/Main.vue file
import { Main } from '@bridge/ui'

//Accesses the component inside of the ui/Nested/Main.vue file
import { Nested: { Main: Main2 } } from '@bridge/ui'
```