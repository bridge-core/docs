---
title: 🧭 @bridge/sidebar
description: Learn about the @bridge/sidebar module that allows extensions to create sidebar tabs.
sidebar: scripts
---

# 🧭 @bridge/sidebar

Module that allows extensions to create sidebar tabs.
[View Source Code](https://github.com/bridge-core/editor/blob/main/src/components/Extensions/Scripts/Modules/sidebar.ts)

```js
import { ... } from '@bridge/sidebar'
```

[[toc]]

## ⚡ Functions

### create

This function creates a new sidebar element and adds it to the current workspace.

- Signature: `create(config)`
- Returns: `SidebarElement`

```js
create({
	   id: 'myExtension',
	   displayName: 'Click Me',
	   icon: 'mdi-apple',
	   component: MyComponent //MyComponent is from @bridge/ui.
})
```