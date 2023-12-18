---
title: 📚 Script Modules
description: Discover how scripts can be written to further build on bridge.'s extension capabilties.
sidebar: Scripts
nav_order: -1
---

# 📚 Script Modules

This page walks you through bridge's script module extension api system and details how to create your own windows and scripts.

In this page you will learn the following:

:ballot_box_with_check: What is Vue file?
<br/>
:ballot_box_with_check: What is a script file?
<br/>
:ballot_box_with_check: How to make your very own page and script.

## Basics

Script modules is a collection of JavaScript files and Vue files that can be created within bridge's extension folder or outside of bridge that enable you to develop your own windows, scripts and request bridge to do certain things. Bridge's Script API uses the Vue V2 Engine. It is highly recommended to read the [documentation of the Vue V2 Engine](https://v2.vuejs.org/) to understand how to write and use Vue files.

:::warning
If you are developing your extension outside of bridge you will need to import and reload the extension to see the changes.

To reload extensions go to `Tools > Reload Extensions` after importing your extension.
:::

## Creating A Simple Script and Window

### Setup

Before you begin writing your script and Vue files, you must set up an [extension](/extensions/index.html#creating-extensions) to contain your files. Once you have a valid extension set up in the extension's folder, you can now create two folders named `ui` and `scripts` then create a file called `index.js` inside the `scripts` folder.

The `ui` folder will contain your Vue files while the `scripts` folder will contain your JavaScript files. See example setup below.

```txt
.
├─ 📁 ui
├─ 📁 scripts
|  └─ 📝 index.js
```

:::warning
`ui` folder can only contain .vue files. Any file other than .vue will prompt bridge to throw an error.

This is also the same for `scripts` folder where you cannot have any file other than .js files.
:::

### Writing The UI

Now that we have made the files and folders required we will be adding a button to the sidebar that will open up a sidebar window. To do this we will be using the [@bridge/sidebar](/extensions/scripts/sidebar.html) and [@bridge/ui](/extensions/scripts/ui.html) module inside the `index.js` file.

However before we do this we need to setup and import the vue file in the `ui` folder.

Create a Vue file with any name you want to put inside the `ui` folder. I will be naming the vue file `Home.vue`. See example below.

```txt{3}
.
├─ 📁 ui
|  └─ 📝 Home.vue
```

Now we need to begin setting up the vue file with the required template and script tags. The example below will be a simple counter that just displays a title and how many times you have clicked the button.

```vue
<template>
	<div style="padding:10px;">
		<h1>You've clicked {{ Counter }} Times!</h1>
		<v-btn block color="primary" @click="IncrementCounter">Click Me!</v-btn>
	</div>
</template>

<script>
export default {
	data: () => ({
		Counter: 0,
	}),
	methods: {
		IncrementCounter() {
			this.Counter = this.Counter + 1
		},
	},
}
</script>
```

::: v-pre
Now at first this may look overwhelming and confusing if you are entirely new to JavaScript and HTML. So Lets break it down. The `<template>` tag allows us to use bridge's templates which we do use for the `<v-btn>` tag. The `{{ Counter }}` Interpolation allows us to access the data inside the `data:` object within the script tags. The `@click="IncrementCounter"` inside `<v-btn>` calls the function `IncrementCounter` in the `methods:` object within the script tags.
:::

---

Now that we have setup the vue file we need to start writing the `index.js` file. First we need to import [@bridge/ui](/extensions/scripts/ui.html) and [@bridge/sidebar](/extensions/scripts/sidebar.html) modules at the top of the file.

```js
import { create } from '@bridge/sidebar'
import { Home } from '@bridge/ui'
/*
See how we are importing Home from @bridge/ui. This means we are importing the vue file Home.vue.
If we were to name the vue file SideBar.vue then we would need to do

import { SideBar } from '@bridge/ui'
```

Then we need to call the function and fill in the paramaters.

```js
create({
	id: 'yourId',
	displayName: 'Click Me',
	icon: 'mdi-apple',
	component: Home,
})
```

Again this may seem a little confusing so lets break it down again.

`id:` is the identifier for the specific button. It must be unique from everything else. Here is a template for making your id. `<YourAuthorName>.<YourExtensionName>.<YourButtonName>`
<br/>
`displayName:` is the hover text that appears when the cursor hovers over the button.
<br/>
`icon:` is the icon that will be displayed on the button. To see the full list of icons click [here](https://materialdesignicons.com/).
<br/>
`component:` is the vue file that you have imported from [@bridge/ui](/extensions/scripts/ui.html) which will link the file to the button.

Phew. Now you have made it this far, save your files and then reload your extension by going to **Tools > Reload Extensions**. If everything went correctly you should now see an apple icon on the sidebar if you have used the mdi-apple icon.

## Full Setup Of Tutorial

### index.js

```js
import { create } from '@bridge/sidebar'
import { Home } from '@bridge/ui'

create({
	id: 'yourId',
	displayName: 'Click Me',
	icon: 'mdi-apple',
	component: Home,
})
```

### Home.vue

```vue
<template>
	<div style="padding:10px;">
		<h1>You've clicked {{ Counter }} Times!</h1>
		<v-btn block color="primary" @click="IncrementCounter">Click Me!</v-btn>
	</div>
</template>

<script>
export default {
	data: () => ({
		Counter: 0,
	}),
	methods: {
		IncrementCounter() {
			this.Counter = this.Counter + 1
		},
	},
}
</script>
```

### File & Folder Setup

```txt
📁 extensions
├─ 📁 YourExtension
|  ├─ 📁 ui
|  |  └─ 📝 Home.vue
|  ├─ 📁 scripts
|  |  └─ 📝 index.js
|  └─ 📝 manifest.json
```

## Next Steps

This guide only scratches the surface of what is possible with script modules. It is best to look at the [extensions repository on github](https://github.com/bridge-core/plugins) for examples and references when developing your extension or when you want to figure out something. It is best to start simple and get familiar with reading the documentation and understanding how certain things work.
