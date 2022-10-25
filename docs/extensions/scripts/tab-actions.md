---
title: 🏃‍♂️ @bridge/tab-actions
description: Learn more about @bridge/tab-actions module that allows access to bridge.'s tab action system.
sidebar: scripts
---

# 🏃‍♂️ @bridge/tab-actions

Module that allows access to bridge.'s tab action system.
[View Source Code](https://github.com/bridge-core/editor/blob/main/src/components/Extensions/Scripts/Modules/TabAction.ts)

```js
import { ... } from '@bridge/tab-actions'
```

[[toc]]

## ⚡ Functions

### addTabActions

the addTabActions function adds the default tab actions for the specific file tab.

- Signature: `addTabActions(tab: any)`
- Returns: `Promise<void>`

```js
TODO
```

---

### register

the register function registers a new tab action.

- Signature: <code>register(definition: <a href="#itabactionconfig">ITabActionConfig</a>)</code>
- Returns: `Promise<IDisposable>`

```js
TODO
```

---

### registerPreview

the register function registers a new tab preview.

- Signature: <code>registerPreview(definition: <a href="#itabpreviewconfig">ITabPreviewConfig</a>)</code>
- Returns: `Promise<IDisposable>`

```js
TODO
```

## 📟 Interfaces

### ITabActionConfig

```js
export interface ITabActionConfig {
	icon: string
	name: string
	trigger(tab: FileTab): Promise<void> | void
	isFor(tab: FileTab): Promise<boolean> | boolean
	isDisabled?: (tab: FileTab) => boolean
}
```

---

### ITabPreviewConfig

```js
export interface ITabPreviewConfig {
	name: string
	fileType: string
	createPreview(tabSystem: TabSystem, tab: FileTab): Promise<Tab | undefined>
}
```