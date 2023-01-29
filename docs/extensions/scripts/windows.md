---
title: 🏠 @bridge/windows
description: Learn about the @bridge/windows which allows access to bridge's windows system.
sidebar: scripts
---

# 🏠 @bridge/windows

This module allows access to the windows system.
[View Source Code](https://github.com/bridge-core/editor/blob/main/src/components/Extensions/Scripts/Modules/windows.ts)

```js
import { ... } from "@bridge/windows"
```

[[toc]]

## ⚡ Functions

### createInformationWindow

The `createInformationWindow` function creates a new information window that pop's up and tells the user some information.

- Signature: `createInformationWindow(displayName: string, displayContent: string)`
- Returns: `void`

```js
createInformationWindow("Title", "Your information content");
```

---

### createInputWindow

The `createInputWindow` function creates a new window specifically for text inputs.

- Signature: `createInputWindow(displayName: string, inputLabel: string, defaultValue: string, onConfirm: (input: string) => void, expandText?: string)`
- Returns: `void`

```js
TODO
```

---

### createDropdownWindow

The `createDropdownWindow` function creates a new window for a dropdown input.

- Signature: `createDropdownInput(displayName: string, placeholder: string, options: Array<string>, defaultSelected: string, onConfirm: (input: string) => void)`
- Returns: `void`

```js
TODO
```

---
### createConfirmWindow

The `createConfirmWindow` function creates a new window for either a cancel or confirm action.

- Signature: `createConfirmWindow(displayContent: string, confirmText: string, cancelText: string, onConfirm: () => void, onCancel: () => void)`
- Returns: `void`

```js
createConfirmWindow("Confirmation Description", "Confirm", "Deny", () => {
    console.log("Confirmed")
}, () => {
    console.log("Denied")
})
```