---
title: 📬 Importing Projects
sidebar: misc
---

# 📬 Importing Projects

bridge. allows you to import various formats of packaged or existing projects to quickly get editing an Add-On with bridge.! Generally, to import a project, just drag it from your device's file explorer into bridge.

:::tip
You may not need to import your project in order to start editing it with bridge. v2. You can read more about this in the [project types guide](/guide/misc/project-types/).
:::

## `.mcaddon` and `.mcpack`

Both `.mcaddon` and `.mcpack` files can be imported into bridge. and a project will be built around the imported files. Importing a pack through this method may cause the project to be misconfigured and you may need to modify the [project config](/guide/misc/project-config) manually afterwards.

## `.brproject`

A `.brproject` file is bridge's internal format for sharing a full project. They can be created by [exporting](/guide/misc/export-project/index) as a `.brproject` file. The project's configuration is stored in this file so your project will be setup correctly when importing.

## `com.mojang`

bridge. will [automatically load projects from the `com.mojang` folder](/guide/misc/project-types/index.html#com-mojang-project) and show them in the project chooser. It isn't recommended to import your projects this way, but if you want to edit your files directly in the `com.mojang` folder, you can.

## Manually transferring projects

On Desktop, you are also able to manually transfer projects into the bridge. folder for you to work on. The best way to do this is described below:

1. Open [bridge.](https://editor.bridge-core.app/) and create a new project; ensure this isn't a local project. If you unsure how to get to this step, we recommend you read through our [getting started guide](/guide/index).
2. Open the project's folder up in your device's file explorer.
3. Locate the `BP` folder in your project and move your behavior pack into it.
4. Repeat for each pack type, with the resource pack going in the `RP` folder, skin pack in `SP` and world template in `WT`.
