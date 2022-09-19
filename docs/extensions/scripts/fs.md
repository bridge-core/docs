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

- Signature: `setup(baseDirectory)`
- Returns: `void`

```js
setup(FileSystemDirectoryHandle)
```

---

### getDirectoryHandle

TODO

The `getDirectoryHandle` method returns a `FileSystemDirectoryHandle` for a subdirectory with the specified name within the directory handle on which the method is called.

- Signature: `getDirectoryHandle(path,__namedParameters)`
- Returns: `Promise<FileSystemDirectoryHandle>`

```js
getDirectoryHandle() //I do not know what this does.
```

### getFileHandle

TODO

- Signature: `getFileHandle(path, create)`
- Returns: `Promise<FileSystemFileHandle>`

```js
getFileHandle("path", true|false) //TODO
```

---

### pathTo

TODO

- Signature: `pathTo(handle)`
- Returns: `TODO`

```js
pathTo(AnyHandle) //TODO
```

---

### mkdir

The `mkdir` function creates a new directory with the path that is specified.

- Signature: `mkdir(path, Partial<IMkdirConfig> <-TODO)`
- Returns: `Promise<void>`

```js
const currentProject = getCurrentProject() //From @bridge/env

//This checks if we have a project selected or not
if(currentProject == "~local/projects/bridge-temp-project") {
    console.log("You do not have a project selected! Please select a project.")
}
else {
    const rpPath = getCurrentRP() //From @bridge/env

    //Checks if the resource pack exists.
    if(await directoryExists(rpPath)) {
        const dir = await mkdir(`${rpPath}/entities`) //Creates the directory inside of the resource pack.
        console.log("Created directory")
    }
    else {
        console.log("Resource pack does not exist!")
    }
}
```

::: tip
If you specify a path that does not exist with mkdir(). This will create the whole directory for example 
```js
mkdir(`${rpPath}/entities/example`)
```
Will create the whole directory even if `entities` folder does not exist. This is the same for `rpPath` variable.
:::

---

### readdir

The `readdir` function reads all of the content within the given directory unless otherwise specified in the `config` parameter.

- Signature: `readdir(path, config <-TODO. I have no idea how this works. Include in example?)`
- Returns: `Promise<string[]>`

```js
const rpPath = getCurrentRP() //From @bridge/env

const contents = await readdir(rpPath)
contents.forEach(element => {
    console.log(`Element: ${rpPath}/${element}`)
})
```

---

### readFilesFromDir

The `readFilesFromDir` function reads all of the content within the given directory including the directories within the directory and returns the files.

- Signature: `readFilesFromDir(path, dirHandle <-TODO)`
- Returns: `Promise<{ kind: string ; name: string ; path: string }[]>`

```js
const rpPath = getCurrentRP() //From @bridge/env

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

The `readFile` function reads a file with the specified path and returns it.

- Signature: `readFile(path)`
- Returns: `File`

```js
const rpPath = getCurrentRP() //From @bridge/env

const file = await readFile(`rpPath/manifest.json`)
console.log(await file.text())
```

---

### unlink

TODO

- Signature: `unlink(path)`
- Returns: `Promise<void>`

```js
//TODO
```

---

### writeFile

The `writeFile` function writes to a file at the specified path.

- Signature: `writeFile(path, data)`
- Returns: `Promise<FileSystemFileHandle>`

```js
//TODO
```

---

### write

The `write` function writes to a file from the FileSystemDirectoryHandle.

- Signature: `write(fileHandle, data)`
- Returns: `Promise<FileSystemFileHandle>`

```js
//TODO
```

---

### readJSON

The `readJSON` function reads a JSON file at a given path and returns the object data.

- Signature: `readJSON(path)`
- Returns: `Promise<Object>`

```js
const rpPath = getCurrentRP() //From @bridge/env

const file = readJSON(`${rpPath}/manifest.json`)
console.log(file.header.uuid)
```

---

### readJsonHandle

The `readJsonHandle` function reads a JSON file from the file system.

- Signature: `readJSON(fileHandle)`
- Returns: `Promise<Object>`

```js
//TODO
```

---

### writeJSON

The `writeJSON` function writes a JavaScript object as JSON to a file.

- Signature: `writeJSON(path, data, beautify)`
- Returns: `Promise<FileSystemFileHandle>`

```js
const objectData = {
    exampleKey: "example"
}

const file = writeJSON("example/example.json", objectData, true)
```

---

### move

The `move` function moves a file or folder to a new directory.

- Signature: `move(path, newPath)`
- Returns: `Promise<void>`

```js
//TODO
```

---

### copyFile

The `copyFile` function copies the contents of a file to another existing file with the specified paths.

- Signature: `copyFile(originPath, destPath)`
- Returns: `Promise<FileSystemFileHandle>`

```js
//TODO
```

---

### copyFileHandle

The `copyFileHandle` function copies the contents of a file to another existing file from the file system.

- Signature: `copyFileHandle(originHandle, destHandle)`
- Returns: `Promise<FileSystemFileHandle>`

```js
//TODO
```

---

### copyFolder

TODO

The `copyFolder` function copies the contents of a file to another existing folder with the specified paths.

- Signature: `copyFolder(originPath, destPath)`
- Returns: `Promise<void>`

```js
//TODO
```

---

### copyFolderByHandle

TODO

The `copyFolderByHandle` function copies the contents of a folder to another existing file from the file system.

- Signature: `copyFolderByHandle(originHandle, destHandle)`
- Returns: `Promise<void>`

```js
//TODO
```

---

### loadFileHandleAsDataUrl

TODO

Read a file by its FileHandle as a URL

- Signature: `loadFileHandleAsDataUrl(fileHandle)`
- Returns: `Promise<string>`

```js
//TODO
```

---

### fileExists

This function checks if the file in the path specified exists.

- Signature: `fileExists(path)`
- Returns: `Promise<boolean>`

```js
const exists = await fileExists("example/example.json")

if(exists) {
    console.log("File exists!")
}
else {
    console.log("File doesn't exist!")
}
```

---

### directoryExists

This function checks if the specified directory exists.

- Signature: `directoryExists(path)`
- Returns: `Promise<boolean>`

```js
const exists = await fileExists("projects/example")

if(exists) {
    console.log("Project exists!")
}
else {
    console.log("Project does not exist!")
}
```

---

### directoryHandlesFromGlob

TODO

- Signature: `direactoryHandlesFromGlob(glob, startPath)`
- Returns: `TODO`

```js
//TODO
```