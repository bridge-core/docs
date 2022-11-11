---
title: 📄 File Types
description: 'Reference documentation of all available file types.'
sidebar: Misc
---

# 📄 File Types

When working with bridge., it can be useful to know how bridge. distinguishes between different file types.

## Basics

bridge. ships with a number of file definitions built-in. File definitions are the glue code that connects data for "Go to Definition", code completion, diagnostics, file type guessing and more. Additionally, every file definition assigns a file type identifier to each of Minecraft's file types.

## Default File Types

You can find all of bridge.'s default file type identifiers below.

### BP

| File Type ID          | Path                      |
| --------------------- | ------------------------- |
| `animation`           | BP/animations/            |
| `animationController` | BP/animation_controllers/ |
| `biome`               | BP/biomes/                |
| `block`               | BP/blocks/                |
| `dialogue`            | BP/dialogue/              |
| `dimension`           | BP/dimensions/            |
| `entity`              | BP/entities/              |
| `feature`             | BP/features/              |
| `featureRule`         | BP/feature_rules/         |
| `function`            | BP/functions/             |
| `gameTest`            | BP/scripts/               |
| `item`                | BP/items/                 |
| `lootTable`           | BP/loot_tables/           |
| `lang`                | BP/texts/                 |
| `mcstructure`         | BP/structures/            |
| `recipe`              | BP/recipes/               |
| `spawnRule`           | BP/spawn_rules/           |
| `tradeTable`          | BP/trading/               |
| `volume`              | BP/volumes/               |

### Single Instance BP Files

| File Type ID   | Path                    |
| -------------- | ----------------------- |
| `langDef`      | BP/texts/languages.json |
| `manifest`     | BP/manifest.json        |
| `functionTick` | BP/functions/tick.json  |

### RP

| File Type ID                | Path                                 |
| --------------------------- | ------------------------------------ |
| `attachable`                | RP/attachables/                      |
| `clientAnimation`           | RP/animations/                       |
| `clientAnimationController` | RP/animation_controllers/            |
| `clientEntity`              | RP/entity/                           |
| `clientItem`                | RP/items/                            |
| `clientLang`                | RP/texts/                            |
| `fog`                       | RP/fogs/                             |
| `geometry`                  | RP/models/entity/, RP/models/blocks/ |
| `material`                  | RP/materials/                        |
| `particle`                  | RP/particles/                        |
| `renderController`          | RP/render_controllers/               |
| `texture`                   | RP/textures/                         |
| `textureSet`                | RP/textures/blocks/                  |
| `ui`                        | RP/ui/                               |

### Single Instance RP Files

| File Type ID      | Path                               |
| ----------------- | ---------------------------------- |
| `clientBiome`     | RP/biomes_client.json              |
| `clientBlock`     | RP/blocks.json                     |
| `clientManifest`  | RP/manifest.json                   |
| `clientSound`     | RP/sounds.json                     |
| `flipbookTexture` | RP/textures/flipbook_textures.json |
| `geometry`        | RP/models/mobs.json                |
| `itemTexture`     | RP/textures/item_texture.json      |
| `langDef`         | RP/texts/languages.json            |
| `musicDefinition` | RP/sounds/music_definitions.json   |
| `soundDefinition` | RP/sounds/sound_definitions.json   |
| `terrainTexture`  | RP/textures/terrain_texture.json   |

### SP

| File Type ID   | Path             |
| -------------- | ---------------- |
| `lang`         | SP/texts/        |
| `skinManifest` | SP/manifest.json |
| `skins`        | SP/skins.json    |

### WT

| File Type ID    | Path             |
| --------------- | ---------------- |
| `volume`        | WT/volumes/      |
| `worldManifest` | WT/manifest.json |

### Custom bridge. Files

| File Type Id        | Path                   |
| ------------------- | ---------------------- |
| `customComponent`   | BP/components/         |
| `bridgeConfig`      | config.json            |
| `customCommand`     | BP/commands/           |
| `molang`            | BP/molang/, RP/molang/ |
| `extensionManifest` |                        |
| `presetManifest`    |                        |
| `theme`             |                        |
| `molangAstScript`   | BP/scripts/molang/     |
