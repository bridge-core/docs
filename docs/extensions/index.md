---
title: '🧩 Extension API'
description: ''
sidebar: 'extensions'
nav_order: -1
---

# :jigsaw: Extension API

This is the documentation for bridge.'s Extension API. We are working on expanding and improving this API to bring more capabilities for creators to work with.

In this page you will learn the following:

:ballot_box_with_check: How to install an extension.<br/>
:ballot_box_with_check: Where to begin creating your own extension.<br/>
:ballot_box_with_check: The different capabilities of an extension.<br/>

## General

bridge. extensions allow creators to customize bridge.! Extensions can modify a variety of features in bridge., from changing the color theme of the app, to adding entirely custom file editors and viewers.

## Installing Extensions

In order to get started with bridge. extensions, you should be aware of how they are installed; an extension can be installed **globally** or **locally** and you will be given the option to choose which installation method to use.

A **global** extension is installed to a global extensions folder inside of bridge.'s [local storage](TODO). If you install extensions this way, you can access the extensions features in every project that you create.

A **local** extension is installed in the `.bridge/extensions` folder inside of the project that you have selected when installing the extension. The extension will only be available to use in project that you have installed it to.

To install an extension, navigate to bridge.'s extension store. Here you will be presented with all publically available extensions; here you can filter by tags (type of extension) or search. Once you have found the extension that may be useful to you, simply press **"DOWNLOAD"** and choose your install method. On the extension's card in the store, you may see extra options, such as a **share** button which allows you copy a link to the extension to quickly share it with others, and an **information** button which will link you to more information about the extension.

:::tip
The extension store can be located by pressing the jigsaw icon in the app's sidebar.
:::

## Creating Extensions

Feel like there's something missing in your development flow that you want to add, or you want to help others by publishing an extension on the store? Well you can create your own extensions to customize bridge. to your liking!

:::info
If you have an extension and want it published on the extension store, feel free to open a pull request to our [bridge-core/plugins](https://github.com/bridge-core/plugins) repo, adding your extension to the `plugins` directory. Thank you for the contribution :smiley: !
:::

To get started with creating an extension, you need to create a folder for it in the `.bridge/extensions` directory inside of a project and inside of this folder will be all of the files that make up your extension. Next you should create a [manifest](/extensions/extension-manifest) file inside of this folder. This contains important information about your extension for bridge. to load it.

From here, you can follow one of the guides below on how to create different types of extensions.

-   TODO: Link guide pages below
-   [Presets](/extensions/presets/index)

## Capabilities

There is a huge number of things you can create with bridge. extensions, but here is a rundown of the general capabilities.

-   :crayon: Editing how bridge. looks with themes.
-   :link: Snippets can be added quickly insert code into files.
-   :bricks: Adding new presets which can be used to quickly create files from a simple form UI.
-   :hammer_and_wrench: Creating new UI elements, such as custom sidebars, tabs, windows and more!
-   :gear: Extend bridge.'s compiler with [compiler plugins](/extensions/compiler-plugins), to allows for custom syntax and much more.
