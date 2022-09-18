---
title: "🔗 @bridge/fetch-definition"
description: Grants access to the lightning cache database.
sidebar: scripts

actions:
        - theme: brand
          text: Open Editor
          link: https://editor.bridge-core.app/
---

# 🔗 @bridge/fetch-definition

Grants access to the lightning cache database.
[View Source Code](https://github.com/bridge-core/editor/blob/main/src/components/Extensions/Scripts/Modules/fetchDefinition.ts)

```js
import { ... } from "@bridge/fetch-definition";
```

[[toc]]

## ⚡ Functions

### fetchDefinition
The `fetchDefinition` searches through the definitions `fetchDefs` in [`fileType`](/extensions/misc/file-types.html) files for `fetchSearch`.

- Signature: `fetchDefinition`(`fileType`, `fetchDefs`, `fetchSearch`, `fetchAll?`)
- Returns: `Promise`<`string[]`>

```js
const { fetchDefinition } = await require('@bridge/fetch-definition');

const walkAnimations = await fetchDefinition(
	'animation',
	['ids'],
	'animation.walk',
	false
);

// With fetchAll=false you still get a string[] even though it only has one entry
// => Consistency
const walkAnimation = walkAnimations[0];
```

- Parameters

|Name       |Type    |
|-----------|--------|
|fileType   |string  |
|fetchDefs  |string[]|
|fetchSearch|string  |
|fetchAll?  |boolean |