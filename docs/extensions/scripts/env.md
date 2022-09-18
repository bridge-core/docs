---
title: "🏞️ @bridge/env"
description: Learn more about @bridge/env, a utility module that provides access to environmental project data.
sidebar: scripts
---

# 🏞️ @bridge/env

Utility module that provides access to environmental project data.
[View Source Code](https://github.com/bridge-core/editor/blob/main/src/components/Extensions/Scripts/Modules/env.ts)

```js
import { ... } from '@bridge/env'
```

[[toc]]

## 💼 Variables

### APP_VERSION
The `APP_VERSION` variable gets the current version for bridge for example `"2.3.3"`.

- Signature: `APP_VERSION`
- Returns: `string`

```js
console.log(`Current bridge Version: ${APP_VERSION}`)
```

---

### isNightlyBuild
The `isNightlyBuild` variable gets the version of bridge whether it is nightly build or not.

- Signature: `isNightlyBuild`
- Returns: `boolean`

```js
if (isNightlyBuild) {
    console.log('You are running bridge. nightly')
} else {
    console.log('You are running the release build of bridge.')
}
```

## ⚡ Functions

### getCurrentBP

The `getCurrentBP` returns the folder path of the behaviour pack in the current [project](/guide/misc/project-types/index.html).

- Signature: `getCurrentBP()`
- Returns: `string`

```js
const bpPath = getCurrentBP()
console.log(`Current Behaviour Pack Path: ${bpPath}`)
```

---

### getCurrentRP

The `getCurrentRP` returns the folder path of the resource pack in the current [project](/guide/misc/project-types/index.html).

- Signature: `getCurrentRP()`
- Returns: `string`

```js
const rpPath = getCurrentRP()
console.log(`Current Resource Pack Path: ${rpPath}`)
```

---

### getCurrentProject

The `getCurrentProject` returns the folder path to the current [project](/guide/misc/project-types/index.html).

- Signature: `getCurrentProject()`
- Returns: `string`

```js
const projectName = getCurrentProject()
console.log(`Current Project: ${projectName}`)
```

---

### getProjectPrefix

The `getCurrentPrefix` returns the set prefix of the current [project](/guide/misc/project-types/index.html).

- Signature: `getCurrentPrefix()`
- Returns: `string | undefined`

```js
let itemName = 'minecraft:apple'
const projectPrefix = getProjectPrefix()

if (projectPrefix) itemName.replace('minecraft', projectPrefix)
```

---

### getProjectTargetVersion

The `getProjectTargetVersion` returns the set [target version](/guide/misc/project-config.html#targetversion) of the current project, for example `"1.19.20"`.

- Signature: `getProjectTargetVersion()`
- Returns: `string | undefined`

```js
const projectTargetVersion = getProjectTargetVersion()

// From 'compareVersions' from @bridge/compare-versions module
const isValid = compareVersions(projectTargetVersion, '1.18.0', '>=')
```

---

### getProjectAuthors

The `getProjectAuthors` function returns the [authors](/guide/misc/project-config.html#authors) of the current project.

- Signature: `getProjectAuthors()`
- Returns: `(string | { name: string; logo?: string })[]`

```js
let firstAuthor = 'Unknown'

const authors = getProjectAuthors()
if (authors[0]) {
    firstAuthor = authors[0].author ?? authors[0]
}
```

---

### resolvePackPath

TODO

- Signature: `resolvePackPath(packId?, filePath?)`
- Returns: `string`

```js
resolvePackPath()
```
