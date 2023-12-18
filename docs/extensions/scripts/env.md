---
title: '@bridge/env'
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

The `APP_VERSION` holds the string value of the current bridge. version.

-   Type: `string`

```js
console.log(`Current bridge Version: ${APP_VERSION}`)
```

---

### isNightlyBuild

The `isNightlyBuild` represents a boolean value to whether the user is on bridge. nightly or not.

-   Type: `boolean`

```js
if (isNightlyBuild) {
	// Do something unique to nightly build, e.g. use a different color scheme
}
```

## ⚡ Functions

### getCurrentBP

This function returns the resolved path of the behavior pack in the user's current project.

-   Signature: `getCurrentBP()`
-   Returns: `string`

```js
const bpPath = getCurrentBP()
// Can be used to read a file in the behavior pack
const file = await readFile(`${bpPath}/test.json`)
```

---

### getCurrentRP

This function returns the resolved path of the resource pack in the user's current project.

-   Signature: `getCurrentRP()`
-   Returns: `string`

```js
const rpPath = getCurrentRP()
// Can be used to read a file in the resource pack
const file = await readFile(`${rpPath}/test.json`)
```

---

### getCurrentProject

The `getCurrentProject` function returns the path to the user's currently selected project folder.

-   Signature: `getCurrentProject()`
-   Returns: `string`

```js
const projectName = getCurrentProject()
console.log(`Current Project: ${projectName}`)
```

---

### getProjectPrefix

This returns the project prefix (or namespace), from the [project config](/guide/misc/project-config.html#namespace), in the user's selected project.

-   Signature: `getCurrentPrefix()`
-   Returns: `string | undefined`

```js
let itemName = 'minecraft:apple'
const projectPrefix = getProjectPrefix()

if (projectPrefix) itemName.replace('minecraft', projectPrefix)
```

---

### getProjectTargetVersion

The `getProjectTargetVersion` returns the set [target version](/guide/misc/project-config.html#targetversion) of the current project, for example `"1.19.20"`.

-   Signature: `getProjectTargetVersion()`
-   Returns: `string | undefined`

```js
const projectTargetVersion = getProjectTargetVersion()

// From 'compareVersions' from @bridge/compare-versions module
const isValid = compareVersions(projectTargetVersion, '1.18.0', '>=')
```

---

### getProjectAuthors

The `getProjectAuthors` function returns the [authors](/guide/misc/project-config.html#authors) of the current project. The return type can vary depending on the users config setup, so it could either be an array of string representing the names of the authors, or an array of objects with `name` and `logo` properties where `name` is the name of the author and `logo` is the path to an image that represents the author.

-   Signature: `getProjectAuthors()`
-   Returns: `(string | { name: string; logo?: string })[] | undefined`

```js
let firstAuthor = 'Unknown'

const authors = getProjectAuthors()
if (authors[0]) {
	firstAuthor = authors[0].author ?? authors[0]
}
```

---

### resolvePackPath

This function is essential for correctly accessing the paths of files in the user's project. It returns a resolved path based on the [pack type id](/extensions/misc/pack-types) and path passed in. This will take into account the [pack paths](/guide/misc/project-config.html#packs) of the folder in the project config.

-   Signature: `resolvePackPath(packId?: TPackTypeId, filePath?: string)`
-   Returns: `string`

```js
const entityFolder = resolvePackPath('resourcePack', 'entity')
const cowFile = resolvePackPath('behaviorPack', 'entities/cow.json')

const file = await readFile(cowFile)
```
