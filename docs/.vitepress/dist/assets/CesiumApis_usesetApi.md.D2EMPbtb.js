import{_ as i,c as a,a2 as e,o as t}from"./chunks/framework.Dz7_3PEu.js";const E=JSON.parse('{"title":"地球工具","description":"","frontmatter":{},"headers":[],"relativePath":"CesiumApis/usesetApi.md","filePath":"CesiumApis/usesetApi.md","lastUpdated":null}'),l={name:"CesiumApis/usesetApi.md"};function p(h,s,n,k,o,d){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="地球工具" tabindex="-1">地球工具 <a class="header-anchor" href="#地球工具" aria-label="Permalink to &quot;地球工具&quot;">​</a></h1><h2 id="雪天-setsnow" tabindex="-1">雪天 - setSnow <a class="header-anchor" href="#雪天-setsnow" aria-label="Permalink to &quot;雪天 - setSnow&quot;">​</a></h2><p>setSnow(flag,size,speed)</p><p>参数：</p><blockquote><p>flag</p><blockquote><p>类型：Boolean</p><p>说明：开启/关闭</p><p>默认值：</p></blockquote><p>size</p><blockquote><p>类型：Number</p><p>说明：大小</p><p>默认值：20</p></blockquote><p>speed</p><blockquote><p>类型：Number</p><p>说明：速度</p><p>默认值：210</p></blockquote></blockquote><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setSnow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//开启</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setSnow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//关闭</span></span></code></pre></div><h2 id="雨天-setran" tabindex="-1">雨天 - setRan <a class="header-anchor" href="#雨天-setran" aria-label="Permalink to &quot;雨天 - setRan&quot;">​</a></h2><p>setRan(flag,inc,size,apeed)</p><blockquote><p>flag</p><blockquote><p>类型：Boolean</p><p>说明：是否开启</p><p>默认值：</p></blockquote><p>inc</p><blockquote><p>类型：Number</p><p>说明：倾斜角度</p><p>默认值：-0.6</p></blockquote><p>size</p><blockquote><p>类型：Number</p><p>说明：大小</p><p>默认值：0.6</p></blockquote><p>speed</p><blockquote><p>类型：Number</p><p>说明：速度</p><p>默认值：120.0</p></blockquote></blockquote><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setRan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//开启</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setRan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//关闭</span></span></code></pre></div><h2 id="雾天-setfog" tabindex="-1">雾天 - setFog <a class="header-anchor" href="#雾天-setfog" aria-label="Permalink to &quot;雾天 - setFog&quot;">​</a></h2><p>setFog(flag,alpha)</p><blockquote><p>flag</p><blockquote><p>类型：Boolean</p><p>说明：是否开启</p><p>默认值：</p></blockquote><p>alpha</p><blockquote><p>类型：Number</p><p>说明：烟雾浓度</p><p>默认值：0.4</p></blockquote></blockquote><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setFog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//开启</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setFog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//关闭</span></span></code></pre></div><h2 id="阴影-setshadows" tabindex="-1">阴影 - setShadows <a class="header-anchor" href="#阴影-setshadows" aria-label="Permalink to &quot;阴影 - setShadows&quot;">​</a></h2><p>setShadows(flag)</p><blockquote><p>flag</p><blockquote><p>类型：Boolean</p><p>说明：是否开启</p><p>默认值：</p></blockquote></blockquote><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setShadows</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//开启</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setShadows</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//关闭</span></span></code></pre></div><h2 id="深度-depthtest" tabindex="-1">深度 - depthTest <a class="header-anchor" href="#深度-depthtest" aria-label="Permalink to &quot;深度 - depthTest&quot;">​</a></h2><p>depthTest(flag)</p><blockquote><p>flag</p><blockquote><p>类型：Boolean</p><p>说明：是否开启</p><p>默认值：</p></blockquote></blockquote><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">depthTest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//开启</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">depthTest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//关闭</span></span></code></pre></div><h2 id="网格-terrainwireframe" tabindex="-1">网格 - terrainwireframe <a class="header-anchor" href="#网格-terrainwireframe" aria-label="Permalink to &quot;网格 - terrainwireframe&quot;">​</a></h2><p>terrainwireframe(flag)</p><blockquote><p>flag</p><blockquote><p>类型：Boolean</p><p>说明：是否开启</p><p>默认值：</p></blockquote></blockquote><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terrainwireframe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//开启</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terrainwireframe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//关闭</span></span></code></pre></div><h2 id="泛光-setbloom" tabindex="-1">泛光 - setBloom <a class="header-anchor" href="#泛光-setbloom" aria-label="Permalink to &quot;泛光 - setBloom&quot;">​</a></h2><p>setBloom(flag)</p><blockquote><p>flag</p><blockquote><p>类型：Boolean</p><p>说明：是否开启</p><p>默认值：</p></blockquote></blockquote><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setBloom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//开启</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setBloom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//关闭</span></span></code></pre></div><h2 id="抗锯齿-setfxaa" tabindex="-1">抗锯齿 - setFxaa <a class="header-anchor" href="#抗锯齿-setfxaa" aria-label="Permalink to &quot;抗锯齿 - setFxaa&quot;">​</a></h2><p>setFxaa(flag)</p><blockquote><p>flag</p><blockquote><p>类型：Boolean</p><p>说明：是否开启</p><p>默认值：</p></blockquote></blockquote><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setFxaa</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//开启</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setFxaa</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//关闭</span></span></code></pre></div><h2 id="地下-setunderground" tabindex="-1">地下 - setUnderground <a class="header-anchor" href="#地下-setunderground" aria-label="Permalink to &quot;地下 - setUnderground&quot;">​</a></h2><p>setUnderground(flag)</p><blockquote><p>flag</p><blockquote><p>类型：Boolean</p><p>说明：是否开启</p><p>默认值：</p></blockquote></blockquote><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setUnderground</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//开启</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setUnderground</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//关闭</span></span></code></pre></div><h2 id="显隐-globevisible" tabindex="-1">显隐 - globeVisible <a class="header-anchor" href="#显隐-globevisible" aria-label="Permalink to &quot;显隐 - globeVisible&quot;">​</a></h2><p>globeVisible(flag)</p><blockquote><p>flag</p><blockquote><p>类型：Boolean</p><p>说明：是否开启</p><p>默认值：</p></blockquote></blockquote><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">globeVisible</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//开启</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">globeVisible</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//关闭</span></span></code></pre></div><h2 id="透明度-setglobealpha" tabindex="-1">透明度 - setGlobeAlpha <a class="header-anchor" href="#透明度-setglobealpha" aria-label="Permalink to &quot;透明度 - setGlobeAlpha&quot;">​</a></h2><p>setGlobeAlpha(num)</p><blockquote><p>num</p><blockquote><p>类型：Number</p><p>说明：透明度</p><p>默认值：1</p></blockquote></blockquote><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setGlobeAlpha</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//开启</span></span></code></pre></div><h2 id="打印-exportviewer" tabindex="-1">打印 - exportViewer <a class="header-anchor" href="#打印-exportviewer" aria-label="Permalink to &quot;打印 - exportViewer&quot;">​</a></h2><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">exportViewer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="全屏-fullmap" tabindex="-1">全屏 - FullMap <a class="header-anchor" href="#全屏-fullmap" aria-label="Permalink to &quot;全屏 - FullMap&quot;">​</a></h2><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FullMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="模型隐藏-modelhideopen" tabindex="-1">模型隐藏 - modelHideOpen <a class="header-anchor" href="#模型隐藏-modelhideopen" aria-label="Permalink to &quot;模型隐藏 - modelHideOpen&quot;">​</a></h2><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">modelHideOpen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="模型显示-modelhideclose" tabindex="-1">模型显示 - modelHideClose <a class="header-anchor" href="#模型显示-modelhideclose" aria-label="Permalink to &quot;模型显示 - modelHideClose&quot;">​</a></h2><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.CommonUseSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">modelHideClose</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div>`,69)]))}const g=i(l,[["render",p]]);export{E as __pageData,g as default};
