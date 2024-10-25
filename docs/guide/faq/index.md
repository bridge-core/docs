---
title: '❓ FAQ'
description: 'Find answers for frequently asked questions on Add-Ons and bridge. in general.'
sidebar: Guide
nav_order: 10
---

# ❓ FAQ

There are many questions that are asked frequently within the bridge. Discord, and this document goes through them.

## How do I use custom commands in game?

You can’t; bridge. custom commands are used only inside of the editor (functions, items, animations, animation controllers, entities) as they are compiled into normal commands.

## Something isn’t behaving properly with bridge. What should I do?

Please verify your bridge. version is the latest, and then report it in **#bugs** (within the bridge. Discord, specifying the version, the problem, and what you were doing when the problem occured). We will get back to you as soon as we can. In case you have a GitHub account, it is preferred that you open an issue here:
https://github.com/bridge-core/editor/issues/new/choose

## Something is wrong with the bridge. auto completions.

Follow the same steps as reporting improper bridge. behavior.

## My entity exists in game, but is invisible.

This could be caused by many different things, such as a mistake in your render controller, a problem referecing your geometry or incorrectly defining the texture path. For more in depth help with this, check out [this entity troubleshooting guide](https://wiki.bedrock.dev/entities/troubleshooting-entities.html).

## My Add-On isn't working, why?

There are lots of reasons an addon might not work. Before you ask in an addon help channel within the bridge. Discord, please turn on content logs and review any errors.

## How do I turn on content logs?

In **Minecraft's settings** under the Creator section, there are two settings: ”Enable Content Log GUI” and “Enable Content Log File.” We recommend turning both on while testing your project.

![Screenshot showing where to find the content log](./content-log.png)

## Is there a tutorial for…?

You can check #addon-tutorials in the bridge. Discord. If there isn’t one for what you need there, the documentation https://bedrock.dev might help. If you still need help, ask in an available channel in the Add-On help category.

## My entity's texture is black where there should be transparency.

This is caused when you're using a material that doesn't support transparency. Both `skeleton` and `entity_alphatest` materials support transparency and can be used when you have this issue.

## What is the difference between bridge. and bridge. v2?

bridge. v2 is the next generation of bridge., and is currently being actively updated; you can view its most notable features [here](/guide/features/index). It is a PWA and is therefore available on more platforms. bridge. v1 will be officially discontinued as of **Janurary 1st 2023**.

## Is bridge. available for mobile devices?

Yes, [bridge. v2](https://editor.bridge-core.app) is available for mobile devices. However you will need to download your project in order to completely save your progress, because bridge. v2 requires an API that mobile browsers don't support yet.
