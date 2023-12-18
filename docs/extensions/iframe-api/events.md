---
title: 📢 Events
description: Read about events you can listen to with bridge.'s iframe API
sidebar: 'iframe API'
---

# 📢 Events

bridge.'s iframe API allows you to listen to certain events. To do so, you can use the `on` method on your `Channel` instance.

```ts
api.on('<event>', (data) => {
	// Do something with the data when the event is triggered
})
```

## Tab Events

### `tab.openFile`

Triggered whenever the underlying iframe tab is used to open a specific file.

```ts
interface IOpenFilePayload {
	/**
	 * Path to the file. May be undefined, prefer using file reference when possible
	 */
	filePath?: string
	/**
	 * A reference to the underlying file. Can be used wherever a file path is expected
	 */
	fileReference: string
	/**
	 * Whether to open the file in a read-only mode
	 */
	isReadOnly: boolean
}

api.on('tab.openFile', (data: IOpenFilePayload) => {
	// Open file here
})
```

In order for the event to trigger, make sure to pass the `openWithPayload` option when creating your iframe tab.

```ts
const tab = new IframeTab(await getCurrentTabSystem(), {
    ...,
    openWithPayload: {
        filePath,
        fileHandle,
    },
})
```

:::tip
More details on creating an iframe tab with the `openWithPayload` option can be found [here](/extensions/iframe-api/index.html#embedding-your-tool).
:::
