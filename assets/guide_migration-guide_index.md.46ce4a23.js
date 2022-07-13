import{_ as e,o,c as t,d as r}from"./app.07110082.js";var i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAdCAIAAAA4muUJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAQ8SURBVGhD7ZnbS1RRFIf7Fwyi11566TnoISKiCCKKoqiICCKigoKoISq6EBFlYWlRdpMyNUtMrcxMqym7O2Vmkzk6mpfRxsm56h/QNyzbc9xzmnGOCUFn82M4Z5119uXba6+9OTMlyy6ZF5ualWJTs1LGUJs6c860dfnTHa7p+1psJeRwgQU4o5iM1LDavFLJ4VLgEtTiUab52RorEAmrBDU70NLL4RJWBmqahy0zCSubWmYSVhOituHG94I3Q49bo0/aYg/d0ew6/7wzHuy77/r2VvmMnuPXrGOtKy538qvZ/xEJK4vUGNX554GX3uG6bzHA5TwdLP8UbuiI3+Y6A05P7GjND+0V0aJzHRXN4V3lfZpdaUdZ36Ov0c3FPUYjtd3+EDJaJq7Z2W30nD6/6hwpbwqvudalOZhKWFmhNuOQ+2LDT9oDljEoluV7Yfe6cwRZpmaqyaB2ss7/4Etk1dUu1geVF70Pag6mElZWqG2/3fvMEwMc+LjdWdYHPi42FnbXtkbHQ624MfiiYxjuec4AlQCx+kuk6nPkfktkT4WP3zUFXdh5io+zfbj0Q0ioaUY8qXDJBe+djyFChkinM8bmRHCh0YMPBrjG/15L5HD1wOkng0cexi1o/LMirKxQy302SC5b/TukpUkmjZ6R4ETSxWTRaYZ6yxViJI4KH578Qo2LI9UDQIGXUNt/r585YKkuzGtX1HDGCBpepxI81xZ0lTQGC98F559tP/HYT3pdfqnT2KIov+En65GLraW9vLXySsKHRosag+ecAWVJIWFlhRrdZW5pTG4zWj7GFUoN4LjwIsAtRh5hVNQuvRwdJ1JNMHi1lDDiyc5T7Y7CAsvi839c/hgJsaX53ux6v7YYj9f+YKmask6WsLJCjQEYqRHt9W2xA/f7xcKACRyGJE81GakhKCBTarTCI3FT1DQjnoyZxS5pIUVykHZZ/mVNYTqs7ECv+RoPXmVJLWFlhRrRUeOOMm/Ksq20l6UBygW57Zw5oCaTnywt1nhlgrG2t9JH05uKusWYQvF3G4OVzWGVW0jE5FPAKZ+0ElYWdwPOFqfq/UYjmym9YTtn0ZHX5eCWLNAwVJXXyN8gM6XGUzmCpM1rhM/N90Es5Nbrb4f4pRts6Go1iGjlqSdGBhQ7yJh7QtXok1bCygo1WmUDBZyW8unr1ddD2FPMnsQaIabtocnUsKfYQ3mdSgicuTkejlocuNhDMXJaxEd2EvCpdhH1y+4pt4SecV3zLt1Qzn+SsLJCDQGInYtTLmFFfmXGOPQSOLR99Pd2PhkioLaU9NC6BCCTpDlMtoSVRWqIKd1X1Q81Zp654gRH1lh//bvm9nfFuitxhZgtRKxxUtMcJlvCyjq1/1PCyqaWmYSVgZr9VTKtkr9K2l/A08rkC7j9b0samf7bQsEajzibnaYU/+zZZfzFppZ5ycr6BcGtXv9JcfOCAAAAAElFTkSuQmCC";const f=JSON.parse(`{"title":"bridge. v2 Migration","description":"Find out how to migrate your bridge. v1 projects to bridge. v2!","frontmatter":{"description":"Find out how to migrate your bridge. v1 projects to bridge. v2!","sidebar":"guide","author":"joelant05"},"headers":[{"level":2,"title":"What's different about bridge. v1 projects and bridge. v2 projects?","slug":"what-s-different-about-bridge-v1-projects-and-bridge-v2-projects"},{"level":2,"title":"What will happen to my projects once I have transferred them?","slug":"what-will-happen-to-my-projects-once-i-have-transferred-them"},{"level":2,"title":"Transfer Projects","slug":"transfer-projects"},{"level":2,"title":"Setup bridge. v2 With Your Transferred Projects","slug":"setup-bridge-v2-with-your-transferred-projects"}],"relativePath":"guide/migration-guide/index.md","lastUpdated":1657738892000}`),a={name:"guide/migration-guide/index.md"},d=r('<h1 id="bridge-v2-migration" tabindex="-1">bridge. v2 Migration <a class="header-anchor" href="#bridge-v2-migration" aria-hidden="true">#</a></h1><h2 id="what-s-different-about-bridge-v1-projects-and-bridge-v2-projects" tabindex="-1">What&#39;s different about bridge. v1 projects and bridge. v2 projects? <a class="header-anchor" href="#what-s-different-about-bridge-v1-projects-and-bridge-v2-projects" aria-hidden="true">#</a></h2><p>bridge. v1 stored its projects in the <code>development_behavior_packs</code> and <code>development_resource_packs</code> folders within the <code>com.mojang</code> directory. However, bridge. v2 approaches this differently by storing your projects in a nicer to work with format and elsewhere on the system, in <code>Documents</code> for example, and you are given the option to link your <code>com.mojang</code> folder to bridge. v2.</p><p>Upon linking this, bridge. v2&#39;s compiler will write its <code>dev</code> mode output to the <code>development_behavior_packs</code>, <code>development_resource_packs</code>, <code>minecraftWorlds</code> and <code>development_skin_packs</code> folders, where these are appropriate for your pack. This means that the source of your projects will always be outside of the <code>com.mojang</code> directory which has many benefits, such as not losing all of your projects when uninstalling Minecraft and much easier git integration.</p><p>This also means that you should <strong>not</strong> edit your packs in the <code>com.mojang</code> folder because they will just be overwritten by bridge.&#39;s compiler output.</p><h2 id="what-will-happen-to-my-projects-once-i-have-transferred-them" tabindex="-1">What will happen to my projects once I have transferred them? <a class="header-anchor" href="#what-will-happen-to-my-projects-once-i-have-transferred-them" aria-hidden="true">#</a></h2><p>The migration process will never delete your original project. During the migration process, your projects will be transferred and custom commands, custom components and custom entity syntax will continue to work as expected. The <code>bridge</code> folder in your BP will be removed, bridge. will take the data it needs out of here and remove it from the transferred copy of your project, as it will not be needed anymore.</p><h2 id="transfer-projects" tabindex="-1">Transfer Projects <a class="header-anchor" href="#transfer-projects" aria-hidden="true">#</a></h2><ol><li><p>To get started with tranferring your projects to bridge. v2, launch bridge. v1 and make sure you are on <code>v1.8.0</code> or higher. You can check this in the bottom right corner. If you are not on this version, make sure to update bridge. via the update prompt at the bottom of the app.</p></li><li><p>After launching bridge. v1, click the update to bridge. v2 notification in the bottom of the app. <img src="'+i+'" alt="Update to v2 prompt"></p></li><li><p>This will show a window telling you that bridge. v2 is available and you can update now. To continue, click <strong><code>Continue</code></strong>.</p></li><li><p>The migration window will then appear. First you need to select a directory to store your bridge. v2 projects. To choose this, click the <strong><code>Select Folder</code></strong> option and choose a directory. <strong>Ensure you don&#39;t choose your <code>com.mojang</code> folder.</strong></p></li><li><p>After you have selected a folder, you need to scroll down and select the projects from the list that you want to transfer, you can also click the <strong><code>Select All</code></strong> button to select all projects to be transferred. Once the projects are selected, click the <strong><code>Confirm</code></strong> button.</p></li><li><p>When the loading window closes, you will see some information about what to do next. To proceed to bridge. v2 click <strong><code>Go!</code></strong>. You can also click <strong><code>View Projects</code></strong> to open up the directory to where your projects have been transferred to.</p></li></ol><h2 id="setup-bridge-v2-with-your-transferred-projects" tabindex="-1">Setup bridge. v2 With Your Transferred Projects <a class="header-anchor" href="#setup-bridge-v2-with-your-transferred-projects" aria-hidden="true">#</a></h2><p>When you have opened bridge. v2, the first step of the setup process will ask you to select a projects folder to store your projects. If you have already migrated your projects over with bridge. v1, you need to select the same directory you chose in <strong>step 4</strong> above.</p>',11),n=[d];function s(c,h,l,p,u,g){return o(),t("div",null,n)}var v=e(a,[["render",s]]);export{f as __pageData,v as default};
