---
title: 🔧 Pack Types
description: Find out how bridge. handles pack types
sidebar: misc
---

# 🔧 Pack Types

It is useful to be aware of how bridge. distinguishes different pack types in a project, when developing an extension.

## Basics

Each bridge. project can contain up to four different pack types.

-   Behavior Pack
-   Resource Pack
-   Skin Pack
-   World Template

## Useful Information

The following pack types are available within bridge. by default.

| Pack Type      | ID              | Default Path |
| -------------- | --------------- | ------------ |
| Behavior Pack  | `behaviorPack`  | BP/          |
| Resource Pack  | `resourcePack`  | RP/          |
| Skin Pack      | `skinPack`      | SP/          |
| World Template | `worldTemplate` | WT/          |

You may need to reference a valid pack type id from the table above within some of bridge.'s APIs.

:::warning
Users can change the default path of a pack within the [project config](/guide/misc/project-config.md).
:::
