import{_ as e,o,c as t,d as r}from"./app.88375fe2.js";const a="/assets/export-as-menu.c33c7cae.png",x=JSON.parse('{"title":"\u{1F4E6} Exporting Projects","description":"","frontmatter":{"title":"\u{1F4E6} Exporting Projects","sidebar":"Misc"},"headers":[{"level":2,"title":"Export Your Project","slug":"export-your-project"},{"level":2,"title":"How it works","slug":"how-it-works"}],"relativePath":"guide/misc/export-project/index.md","lastUpdated":1665861332000}'),i={name:"guide/misc/export-project/index.md"},n=r('<h1 id="\u{1F4E6}-exporting-projects" tabindex="-1">\u{1F4E6} Exporting Projects <a class="header-anchor" href="#\u{1F4E6}-exporting-projects" aria-hidden="true">#</a></h1><p>When you are ready to share your creation with others, you can use bridge. natively supported export formats. In this article you will find out:</p><p>\u2611\uFE0F How to export a project from bridge.<br> \u2611\uFE0F Details on how projects are exported.<br></p><h2 id="export-your-project" tabindex="-1">Export Your Project <a class="header-anchor" href="#export-your-project" aria-hidden="true">#</a></h2><p>It is important to note that you do <strong>not</strong> need to export your project to test your changes if you are on a Chromium based desktop browser, such as Chrome or Edge on destop. Instead you should set up <a href="/guide/misc/com-mojang-syncing/">syncing to your <code>com.mojang</code> folder</a>, so that your changes automatically appear in Minecraft.</p><p>In order to export a project you need to open the <strong>Export As</strong> menu; you can find this by opening the menu under the 3 dots in the pack explorer sidebar tab. This is shown in the following image:</p><p><img src="'+a+'" alt="screenshot showing export as menu"></p><p>Once you have opened this menu, it is as simple as selecting the format that you wish to export in. The default export options are:</p><ul><li><code>.brproject</code> exports as a full bridge. project which can be imported back into bridge.</li><li><code>.mcaddon</code> exports the behavior and resource packs into a single package that can be imported into Minecraft and bridge.</li><li><code>.mcworld</code> exports a behavior pack, resource pack and world into a single package that can be imported into Minecraft and bridge.</li><li><code>.mctemplate</code> exports a behavior pack, resource pack, skin pack and world template into a single package that can be imported into Minecraft and bridge.</li></ul><h2 id="how-it-works" tabindex="-1">How it works <a class="header-anchor" href="#how-it-works" aria-hidden="true">#</a></h2><p>When exporting your project into a format that should be imported to Minecraft, <a href="/guide/advanced/dash/index">Dash</a> will compile a production build and it will be written to the exported package.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can configure bridge. to automatically increment the pack versions inside of each manifest in your project when exporting them. You can do this by navigating to bridge.&#39;s settings, then going to the <strong>Projects</strong> tab and toggling the <strong>Increment Version</strong> option.</p></div><p>bridge. extensions can also add new project export options by utilizing the <a href="/extensions/scripts/project"><code>@bridge/project</code> module</a>.</p>',13),s=[n];function c(p,d,h,l,u,g){return o(),t("div",null,s)}const b=e(i,[["render",c]]);export{x as __pageData,b as default};