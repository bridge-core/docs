---
title: ❕ @bridge/notifications
description: Learn about the @bridge/notifications module that allows extensions to create notifications.
sidebar: scripts
---

# ❕ @bridge/notifications

Module that allows extensions to create notifications.
[View Source Code](https://github.com/bridge-core/editor/blob/main/src/components/Extensions/Scripts/Modules/notifications.ts)

```js
import { ... } from '@bridge/notifications'
```

[[toc]]

## ⚡ Functions

### create

The `create` function allows you to create notifications in bridge's notification system. This will show up in the sidebar.

- Signature: <code>create(config: <a href="#inotificationconfig">INotificationConfig</a>)</code>
- Returns: `Notification`

```js
create(
    icon: 'mdi-apple',
    message: 'Hello World!',
    color: 'blue'
    textColor: 'white',
    disposeOnMiddleClick: true,
    () => {
        // Do something...
        },
    () => {
        // Do something...
        }
    )
```

---

### createError

The `create` function allows you to create a new error notification. This will show up in the sidebar.

- Signature: `createError(error: Error)`
- Returns: `IDisposable`

```js
createError(new Error('Oops, something went wrong :('))

try {
    const t = 0
    t = 2 // Throws error, can't reassign constant
} 
catch (error) {
    createError(error)
}
```

## 📟 Interfaces

### INotificationConfig

```ts
export interface INotificationConfig {
	id?: string
	icon?: string
	message?: string
	color?: string
	textColor?: string
	disposeOnMiddleClick?: boolean
	isVisible?: boolean

	onClick?: () => void
	onMiddleClick?: () => void
}
```