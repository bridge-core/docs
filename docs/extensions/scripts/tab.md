---
title: 📎 @bridge/tab
description: Learn more about @bridge/tab module that allows access to bridge.'s tab system.
sidebar: scripts
---

# 📎 @bridge/tab

Module that allows access to bridge.'s tab system.
[View Source Code](https://github.com/bridge-core/editor/blob/main/src/components/Extensions/Scripts/Modules/Tab.ts)

```js
import { ... } from '@bridge/tab'
```

[[toc]]

## ⚡ Functions

### register

The `register` function registers new FileTabs to be picked up by the isTabFor tab system method

- Signature: `register(FileTabClass: typeof FileTab)`
- Returns: IDisposable

```js
//TODO
```

---

### openFilePath

Given a file path relative to the project root, open the corresponding file inside of bridge.'s tab system

- Signature: `openFilePath(filePath: string, selectTab: boolean)`
- Returns: `Promise<void>`

```js
await openFilePath('example/example.json', true) //When selectTab is set to true it will automatically select the tab when opened.
```

---

### openTab

The `openTab` function is useful for ContentTabs: Programmatically adds and opens the tab to the tab system

- Signature: `openTab(FileTabClass: typeof Tab, splitScreen: boolean)`
- Returns: `Promise<void>`

```ts
//Import our page from ui/ folder
import { Example } from '@bridge/ui'

//Open the tab with the class
await openTab(ExampleTab)

//Declare a new class which sets up the tab.
class ExampleTab extends ContentTab
{
    component = Example;
    type = "ExampleTab";

    async isFor() {
        return false
    }
    get icon() {
        return 'mdi-tools'
    }
    get iconColor() {
        return 'warning'
    }
    get name() {
        return 'Loop Tool'
    }
}
```

::: danger Deprecated
This function is deprecated however it still works. Please use addTab instead
:::

---

### addTab

The `addTab` function programmatically adds and opens the tab to the tab system

- Signature: `addTab(tab: Tab)`
- Returns: `void`

```js
//Import our page from ui/ folder
import { Example } from '@bridge/ui'

//Open the tab with the class.
addTab(new ExampleTab(getCurrentTabSystem())) // getCurrentTabSystem is from @bridge/tab

//Declare a new class which sets up the tab.
class ExampleTab extends ContentTab
{
    component = Example;
    type = "ExampleTab";

    async isFor() {
        return false
    }
    get icon() {
        return 'mdi-tools'
    }
    get iconColor() {
        return 'warning'
    }
    get name() {
        return 'Loop Tool'
    }
}
```

---

### getCurrentTabSystem

The `getCurrentTabSystem` function returns the tabSystem.

- Signature: `getCurrentTabSystem()`
- Returns: `IVE WASTED 1 HOUR TRYING TO FIND THIS`

```js
console.log(getCurrentTabSystem())
```

## 📟 Interfaces

### ContentTab

https://github.com/bridge-core/editor/blob/main/src/components/TabSystem/CommonTab.ts

### FileTab

https://github.com/bridge-core/editor/blob/main/src/components/TabSystem/FileTab.ts

### ThreePreviewTab

https://github.com/bridge-core/editor/blob/main/src/components/Editors/ThreePreview/ThreePreviewTab.ts

### IframeTab

https://github.com/bridge-core/editor/blob/main/src/components/Editors/IframeTab/IframeTab.ts