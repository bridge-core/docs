import{_ as s,o as n,c as a,d as o}from"./app.88375fe2.js";const e="/assets/component-usage.7c288792.png",h=JSON.parse('{"title":"\u{1F4E6} Custom Components","description":"Learn how you can write custom components for Minecraft entities, blocks and items!","frontmatter":{"title":"\u{1F4E6} Custom Components","description":"Learn how you can write custom components for Minecraft entities, blocks and items!","sidebar":"advanced"},"headers":[{"level":2,"title":"Basics","slug":"basics"},{"level":3,"title":"Component Locations","slug":"component-locations"},{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Writing Custom Components","slug":"writing-custom-components"},{"level":3,"title":"name(componentName: string): void","slug":"name-componentname-string-void"},{"level":3,"title":"schema(schemaDefinition: any): void","slug":"schema-schemadefinition-any-void"},{"level":3,"title":"template((componentProps: any, context: ITemplateContext) => void): void","slug":"template-componentprops-any-context-itemplatecontext-void-void"}],"relativePath":"guide/advanced/custom-components/index.md","lastUpdated":1666126402000}'),t={name:"guide/advanced/custom-components/index.md"},p=o('<h1 id="\u{1F4E6}-custom-components" tabindex="-1">\u{1F4E6} Custom Components <a class="header-anchor" href="#\u{1F4E6}-custom-components" aria-hidden="true">#</a></h1><p>This page serves as an introduction to bridge.&#39;s custom components which are available for use within your entity, block and item files. This article will cover the following topics:</p><p>\u2611\uFE0F What is a custom component?<br> \u2611\uFE0F How to install a custom component.<br> \u2611\uFE0F How to use a custom component.<br> \u2611\uFE0F How to write custom components.<br></p><h2 id="basics" tabindex="-1">Basics <a class="header-anchor" href="#basics" aria-hidden="true">#</a></h2><p>Custom components allow you to extract common logic from entity, block and item files and to generate JSON using JavaScript or TypeScript. They integrate seamlessly into bridge. by appearing alongside Minecraft&#39;s built-in components within auto-completions.</p><h3 id="component-locations" tabindex="-1">Component Locations <a class="header-anchor" href="#component-locations" aria-hidden="true">#</a></h3><p>Custom components are loaded from the <code>components/</code> folder within your behavior pack.</p><ul><li>Item components are expected to be within the <code>components/item/</code> folder</li><li>Block components are expected to be within the <code>components/block/</code> folder</li><li>Entity components are expected to be within the <code>components/entity/</code> folder</li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><p>If you do not feel confident in writing your own custom components, you can install pre-written components from bridge.&#39;s <a href="/extensions/#installing-extensions">extension store</a>. Simply select the &quot;components&quot; tab within the sidebar and choose the component you need.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>After installing or writing your first custom component, it will naturally appear within auto-completions within your entity, block and item files. You can then use the component as you would any other component.</p><p><img src="'+e+`" alt="Screenshot of a custom component being used within bridge."></p><h2 id="writing-custom-components" tabindex="-1">Writing Custom Components <a class="header-anchor" href="#writing-custom-components" aria-hidden="true">#</a></h2><p>Start by creating a JavaScript or TypeScript file within the location described <a href="#component-locations">here</a>. You can only write a single component per file which should be exported as the default export.</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineComponent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{...}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The call to <code>defineComponent(...)</code> is optional. It enables TypeScript to validate the passed component instantiation function.</p></div><h3 id="name-componentname-string-void" tabindex="-1"><code>name(componentName: string): void</code> <a class="header-anchor" href="#name-componentname-string-void" aria-hidden="true">#</a></h3><p>Calling this function is required. It sets the name of the component which will be used within auto-completions.</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineComponent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#82AAFF;">name</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bridge:my_component</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="schema-schemadefinition-any-void" tabindex="-1"><code>schema(schemaDefinition: any): void</code> <a class="header-anchor" href="#schema-schemadefinition-any-void" aria-hidden="true">#</a></h3><p>Use this function to set a JSON schema to validate the component&#39;s properties and provide auto-completions to your users.</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineComponent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">schema</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#82AAFF;">schema</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">object</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">		properties</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			my_property</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">				description</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">This is a custom component property</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="template-componentprops-any-context-itemplatecontext-void-void" tabindex="-1"><code>template((componentProps: any, context: ITemplateContext) =&gt; void): void</code> <a class="header-anchor" href="#template-componentprops-any-context-itemplatecontext-void-void" aria-hidden="true">#</a></h3><p>Use this function to return a JSON template for the component. The created templates will be merged with the JSON file the component is used in. The <code>componentProps</code> parameter contains all properties defined within the current component&#39;s JSON file.</p><p>In the example below, the <code>componentProps</code> parameter has the value <code>{ &quot;my_property&quot;: 42 }</code>.</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">minecraft:entity</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">identifier</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bridge:my_entity</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">components</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">bridge:my_component</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">my_property</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">42</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineComponent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#82AAFF;">template</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">({</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">my_property</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">create</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">})</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#82AAFF;">create</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">minecraft:health</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">					max</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">my_property</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">					value</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">my_property</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">minecraft:entity/components</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">		)</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>You can call <code>create(...)</code> to create a JSON template. The first argument is the JSON to create and the second argument is the path within the JSON file where the template should be created. Omitting the second argument will create the template at the root of the JSON file.</p><p>And that&#39;s it, you have just written your first basic custom component! \u{1F389}</p>`,30),l=[p];function c(r,i,y,F,D,d){return n(),a("div",null,l)}const C=s(t,[["render",c]]);export{h as __pageData,C as default};