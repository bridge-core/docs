---
title: 📄 @bridge/fs
description: Learn about the @bridge/fs module that allows extensions to interact with the user's file system.
sidebar: scripts
---

# 📄 @bridge/fs

This module allows extensions to interact with the file system, contained inside of the user's bridge. folder.
[View Source Code](https://github.com/bridge-core/editor/blob/main/src/components/FileSystem/FileSystem.ts)

```js
import { ... } from '@bridge/fs'
```

[[toc]]

## ⚡ Functions

### setup

TODO

- Signature: `setup(baseDirectory: AnyDirectoryHandle)`
- Returns: `void`

```js
setup(FileSystemDirectoryHandle) // TODO
```

---

### getDirectoryHandle

TODO

The `getDirectoryHandle` method returns a directory handle for a subdirectory with the specified path within the directory handle on which the method is called (or base handle of the file system).

- Signature: `getDirectoryHandle(path: string, config: Partial<IGetHandleConfig>)`
- Returns: `Promise<AnyDirectoryHandle>`

```js
getDirectoryHandle() // TODO
```

---

### getFileHandle

TODO

- Signature: `getFileHandle(path: string, create?: boolean)`
- Returns: `Promise<VirtualFileHandle | FileSystemFileHandle>`

```js
getFileHandle("path", true|false) //TODO
```

---

### pathTo

TODO

- Signature: `pathTo(handle: AnyHandle)`
- Returns: `Promise<string | undefined>`

```js
pathTo(AnyHandle) //TODO
```

---

### mkdir

The `mkdir` function creates a new directory at the path that is specified.

- Signature: `mkdir(path: string, config?: Partial<IMkdirConfig>)`
- Returns: `Promise<void>`

```js
const currentProject = getCurrentProject() // From @bridge/env

// This checks if we have a project selected or not. If a project isn't selected it will be a temporary project.
if (currentProject == '~local/projects/bridge-temp-project') {
    console.log('You do not have a project selected! Please select a project.')
} else {
    const rpPath = getCurrentRP() // From @bridge/env

    // Checks if the resource pack exists.
    if (await directoryExists(rpPath)) {
        const dir = await mkdir(`${rpPath}/entities`) // Creates the directory inside of the resource pack.
        console.log('Created directory')
    } else {
        console.log('Resource pack does not exist!')
    }
}
```

::: tip
If you specify a path that does not exist with `mkdir`. This will create the directory anyway. For example
```js
mkdir(`${rpPath}/entities/example`)
```
Will create the whole directory even if `entities` folder does not exist. This is the same for `rpPath` variable.
:::

---

### readdir

The `readdir` function reads all of the content within the given directory unless otherwise specified in the `config` parameter.

- Signature: `readdir(path: string, config: { withFileTypes?: boolean })`
- Returns: `Promise<string[]> | Promise<AnyHandle[]>`

```js
const rpPath = getCurrentRP() // From @bridge/env

const contents = await readdir(rpPath)
contents.forEach(element => {
    console.log(`Element: ${rpPath}/${element}`)
})
```

---

### readFilesFromDir

The `readFilesFromDir` function reads all of the contents within the given directory including nested directories and returns the files inside.

- Signature: `readFilesFromDir(path: string, dirHandle: AnyDirectoryHandle | Promise<AnyDirectoryHandle>)`
- Returns: `Promise<{ kind: string; name: string; path: string }[]>`

```js
const rpPath = getCurrentRP() // From @bridge/env

const contents = await readFilesFromDir(rpPath)
contents.forEach(element => {
    console.log(`File Info:\nName: ${element.name}\nKind: ${element.kind}\nPath: ${element.path}`)
})

/*
File Info:
Name: example.json
Kind: file
Path: projects/Example/RP/attachables/example.json
*/
```

---

### readFile

The `readFile` function reads a file at the specified path and returns it.

- Signature: `readFile(path: string)`
- Returns: `Promise<File>`

```js
const rpPath = getCurrentRP() // From @bridge/env

const file = await readFile(`${rpPath}/manifest.json`)
console.log(await file.text())
```

---

### unlink

TODO

- Signature: `unlink(path: string)`
- Returns: `Promise<void>`

```js
//TODO
```

---

### writeFile

The `writeFile` function writes to a file at the specified path.

- Signature: `writeFile(path: string, data: FileSystemWriteChunkType)`
- Returns: `Promise<FileSystemFileHandle>`

```js
//TODO
```

---

### write

The `write` function writes data to a file by its file handle.

- Signature: `write(fileHandle: AnyFileHandle, data: FileSystemWriteChunkType)`
- Returns: `Promise<void>`

```js
//TODO
```

---

### readJSON

The `readJSON` function reads a JSON file at a given path and returns the object data from the file. This uses [json5](https://www.npmjs.com/package/json5) to parse the file data.

- Signature: `readJSON(path)`
- Returns: `Promise<any>`

```js
const rpPath = getCurrentRP() // From @bridge/env

const file = readJSON(`${rpPath}/manifest.json`)
console.log(file.header.uuid)
```

---

### readJsonHandle

The `readJsonHandle` function reads a JSON file by its file handle. This uses [json5](https://www.npmjs.com/package/json5) to parse the file data.

- Signature: `readJsonHandle(fileHandle: AnyFileHandle)`
- Returns: `Promise<any>`

```js
//TODO
```

---

### writeJSON

The `writeJSON` function writes a JavaScript object as JSON to a file.

- Signature: `writeJSON(path: string, data: any, beautify: boolean)`
- Returns: `Promise<FileSystemFileHandle | VirtualFileHandle>`

```js
const objectData = {
    exampleKey: 'example'
}

const file = await writeJSON('example/example.json', objectData, true)
```

---

### move

The `move` function moves a file or folder to a new location in the file system.

- Signature: `move(path: string, newPath: string)`
- Returns: `Promise<void>`

```js
//TODO
```

---

### copyFile

The `copyFile` function copies the contents of a file to another existing file with the specified paths.

- Signature: `copyFile(originPath: string, destPath: string)`
- Returns: `Promise<AnyFileHandle>`

```js
//TODO
```

---

### copyFileHandle

The `copyFileHandle` function copies the contents of a file to another existing file from the file system.

- Signature: `copyFileHandle(originHandle, destHandle)`
- Returns: `Promise<AnyFileHandle>`

```js
//TODO
```

---

### copyFolder

The `copyFolder` function copies the contents of a folder to another existing folder by their file paths.

- Signature: `copyFolder(originPath: string, destPath: string)`
- Returns: `Promise<void>`

```js
//TODO
```

---

### copyFolderByHandle

The `copyFolderByHandle` function copies the contents of a folder to another existing folder by their file handles.

- Signature: `copyFolderByHandle(originHandle: AnyDirectoryHandle, destHandle: AnyDirectoryHandle)`
- Returns: `Promise<void>`

```js
//TODO
```

---

### loadFileHandleAsDataUrl

Read a file by its file handle as a URL.

- Signature: `loadFileHandleAsDataUrl(fileHandle: AnyFileHandle)`
- Returns: `Promise<string>`

```js
//TODO
```

---

### fileExists

This function checks if the file in the path specified exists.

- Signature: `fileExists(path: string)`
- Returns: `Promise<boolean>`

```js
const exists = await fileExists('example/example.json')

if (exists) {
    console.log('File exists!')
} else {
    console.log("File doesn't exist!")
}
```

---

### directoryExists

This function checks if the specified directory exists.

- Signature: `directoryExists(path: string)`
- Returns: `Promise<boolean>`

```js
const exists = await fileExists('projects/example')

if (exists) {
    console.log('Project exists!')
} else {
    console.log('Project does not exist!')
}
```

---

### directoryHandlesFromGlob

TODO

- Signature: `directoryHandlesFromGlob(glob: string, startPath?: string)`
- Returns: `Promise<AnyDirectoryHandle[]>`

```js
//TODO
```

## 📟 Interfaces

### IGetHandleConfig

```ts
export interface IGetHandleConfig {
	create: boolean
	createOnce: boolean
}
```

---

### IMkdirConfig

```ts
export interface IMkdirConfig {
	recursive: boolean
}
```

## 🧪 Types

### AnyDirectoryHandle

```ts
export type AnyDirectoryHandle =
	| FileSystemDirectoryHandle
	| VirtualDirectoryHandle
```

---

### AnyHandle

```ts
export type AnyHandle =
	| FileSystemFileHandle
	| FileSystemDirectoryHandle
	| VirtualHandle
```

---

### AnyFileHandle

```ts
export type AnyFileHandle = FileSystemFileHandle | VirtualFileHandle
```