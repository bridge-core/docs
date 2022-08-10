import{_ as e,o as i,c as t,i as a}from"./app.bf148059.js";var n="/assets/creator.54df4a8d.png";const m=JSON.parse(`{"title":"FAQ","description":"Find answers for frequently asked questions on addons and bridge.","frontmatter":{"description":"Find answers for frequently asked questions on addons and bridge.","sidebar":"guide","author":"7dev7urandom"},"headers":[{"level":2,"title":"How do I use custom commands in game?","slug":"how-do-i-use-custom-commands-in-game"},{"level":2,"title":"After editing an animation in bridge., it stopped working. Why?","slug":"after-editing-an-animation-in-bridge-it-stopped-working-why"},{"level":2,"title":"Something isn\u2019t behaving properly with bridge. What should I do?","slug":"something-isn\u2019t-behaving-properly-with-bridge-what-should-i-do"},{"level":2,"title":"Something is wrong with the bridge. auto completions.","slug":"something-is-wrong-with-the-bridge-auto-completions"},{"level":2,"title":"How do I uninstall global plugins?","slug":"how-do-i-uninstall-global-plugins"},{"level":2,"title":"My entity exists in game, but is invisible.","slug":"my-entity-exists-in-game-but-is-invisible"},{"level":2,"title":"My addon isn\u2019t working. Why?","slug":"my-addon-isn\u2019t-working-why"},{"level":2,"title":"How do I turn on content logs?","slug":"how-do-i-turn-on-content-logs"},{"level":2,"title":"How do I make a scripting GUI?","slug":"how-do-i-make-a-scripting-gui"},{"level":2,"title":"Is there a tutorial for\u2026?","slug":"is-there-a-tutorial-for\u2026"},{"level":2,"title":"Do I need experimental gameplay for\u2026?","slug":"do-i-need-experimental-gameplay-for\u2026"},{"level":2,"title":"My entity's texture is black where there should be transparency.","slug":"my-entity-s-texture-is-black-where-there-should-be-transparency"},{"level":2,"title":"What is the difference between bridge. and bridge. v2?","slug":"what-is-the-difference-between-bridge-and-bridge-v2"},{"level":2,"title":"Is bridge. available for mobile devices?","slug":"is-bridge-available-for-mobile-devices"}],"relativePath":"guide/faq/index.md","lastUpdated":1658130121000}`),r={name:"guide/faq/index.md"},o=a('<h1 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-hidden="true">#</a></h1><p>There are many questions that are asked frequently within the bridge. Discord, and this document goes through them.</p><h2 id="how-do-i-use-custom-commands-in-game" tabindex="-1">How do I use custom commands in game? <a class="header-anchor" href="#how-do-i-use-custom-commands-in-game" aria-hidden="true">#</a></h2><p>You can\u2019t; bridge. custom commands are used only inside of the editor (functions, items, animations, animation controllers, entities) as they are compiled into normal commands.</p><h2 id="after-editing-an-animation-in-bridge-it-stopped-working-why" tabindex="-1">After editing an animation in bridge., it stopped working. Why? <a class="header-anchor" href="#after-editing-an-animation-in-bridge-it-stopped-working-why" aria-hidden="true">#</a></h2><p>This is a known issue that has to do with how bridge. handles arrays and objects. The automatic type detection fails where there is ambiguity between objects and animations and both options are valid. Solution: Do not edit animations from Blockbench with bridge.; manually fix broken animations with a text editor.</p><p>This is not an issue in bridge. v2.</p><h2 id="something-isn\u2019t-behaving-properly-with-bridge-what-should-i-do" tabindex="-1">Something isn\u2019t behaving properly with bridge. What should I do? <a class="header-anchor" href="#something-isn\u2019t-behaving-properly-with-bridge-what-should-i-do" aria-hidden="true">#</a></h2><p>Please verify your bridge. version is the latest, and then report it in <strong>#bugs</strong> (within the bridge. Discord, specifying the version, the problem, and what you were doing when the problem occured). We will get back to you as soon as we can. In case you have a GitHub account, it is preferred that you open an issue here: <a href="https://github.com/bridge-core/bridge./issues/new/choose" target="_blank" rel="noopener noreferrer">https://github.com/bridge-core/bridge./issues/new/choose</a></p><h2 id="something-is-wrong-with-the-bridge-auto-completions" tabindex="-1">Something is wrong with the bridge. auto completions. <a class="header-anchor" href="#something-is-wrong-with-the-bridge-auto-completions" aria-hidden="true">#</a></h2><p>Follow the same steps as reporting improper bridge. behavior.</p><h2 id="how-do-i-uninstall-global-plugins" tabindex="-1">How do I uninstall global plugins? <a class="header-anchor" href="#how-do-i-uninstall-global-plugins" aria-hidden="true">#</a></h2><p>You can open the folder where global plugins are stored by pressing the &#39;Help&#39; action in the toolbar and pressing the &#39;Open Global Plugins Folder&#39; option. Then you can delete the folders inside the &#39;plugins&#39; folder to remove plugins.</p><h2 id="my-entity-exists-in-game-but-is-invisible" tabindex="-1">My entity exists in game, but is invisible. <a class="header-anchor" href="#my-entity-exists-in-game-but-is-invisible" aria-hidden="true">#</a></h2><p>This could be caused by many different things, such as a mistake in your render controller, a problem referecing your geometry or incorrectly defining the texture path. For more in depth help with this, check out <a href="https://wiki.bedrock.dev/knowledge/troubleshooting.html" target="_blank" rel="noopener noreferrer">this entity troubleshooting guide</a>.</p><h2 id="my-addon-isn\u2019t-working-why" tabindex="-1">My addon isn\u2019t working. Why? <a class="header-anchor" href="#my-addon-isn\u2019t-working-why" aria-hidden="true">#</a></h2><p>There are lots of reasons an addon might not work. Before you ask in an addon help channel within the bridge. Discord, please turn on content logs and review any errors.</p><h2 id="how-do-i-turn-on-content-logs" tabindex="-1">How do I turn on content logs? <a class="header-anchor" href="#how-do-i-turn-on-content-logs" aria-hidden="true">#</a></h2><p>In the <em>Minecraft</em> settings under the Creator section, there are two settings: \u201DEnable Content Log GUI\u201D and \u201CEnable Content Log File.\u201D We recommend turning both on while testing.</p><p><img src="'+n+'" alt="Enable 1.17 Content Logs"></p><h2 id="how-do-i-make-a-scripting-gui" tabindex="-1">How do I make a scripting GUI? <a class="header-anchor" href="#how-do-i-make-a-scripting-gui" aria-hidden="true">#</a></h2><p>There are currently no tutorials for this, but Mojang has released an example pack using a GUI. You can get the pack here: <a href="https://aka.ms/minecraftscripting_turnbased" target="_blank" rel="noopener noreferrer">https://aka.ms/minecraftscripting_turnbased</a></p><h2 id="is-there-a-tutorial-for\u2026" tabindex="-1">Is there a tutorial for\u2026? <a class="header-anchor" href="#is-there-a-tutorial-for\u2026" aria-hidden="true">#</a></h2><p>You can check #addon-guides in the bridge. Discord. If there isn\u2019t one there, the documentation (<a href="https://bedrock.dev" target="_blank" rel="noopener noreferrer">https://bedrock.dev</a>) might help. If you still need help, ask in an available #addon-help channel.</p><h2 id="do-i-need-experimental-gameplay-for\u2026" tabindex="-1">Do I need experimental gameplay for\u2026? <a class="header-anchor" href="#do-i-need-experimental-gameplay-for\u2026" aria-hidden="true">#</a></h2><p>As of 1.16.0, the following things require experimental gameplay:</p><ul><li>Biomes</li><li>Features</li><li>Feature rules</li><li>Scripts</li></ul><h2 id="my-entity-s-texture-is-black-where-there-should-be-transparency" tabindex="-1">My entity&#39;s texture is black where there should be transparency. <a class="header-anchor" href="#my-entity-s-texture-is-black-where-there-should-be-transparency" aria-hidden="true">#</a></h2><p>This is caused when you&#39;re using a material that doesn&#39;t support transparency. <code>skeleton</code> and <code>entity_alphatest</code> both support transparency and can be used when you have this issue.</p><h2 id="what-is-the-difference-between-bridge-and-bridge-v2" tabindex="-1">What is the difference between bridge. and bridge. v2? <a class="header-anchor" href="#what-is-the-difference-between-bridge-and-bridge-v2" aria-hidden="true">#</a></h2><p>bridge. is a native program, while bridge. v2 is an installable web app (PWA) currently available for Chrome (Desktop) and Microsoft Edge. bridge. v2 offers a variety of improvements, including a raw JSON editor, new user interface, skin pack support, a new compiler architecture instead of a cache system, and more. bridge. v2 already has support for a growing number of extensions, furthermore most recently-published extensions are currently only available for bridge. v2.</p><h2 id="is-bridge-available-for-mobile-devices" tabindex="-1">Is bridge. available for mobile devices? <a class="header-anchor" href="#is-bridge-available-for-mobile-devices" aria-hidden="true">#</a></h2><p>Yes, <a href="https://editor.bridge-core.app" target="_blank" rel="noopener noreferrer">bridge. v2</a> is avaliable for mobile devices. However you will need to download your project in order to save your progress, because bridge. v2 requires an API that mobile browsers don&#39;t support.</p>',33),s=[o];function d(h,l,g,u,c,p){return i(),t("div",null,s)}var f=e(r,[["render",d]]);export{m as __pageData,f as default};