import{_ as e,o as t,c as a,d as r}from"./app.07110082.js";const f=JSON.parse('{"title":"@bridge/tab","description":"","frontmatter":{"title":"@bridge/tab","description":"","sidebar":"scripts"},"headers":[{"level":2,"title":"Variables","slug":"variables"},{"level":3,"title":"ContentTab","slug":"contenttab"},{"level":3,"title":"FileTab","slug":"filetab"},{"level":2,"title":"Functions","slug":"functions"},{"level":3,"title":"openFilePath","slug":"openfilepath"},{"level":3,"title":"openTab","slug":"opentab"},{"level":3,"title":"register","slug":"register"}],"relativePath":"extensions/scripts/modules/bridge-tab.md","lastUpdated":1657738892000}'),o={name:"extensions/scripts/modules/bridge-tab.md"},d=r('<h1 id="bridge-tab" tabindex="-1">@bridge/tab <a class="header-anchor" href="#bridge-tab" aria-hidden="true">#</a></h1><p>Module that allows access to bridge.&#39;s tab system.</p><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-hidden="true">#</a></h2><h3 id="contenttab" tabindex="-1">ContentTab <a class="header-anchor" href="#contenttab" aria-hidden="true">#</a></h3><p>\u2022 <code>Const</code> <strong>ContentTab</strong>: <code>any</code></p><p><strong><code>link</code></strong> <a href="https://github.com/bridge-core/editor/blob/main/src/components/TabSystem/CommonTab.ts" target="_blank" rel="noopener noreferrer">https://github.com/bridge-core/editor/blob/main/src/components/TabSystem/CommonTab.ts</a></p><hr><h3 id="filetab" tabindex="-1">FileTab <a class="header-anchor" href="#filetab" aria-hidden="true">#</a></h3><p>\u2022 <code>Const</code> <strong>FileTab</strong>: <code>any</code></p><p><strong><code>link</code></strong> <a href="https://github.com/bridge-core/editor/blob/main/src/components/TabSystem/FileTab.ts" target="_blank" rel="noopener noreferrer">https://github.com/bridge-core/editor/blob/main/src/components/TabSystem/FileTab.ts</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h2><h3 id="openfilepath" tabindex="-1">openFilePath <a class="header-anchor" href="#openfilepath" aria-hidden="true">#</a></h3><p>\u25B8 <strong>openFilePath</strong>(<code>filePath</code>, <code>selectTab</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Given a file path relative to the project root, open the corresponding file inside of bridge.&#39;s tab system</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>filePath</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">File to open</td></tr><tr><td style="text-align:left;"><code>selectTab</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Whether to automatically select the tab</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><hr><h3 id="opentab" tabindex="-1">openTab <a class="header-anchor" href="#opentab" aria-hidden="true">#</a></h3><p>\u25B8 <strong>openTab</strong>(<code>FileTabClass</code>, <code>splitScreen</code>): <code>Promise</code>&lt;<code>any</code>&gt;</p><p>Useful for ContentTabs: Programmatically add the tab to the tab system</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>FileTabClass</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>splitScreen</code></td><td style="text-align:left;"><code>boolean</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><code>Promise</code>&lt;<code>any</code>&gt;</p><hr><h3 id="register" tabindex="-1">register <a class="header-anchor" href="#register" aria-hidden="true">#</a></h3><p>\u25B8 <strong>register</strong>(<code>FileTabClass</code>): <a href="./../interfaces/idisposable.html"><code>IDisposable</code></a></p><p>Register new FileTabs to be picked up by the isTabFor tab system method</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>FileTabClass</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">FileTab class</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><a href="./../interfaces/idisposable.html"><code>IDisposable</code></a></p>',34),s=[d];function i(l,n,c,h,b,p){return t(),a("div",null,s)}var m=e(o,[["render",i]]);export{f as __pageData,m as default};
