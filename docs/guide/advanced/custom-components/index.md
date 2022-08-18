---
title: '📦 Custom Components'
description: Learn how you can write custom components for Minecraft entities, blocks and items!
sidebar: 'advanced'
---

# 📦 Custom Components

This page serves as an introduction to bridge.'s custom components which are available for use within your entity, block and item files.
This article will cover the following topics:

:ballot_box_with_check: What is a custom component?<br/>
:ballot_box_with_check: How to install a custom component.<br/>
:ballot_box_with_check: How to use a custom component.<br/>
:ballot_box_with_check: How to write custom components.<br/>

## Basics

Custom components allow you to extract common logic from entity, block and item files and to generate JSON using JavaScript or TypeScript. They integrate seamlessly into bridge. by appearing alongside Minecraft's built-in components within auto-completions.

### Component Locations

Custom components are loaded from the `components/` folder within your behavior pack.

-   Item components are expected to be within the `components/item/` folder
-   Block components are expected to be within the `components/block/` folder
-   Entity components are expected to be within the `components/entity/` folder

## Installation

If you do not feel confident in writing your own custom components, you can install pre-written components from bridge.'s [extension store](/extensions/#installing-extensions). Simply select the "components" tab within the sidebar and choose the component you need.

<!-- ## Usage

TODO: Explain how to use a custom component

## Writing Custom Components

TODO: Explain how to write custom components -->
