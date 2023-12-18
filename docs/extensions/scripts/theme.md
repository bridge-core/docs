---
title: '@bridge/theme'
description: Learn about the @bridge/theme module that allows you to interact with bridge.'s theme system.
sidebar: scripts
---

# 🎨 @bridge/theme

This allows your extension to interact with bridge.'s theme system.
[View Source Code](https://github.com/bridge-core/editor/blob/main/src/components/Extensions/Scripts/Modules/theme.ts).

```js
import { ... } from '@bridge/theme'
```

[[toc]]

## ⚡ Functions

### onChange

This function is used to attach a callback to be executed when the user switches between themes. You can access whether the new theme is a dark or light mode theme.

-   Signature: `onChange((func: (mode: 'dark' | 'light') => void))`
-   Returns: `IDisposable`

```js
const themeWatcher = onChange((mode) => {
	if (mode === 'dark') console.log('The selected theme is now a dark theme!')
	else console.log('The selected theme is now a light theme!')
})
// When done with watching the theme
themeWatcher.dispose()
```

---

### getCurrentMode

The `getCurrentMode` function is used to get the current color mode, so either dark or light mode.

-   Signature: `getCurrentMode()`
-   Returns: `'light' | 'dark'`

```js
const themeMode = getCurrentMode()

if (themeMode === 'dark') console.log('You are using dark mode.')
```

---

### getColor

This allows you to get a specific color from the currently selected theme. The returned color can be in hex color format, or the name of a color, e.g. `red` or `green`. This will match whatever is set in the [theme's definition](/extensions/json/themes) file.

-   Signature: `getColor(name: TColorName)`
-   Returns: `string`

```js
const toolbarColor = getColor('toolbar')
console.log(toolbarColor)
```

---

### getHighlighterInfo

This function allows you to get the current theme's syntax highlighter data.

-   Signature: `getHighlighterInfo(name: string)`
-   Returns: `{ color?: string; background?: string; textDecoration?: string; isItalic?: boolean}`

```js
const { color, isItalic } = getHighlighterInfo('number')
if (color && isItalic) {
	console.log(`Numbers are the color ${color} and numbers are in italic.`)
}
```
