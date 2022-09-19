---
title: 🔗 @bridge/fetch-definition
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

The `fetchDefinition` function is used to search the lightning cache database, which bridge. uses to dynamically store data from a user's project.

- Signature: `fetchDefinition(fileType: string, fetchDefs: string[], fetchSearch: string, fetchAll = false)`
- Returns: `Promise<string[]>`

```js
const walkAnimations = await fetchDefinition(
	'animation', // The file type to get the cache data from
	['ids'], // The cache keys to be fetched
	'animation.walk', // A string to filter the results by
	false // Whether to get all defintions or just the first
)

// With fetchAll = false you still get an array, but it will simply only contain one string
const walkAnimation = walkAnimations[0];
```