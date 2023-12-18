---
title: '@bridge/utils'
description: Learn more about the @bridge/utils module that provides common functions to developers.
sidebar: Scripts
---

# 🔧 @bridge/utils

This module provides common utility functions to extension developers.
[View Source Code](https://github.com/bridge-core/editor/blob/main/src/components/Extensions/Scripts/Modules/utils.ts)

```js
import { ... } from '@bridge/utils'
```

[[toc]]

## ⚡ Functions

### openExternal

The `openExternal` function opens a given url in a new window inside of the user's default browser.

-   Signature: `openExternal(url: string)`
-   Returns: `void`

```js
openExternal('https://github.com/bridge-core/editor')
```
