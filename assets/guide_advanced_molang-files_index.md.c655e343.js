import{_ as s,o as a,c as n,d as o}from"./app.88375fe2.js";const e="/assets/create-molang-file.6714f39e.png",u=JSON.parse('{"title":"\u223F Molang Files","description":"Learn how you can utilize .molang files to extract common scripts into a single file.","frontmatter":{"title":"\u223F Molang Files","description":"Learn how you can utilize .molang files to extract common scripts into a single file.","sidebar":"advanced","nav_order":1},"headers":[{"level":2,"title":"Basics","slug":"basics"},{"level":2,"title":"Molang Functions","slug":"molang-functions"},{"level":2,"title":"Technical Implementation","slug":"technical-implementation"}],"relativePath":"guide/advanced/molang-files/index.md","lastUpdated":1666444304000}'),l={name:"guide/advanced/molang-files/index.md"},t=o('<h1 id="\u223F-molang-files" tabindex="-1">\u223F Molang Files <a class="header-anchor" href="#\u223F-molang-files" aria-hidden="true">#</a></h1><p>This page serves as an introduction to bridge.&#39;s Molang files and how you can utilize them to extract common scripts into a single file.</p><p>This article teaches you the following topics:</p><p>\u2611\uFE0F What is a Molang file?<br> \u2611\uFE0F How to use Molang files.<br> \u2611\uFE0F How to use Molang functions.<br></p><h2 id="basics" tabindex="-1">Basics <a class="header-anchor" href="#basics" aria-hidden="true">#</a></h2><p><a href="https://bedrock.dev/docs/stable/Molang" target="_blank" rel="noreferrer">Molang</a> is Minecraft&#39;s scripting language. It is used within items, blocks, animations and many more of Minecraft&#39;s JSON files.</p><p>bridge. supports extracting common Molang scripts into dedicated &quot;.molang&quot; files: Simply create a new Molang file over bridge.&#39;s file creation window to get started.</p><p><img src="'+e+`" alt="Creating a molang file"></p><p>The <a href="/guide/advanced/dash/#molang">&quot;molang&quot; compiler plugin</a> loads Molang files from the <code>BP/molang/</code> and <code>RP/molang/</code> folder. The above preset creates the <code>molang/</code> folder and your first &quot;.molang&quot; file for you.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Make sure that the &quot;molang&quot; plugin is listed within your <a href="/guide/advanced/dash/index.html#build-profiles">compiler config</a> in order to use &quot;.molang&quot; files.</p></div><h2 id="molang-functions" tabindex="-1">Molang Functions <a class="header-anchor" href="#molang-functions" aria-hidden="true">#</a></h2><p>Molang files can contain multiple Molang functions. Functions defined within a Molang file can be accessed anywhere within your project. To define a function, the following syntax is used:</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sq</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">base</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#A6ACCD;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">math</span><span style="color:#A6ACCD;">.</span><span style="color:#A6ACCD;">pow</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#A6ACCD;">.</span><span style="color:#A6ACCD;">base</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 2);</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pow</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">base</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">exp</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#A6ACCD;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#A6ACCD;">.</span><span style="color:#A6ACCD;">exp</span><span style="color:#A6ACCD;"> == 0 ? </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#A6ACCD;">.</span><span style="color:#A6ACCD;">base</span><span style="color:#A6ACCD;"> * </span><span style="color:#A6ACCD;">f</span><span style="color:#A6ACCD;">.</span><span style="color:#A6ACCD;">pow</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#A6ACCD;">.</span><span style="color:#A6ACCD;">base</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#A6ACCD;">.</span><span style="color:#A6ACCD;">exp</span><span style="color:#A6ACCD;"> - 1);</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span>
<span class="line"></span></code></pre></div><ul><li>The first argument always defines the function name</li><li>All following arguments except the last one define input arguments</li><li>The last argument is the function body</li><li>Within the function body you can use <code>a.&lt;ARG NAME&gt;</code> or <code>arg.&lt;ARG NAME&gt;</code> to access the input arguments</li><li>Temporary variables get scoped to the current function body automatically</li><li>Basic recursion is supported as long as the interpreter can stop the recursive calls at compile-time</li></ul><p>To later call functions inside of Molang scripts, simply use <code>f.&lt;FUNCTION NAME&gt;(&lt;FUNCTION ARGUMENTS&gt;)</code> or <code>function.&lt;FUNCTION NAME&gt;(&lt;FUNCTION ARGUMENTS&gt;)</code>. After defining the functions in the example above, you could call <code>f.sq(2)</code> or <code>f.pow(3, 2)</code>.</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">transitions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">f.sq(v.my_var) &gt; 4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="technical-implementation" tabindex="-1">Technical Implementation <a class="header-anchor" href="#technical-implementation" aria-hidden="true">#</a></h2><p>Molang files are powered by our <a href="https://github.com/bridge-core/molang/" target="_blank" rel="noreferrer">Molang libarary</a> and the built-in &quot;molang&quot; compiler plugin. Our molang library is also open-source and licensed under the MIT license.</p>`,18),p=[t];function c(r,i,D,d,y,C){return a(),n("div",null,p)}const g=s(l,[["render",c]]);export{u as __pageData,g as default};