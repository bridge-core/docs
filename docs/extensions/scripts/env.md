---
title: "🏞️ @bridge/env"
description: Learn more about @bridge/env, a utility module that provides access to environmental project data.
sidebar: scripts
---

# 🏞️ @bridge/env

Utility module that provides access to environmental project data.
[View Source Code](https://github.com/bridge-core/editor/blob/main/src/components/Extensions/Scripts/Modules/env.ts)
```js
import { ... } from "@bridge/env";
```

[[toc]]

## 💼 Variables

### APP_VERSION
The `APP_VERSION` variable gets the current version for bridge for example `"2.3.3"`.

- Signature: `APP_VERSION`
- Returns: `string`

```js
console.log(`Current Bridge Version: ${APP_VERSION}`);
```

---

### isNightlyBuild
The `isNightlyBuild` variable gets the version of bridge whether it is nightly build or not.

- Signature: `isNightlyBuild`
- Returns: `boolean`

```js
if(isNightlyBuild)
{
    console.log("Bridge version is nightly build.");
}
else
{
    console.log("Bridge version is main build");
}
```

## ⚡ Functions

### getCurrentBP
The `getCurrentBP` returns the folder path of the behaviour pack in the current [project](/guide/misc/project-types/index.html).

- Signature: `getCurrentBP()`
- Returns: `string`

```js
var BP = getCurrentBP();
console.log(`Current Behaviour Pack Path: ${BP}`);
```

---
### getCurrentRP
The `getCurrentRP` returns the folder path of the resource pack in the current [project](/guide/misc/project-types/index.html).

- Signature: `getCurrentRP()`
- Returns: `string`

```js
var RP = getCurrentRP();
console.log(`Current Resource Pack Path: ${RP}`);
```

---
### getCurrentProject
The `getCurrentProject` returns the folder path to the current [project](/guide/misc/project-types/index.html).

- Signature: `getCurrentProject()`
- Returns: `string`

```js
var Pack = getCurrentProject();
console.log(`Current Project Pack Path: ${Pack}`);
```

---
### getProjectPrefix
The `getCurrentPrefix` returns the set prefix of the current [project](/guide/misc/project-types/index.html).

- Signature: `getCurrentPrefix()`
- Returns: `string | undefined`

```js
var Prefix = getCurrentPrefix();
console.log(`Current Project Prefix: ${Prefix}`);
```

---
### getProjectTargetVersion
The `getProjectTargetVersion` returns the set [target version](/guide/misc/project-config.html#targetversion) of the current [project](/guide/misc/project-types/index.html) for example `"1.19.20"`.

- Signature: `getProjectTargetVersion()`
- Returns: `string | undefined`

```js
var Version = getProjectTargetVersion();
console.log(`Current Project Target Version: ${Version}`);
```

---
### getProjectAuthor
The `getProjectAuthor` returns the [authors](/guide/misc/project-config.html#authors) of the current [project](/guide/misc/project-types/index.html).

- Signature: `getProjectAuthor()`
- Returns: `(string | { name: string; logo?: string })[]`

```js
var Authors = getProjectAuthor();
Authors.forEach(author => {
    console.log(`Project Author: ${author}`);
});
```

---
### resolvePackPath
The `resolvePackPath` Is What I do not know

- Signature: `resolvePackPath(packId?, filePath?)`
- Returns: `Something goes here`

```js
resolvePackPath(); //IDK WHAT THIS DOES
```

- Parameters

|Name     |Type  |
|---------|------|
|packId?  |string|
|filePath?|string|

---
### getContext
getContext is deprecated

- Signature: `getContext()`
- Returns: `void`

```js
getContext();
```

::: danger Deprecated
This function is deprecated
:::
