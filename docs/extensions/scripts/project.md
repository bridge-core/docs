---
title: 🚧 @bridge/project
description: Learn about the @bridge/project that allows access to specific functions related to the current project.
sidebar: scripts
---

# 🚧 @bridge/project

This module allows access to specific functions related to the current project.
[View Source Code](https://github.com/bridge-core/editor/blob/main/src/components/Extensions/Scripts/Modules/project.ts)

```js
import { ... } from "@bridge/project"
```

[[toc]]

## ⚡ Functions

### hasPacks

The `hasPacks` functions checks if the packs specified exists in the current project.

- Signature: <code>hasPacks(packs: <a href="#tpacktypeid">TPackTypeId</a>[])</code>
- Returns: `boolean`

```js
//TODO
```

---

### registerExporter

The `registerExporter` function registers a pack exporter to be used to export the project.

- Signature: <code>registerExporter(exporter: <a href="#iexporter">IExporter</a>)</code>
- Returns: `void`

```js
//TODO
```

---

### compile

The `compile` function forces compilation of the project using the name of the compiler config to compile with. The config should be in the "/.bridge/compiler/" directory.

- Signature: `compile(configFile: string)`
- Returns: `Promise<void>`

```js
await compile('Default')
//TODO MORE
```

---

### compileFiles

This function forces the compilation of specified files at the paths specified.

- Signature: `compileFiles(paths: string[])`
- Returns: `Promise<void>`

```js
await compileFiles(['projects/example/exampleFolder', 'projects/example/exampleFolder2'])
//TODO MORE?
```

### unlinkFile

This `unlinkFile` function removes a file from the fileSystem, compiler and packIndexer.

- Signature: `unlinkFile(path: string)`
- Returns: `Promise<void>`

```js
await unlinkFile('projects/example/exampleFile.json')
//TODO MORE?
```

### onProjectChanged

This `onProjectChanged` function executes when the project changes to a different project.

- Signature: `onProjectChanged(cb: (projectName: string) => any)`
- Returns: `IDisposable`

```js
onProjectChanged(project => {
    console.log(`Project has changed to: ${project.name}`)
    })
//TODO MORE?
```

---

### onFileChanged

This `onFileChanged` function executes when the user selects a new file.

- Signature: `onFileChanged(filePath: string, cb: (filePath: string) => any)`
- Returns: `IDisposable`

```js
onFileChanged(file => {
    console.log(`File has changed to: ${file.name}`)
    })
//TODO MORE?
```

## 📟 Interfaces

### TPackTypeId

```js
//TODO
//Where is TPackTypeId?
```

---

### IExporter

```ts
export interface IExporter {
	icon: string
	name: string
	isDisabled?: () => Promise<boolean> | boolean
	export: () => Promise<void>
}
```