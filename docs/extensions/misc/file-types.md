---
title: 📄 File Types
description: 'Reference documentation of all available file types.'
sidebar: 'misc'
---

# 📄 File Types

When working with bridge., it can be useful to know how bridge. distinguishes between different file types.

## Basics

bridge. ships with a number of file definitions built-in. File definitions are the glue code that connects data for "Go to Definition", code completion, diagnostics, file type guessing and more. Additionally, every file definition assigns a file type identifier to each of Minecraft's file types.

## Default File Types

You can find all of bridge.'s default file type identifiers below.

### BP

| File Type             | Description              |
| --------------------- | ------------------------ |
| `animation`           | BP/animations            |
| `animationController` | BP/animation_controllers |
| `biome`               | BP/biomes                |
| `block`               | BP/blocks                |
| `dialogue`            | BP/dialogue              |
| `entity`              | BP/entities              |
| `feature`             | BP/features              |
| `fog`                 | BP/fogs                  |
| `featureRule`         | BP/feature_rules         |
| `function`            | BP/functions             |
| `item`                | BP/items                 |
| `langDef`             | BP/texts/languages.json  |
| `lang`                | BP/texts                 |
| `lootTable`           | BP/loot_tables           |
| `recipe`              | BP/recipes               |
| `serverScript`        | BP/scripts/server        |
| `clientScript`        | BP/scripts/client        |
| `gameTest`            | BP/scripts               |
| `spawnRule`           | BP/spawn_rules           |
| `tradeTable`          | BP/trading               |
| `itemComponent`       | BP/components/item       |
| `blockComponent`      | BP/components/block      |
| `entityComponent`     | BP/components/entity     |
| `customCommand`       | BP/commands              |
| `mcstructure`         | BP/structures            |
| `molang`              | BP/molang                |

### Single Instance BP Files

| File Type      | Description             |
| -------------- | ----------------------- |
| `langDef`      | BP/texts/languages.json |
| `functionTick` | BP/functions/tick.json  |
| `manifest`     | BP/manifest.json        |

### RP

| File Type                   | Description                                               |
| --------------------------- | --------------------------------------------------------- |
| `attachable`                | RP/attachables                                            |
| `geometry`                  | RP/models/entity & RP/models/mobs.json & RP/models/blocks |
| `clientAnimation`           | RP/animations                                             |
| `clientAnimationController` | RP/animation_controllers                                  |
| `clientEntity`              | RP/entity                                                 |
| `clientItem`                | RP/items                                                  |
| `clientLang`                | RP/texts                                                  |
| `particle`                  | RP/particles                                              |
| `renderController`          | RP/render_controllers                                     |
| `textureSet`                | RP/textures/blocks                                        |
| `ui`                        | RP/ui                                                     |

### Single Instance RP Files

| File Type         | Description                        |
| ----------------- | ---------------------------------- |
| `langDef`         | RP/texts/languages.json            |
| `soundDefinition` | RP/sounds/sound_definitions.json   |
| `musicDefinition` | RP/sounds/music_definitions.json   |
| `itemTexture`     | RP/textures/item_texture.json      |
| `terrainTexture`  | RP/textures/terrain_texture.json   |
| `flipbookTexture` | RP/textures/flipbook_textures.json |
| `clientBlock`     | RP/blocks.json                     |
| `clientBiome`     | RP/biomes_client.json              |
| `clientSound`     | RP/sounds.json                     |
| `clientManifest`  | RP/manifest.json                   |

### SP

| File Type      | Description      |
| -------------- | ---------------- |
| `skinManifest` | SP/manifest.json |

### WP

| File Type       | Description      |
| --------------- | ---------------- |
| `worldManifest` | WT/manifest.json |
| `volume`        | WT/volumes       |
