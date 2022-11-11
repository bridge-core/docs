---
title: 🪟 Getting Started
description: Learn how to embed your tool into bridge.
sidebar: 'iframe API'
nav_order: -1
---

# 🪟 iframe API

bridge. ships with a communication layer and a set of pre-built components that easily allow you to integrate your third-party tool into bridge. as long as it is accessible via an [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe).
Tools embedded into bridge. can access the file system and other bridge. related APIs. Some API calls are subject to permission prompts.

## Embedding Your Tool

The most common way to embed your tool is to use bridge.'s iframe tab. You need to [create an extension](/extensions/index.html#creating-extensions) in order to do so. You can then import the iframe tab within a script like this:

```ts
import { IframeTab, addTab, getCurrentTabSystem } from '@bridge/tab'
```

Next, simply create an instance of the tab and add it the current tab system:

```ts
const tab = new IframeTab(await getCurrentTabSystem(), {
	/**
	 * URL to the tool you want to embed
	 */
	url: 'https://my-emdedded-tool.com',

	/**
	 * Name of the tab (shows within the UI)
	 */
	name: 'My Embedded Tool',
	/**
	 * Icon of the tab (shows next to the name within the UI)
	 */
	icon: 'mdi-book-outline',
	/**
	 * Icon color for the tab icon
	 */
	iconColor: 'behaviorPack',

	/**
	 * Optional: Pass a fileHandle that is supposed to be opened with the tab
	 */
	openWithPayload: {
		filePath,
		fileHandle,
	},
})

/**
 * Add the tab to the current tab system
 */
addTab(tab)
```

:::tip
You can read more about opening files with your iframe tab [here](/extensions/iframe-api/events.html#tab-openfile).
:::

## Establishing a Connection

To connect your embedded web page to bridge., you need to first import the communication library:

```ts
import { Channel } from 'https://cdn.jsdelivr.net/npm/bridge-iframe-api@0.4.11/dist/bridge-iframe-api.es.js'
```

Then, create a new communication channel:

```ts
const api = new Channel()
```

And finally, connect to bridge.:

```ts
await api.connect()
```

You can now [listen to events](/extensions/iframe-api/events.html) and [trigger actions](/extensions/iframe-api/triggers.html) on your `Channel` instance.

:::tip
Some events should be setup before connecting to bridge. so that you do not miss them triggering.
:::
