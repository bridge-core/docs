---
title: 🔁 com.mojang Syncing
sidebar: Misc
---

# 🔁 com.mojang Syncing

bridge. can seamlessly sync your projects to your `com.mojang`'s "development_behavior_packs" and "development_resource_packs" folders.
In this article you will find out:

:ballot_box_with_check: How to setup com.mojang syncing.<br/>
:ballot_box_with_check: How to compile files changed outside of bridge.<br/>
:ballot_box_with_check: What to do when Dash's watch mode produced an unexpected compilation output.<br/>

## Basics

By default, bridge. stores your projects outside of the `com.mojang` folder which means they won't show up in Minecraft. However, bridge. can compile your packs to the `com.mojang` folder, providing you have linked it to bridge.

:::warning
Before you proceed, ensure you own and have installed Minecraft Bedrock on your Windows device.
:::

## Setup

The `com.mojang` folder, on windows, desktop (currently only platform that supports this feature) is located at `C:\Users\<USER>\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang`. 

:::tip
You can quickly access this by pressing `Windows Key + R` and pasting the following `%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang`
:::

Once you have located this folder, all you need to do is drag it from the file explorer onto bridge. Then you should see the following choice prompt.

![Screenshot of import folder window](./import-folder.png)

Simply press the "Output Folder" option to set this as Dash's compilation output directory. You packs will now automatically update in Minecraft's development folders when you make a change in bridge.

## Fetch for Changes

## Restart Watch Mode
