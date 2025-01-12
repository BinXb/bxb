import{_ as i,c as a,a2 as n,o as l}from"./chunks/framework.Dz7_3PEu.js";const r=JSON.parse('{"title":"视点定位","description":"","frontmatter":{},"headers":[],"relativePath":"CesiumApis/viewPointApi.md","filePath":"CesiumApis/viewPointApi.md","lastUpdated":null}'),t={name:"CesiumApis/viewPointApi.md"};function p(h,s,e,k,E,d){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="视点定位" tabindex="-1">视点定位 <a class="header-anchor" href="#视点定位" aria-label="Permalink to &quot;视点定位&quot;">​</a></h1><h2 id="加载视点-init" tabindex="-1">加载视点 - init <a class="header-anchor" href="#加载视点-init" aria-label="Permalink to &quot;加载视点 - init&quot;">​</a></h2><p><code>获取视点列表中已有的视点</code></p><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.ViewPoint.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="新增视点-add" tabindex="-1">新增视点 - add <a class="header-anchor" href="#新增视点-add" aria-label="Permalink to &quot;新增视点 - add&quot;">​</a></h2><p>add(name,type)</p><blockquote><p>name - 视点名称</p><p>type - 视点类型（1.飞行视点、2.定位视点）</p></blockquote><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.Viewer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;视点1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="删除视点-del" tabindex="-1">删除视点 - del <a class="header-anchor" href="#删除视点-del" aria-label="Permalink to &quot;删除视点 - del&quot;">​</a></h2><p>del(name)</p><blockquote><p>name - 对应视点名称</p></blockquote><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.Viewer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">del</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;视点1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="上传视点到列表-jsonfileload" tabindex="-1">上传视点到列表 - jsonFileLoad <a class="header-anchor" href="#上传视点到列表-jsonfileload" aria-label="Permalink to &quot;上传视点到列表 - jsonFileLoad&quot;">​</a></h2><p>jsonFileLoad(data)</p><blockquote><p>data - 视点对应的数组</p></blockquote><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;视点一&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      x: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">142.554699</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      y: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5.648204</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      z: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2841488.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      heading: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">23.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      pitch: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">89.8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      roll: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.ViewPoint.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">jsonFileLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data);</span></span></code></pre></div><h2 id="下载视点列表-jsonfilesave" tabindex="-1">下载视点列表 - jsonFileSave <a class="header-anchor" href="#下载视点列表-jsonfilesave" aria-label="Permalink to &quot;下载视点列表 - jsonFileSave&quot;">​</a></h2><p>jsonFileSave(name)</p><blockquote><p>name - 为下载的文件命名</p></blockquote><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.ViewPoint.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">jsonFileSave</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;视点&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="设置视点位置-setview" tabindex="-1">设置视点位置 - setView <a class="header-anchor" href="#设置视点位置-setview" aria-label="Permalink to &quot;设置视点位置 - setView&quot;">​</a></h2><p>setView(point)</p><blockquote><p>point - 视点要切换到的位置</p></blockquote><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> point </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  x: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">142.554699</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  y: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5.648204</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  z: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2841488.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  heading: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">23.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pitch: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">89.8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  roll: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.ViewPoint.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setView</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(point);</span></span></code></pre></div><h2 id="视点定位-flyobj、flyto" tabindex="-1">视点定位 - flyObj、flyTo <a class="header-anchor" href="#视点定位-flyobj、flyto" aria-label="Permalink to &quot;视点定位 - flyObj、flyTo&quot;">​</a></h2><p>flyObj(obj,duration)</p><p>flyTo(point,duration)</p><blockquote><p>obj - 实体对象(模型、entity对象)</p><p>point - 视点坐标</p><p>duration - 定位所用的飞行时间</p></blockquote><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 可通过时间参数控制定位动画时长</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.ViewPoint.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">flyObj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalEarth.ViewPoint.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">flyTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(point,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,36)]))}const g=i(t,[["render",p]]);export{r as __pageData,g as default};
