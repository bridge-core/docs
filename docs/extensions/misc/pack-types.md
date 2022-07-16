---
title: 🔧 Pack Types
description: Find out how bridge. handles pack types
sidebar: misc
---

# 🔧 Pack Types

It is useful to be aware of how bridge. distinguishes different pack types in a project, when developing an extension.

## Basics

Each bridge. project can contain up to four different pack types.

- Behavior Pack
- Resource Pack
- Skin Pack
- World Template

## Useful Information

| Pack Type      | ID              | Default Path |
|----------------|-----------------|--------------|
| Behavior Pack  | `behaviorPack`  | BP/          |
| Resource Pack  | `resourcePack`  | RP/          |
| Skin Pack      | `skinPack`      | SP/          |
| World Template | `worldTemplate` | WT/          |

Across bridge. extensions, you may need to reference a pack type id which can be found in the table above. This is so that bridge can resolve paths to a user's pack if it isn't in the default path.