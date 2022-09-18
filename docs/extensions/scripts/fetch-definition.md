---
title: "🔗 @bridge/fetch-definition"
description: Learn more about the @bridge/fetch-definition module which grants access to the lightning cache database.
sidebar: scripts
---

# 🔗 @bridge/fetch-definition

This module grants access to bridge.'s lightning cache database.
[View Source Code](https://github.com/bridge-core/editor/blob/main/src/components/Extensions/Scripts/Modules/fetchDefinition.ts)

```js
import { ... } from '@bridge/fetch-definition'
```

[[toc]]

## ⚡ Functions

### fetchDefinition
The `fetchDefinition` searches through the definitions `fetchDefs` in [`fileType`](/extensions/misc/file-types.html) files for `fetchSearch`.

- Signature: `fetchDefinition`(`fileType`, `fetchDefs`, `fetchSearch`, `fetchAll?`)
- Returns: `Promise`<`string[]`>

```js
const walkAnimations = await fetchDefinition(
	'animation',
	['ids'],
	'animation.walk',
	false
)

// With fetchAll = false you still get an array, but it will simply only contain one string
const walkAnimation = walkAnimations[0];
```

- Parameters

|Name       |Type    |
|-----------|--------|
|fileType   |string  |
|fetchDefs  |string[]|
|fetchSearch|string  |
|fetchAll?  |boolean |