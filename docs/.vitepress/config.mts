import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default {
  title: "bxb",
  description: "A VitePress Site",
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '../temp/binfor-icon.png' }]],
  /** 打包项目的根目录 */
  base: '/bxb/',
  // 打包目录
  outDir: '../dist',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern: "https://github.com/BinXb/bxb/",
      text: "在github上编辑",
    },
    search: {
      provider: 'local', // 开启站内搜索 - 这里的搜索不是根据内容，而是根据标题进行搜索匹配
    },
    outline: {
      level: "deep", // 显示2-6级标题
      label: '大纲' // 文字显示
    },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '文档',
        items: [
          { text: 'markdown', link: '/markdown-examples' },
          { text: '笔记', link: '/notes/casual_literary_notes' },
          { text: '二维地图', link: '/ArcGisViews/arcgisforjsApi' },
          { text: '三维地图', link: '/CesiumApis/initEarthApi' },
          { text: 'CPP', link: '/cppDocs/1.start' },
        ]
      }
    ],
    sidebar: {
      "/": [
        {
          text: '指引',
          collapsed: true,// 侧边栏折叠开启
          items: [
            { text: 'Markdown基础用法', link: '/markdown-examples' },
            { text: 'vitePress基础配置', link: '/api-examples' }
          ]
        },
      ],
      "/ArcGisViews/": [
        {
          text: 'ArcGis for javascript Api',
          collapsed: true,
          items: [
            { text: '开始创建', link: '/ArcGisViews/arcgisforjsApi' },
            { text: '画点', link: '/ArcGisViews/drawPointApi' },
            { text: '画线', link: '/ArcGisViews/drawLineApi' },
            { text: '画面', link: '/ArcGisViews/drawPolygonApi' },
            { text: '测距', link: '/ArcGisViews/measureDistanceApi' },
            { text: '测面', link: '/ArcGisViews/measureAreaApi' },
            { text: '创建图例', link: '/ArcGisViews/createLegendApi' },
            { text: 'query查询', link: '/ArcGisViews/useQueryApi' },
            { text: 'identify查询', link: '/ArcGisViews/useIdentifyApi' },
            { text: 'find查询', link: '/ArcGisViews/useFindApi' },
            { text: '定位', link: '/ArcGisViews/locationApi' },
          ]
        },
        {
          text: 'mapbox Api',
          collapsed: true,
          items: [
            { text: 'GisBox文档', link: '/ArcGisViews/mapboxApi' },
          ]
        },
      ],
      "/CesiumApis/": [
        {
          text: 'CesiumAPI',
          collapsed: true,
          items: [
            { text: '创建地球', link: "/CesiumApis/initEarthApi" },
            { text: '绘制事件', link: "/CesiumApis/drawEventApi" },
            { text: '图层服务', link: "/CesiumApis/dataLayerApi" },
            { text: '静态对象', link: "/CesiumApis/createObjApi" },
            { text: '动态对象', link: "/CesiumApis/flowApi" },
            { text: '测量工具', link: "/CesiumApis/measureApi" },
            { text: '地球工具', link: "/CesiumApis/usesetApi" },
            { text: '粒子特效', link: "/CesiumApis/specialEffectsApi" },
            { text: '飞行动画', link: "/CesiumApis/pathFlyApi" },
            { text: '漫游控制', link: "/CesiumApis/animationControlApi" },
            { text: '底图切换', link: "/CesiumApis/changeMapLayerApi" },
            { text: '三维工具', link: "/CesiumApis/toolsApi" },
            { text: '视点定位', link: "/CesiumApis/viewPointApi" },
          ]
        },
      ],
      "/notes/": [
        {
          text: '笔记',
          collapsed: true,
          items: [
            { text: '随笔', link: '/notes/casual_literary_notes.md' },
            { text: '瀑布流', link: '/notes/grid_water.md' },
            { text: 'AES加密', link: '/notes/AES加密.md' },
            { text: 'js常用工具类', link: '/notes/utils.md' },
            { text: 'Promise', link: "/notes/promise.md" },
          ]
        },
      ],
      "/cppDocs/": [
        {
          text: 'C Plus Plus',
          collapsed: true,
          items: [
            { text: '变量和赋值', link: "/cppDocs/1.start.md" },
          ]
        },
      ]
    },
    //  [
    //   {
    //     text: '爪哇(Java)',
    //     collapsed: true,
    //     items: [
    //       { text: 'java快速入门', link: "/javaDocs/1.start" },
    //     ]
    //   },
    //   {
    //     text: 'C Plus Plus',
    //     collapsed: true,
    //     items: [
    //       { text: '变量和赋值', link: "/cppDocs/1.start.md" },
    //     ]
    //   },
    //   {
    //     text: 'Promise',
    //     link: "/promise.md"
    //   },
    //   {
    //     text: '笔记',
    //     collapsed: true,
    //     items: [
    //       { text: '随笔', link: '/notes/casual_literary_notes.md' },
    //       { text: '瀑布流', link: '/notes/grid_water.md' },
    //       { text: 'AES加密', link: '/notes/AES加密.md' },
    //       { text: 'js常用工具类', link: '/notes/utils.md' },
    //     ]
    //   },
    // ],
    docFooter: {
      prev: '上一页', // 可以随意配置喜欢的
      next: '下一页',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      {
        icon: { svg: '<svg t="1721873612374" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4678" width="200" height="200"><path d="M955.553641 256.006573C814.321892 11.381953 500.438611-72.672082 255.87224 68.524717s-328.527207 454.940282-187.272158 699.564903 454.905332 328.527207 699.355204 187.400307 328.678656-454.905332 187.598355-699.483354z m15.144872 302.046982c-34.774954-0.128149-71.530392 3.49497-109.36927 10.787809-15.028372-60.323187-38.887369-121.916213-70.65665-181.738455l135.022352-77.961137a459.798291 459.798291 0 0 1 45.061817 248.911783z m-661.947372 107.342188l197.244473-113.877782 74.338018 128.766355c-59.868841 36.41759-114.169029 78.625182-160.01139 123.850097-40.110609-38.992218-78.217435-85.789871-111.571101-138.73867z m412.907439-296.128832l-196.289181 113.330236-83.681239-144.924768c58.529102-36.301091 111.559452-78.147536 156.364971-122.918105 44.782219 42.522138 87.234458 94.783594 123.605449 154.512637z m-304.982757-74.920514L305.058122 101.016291c71.285744-24.196844 165.766441 8.387929 255.330879 80.687214-41.14745 40.809603-89.867336 79.126127-143.713178 112.642892z m-156.108673-167.944972l111.839049 193.749503c-56.175822 30.63924-114.169029 54.381738-170.5196 70.260553-18.395194-115.147621 0.943642-214.474677 58.668901-264.010056z m136.851387 237.052185l83.576389 144.761669-197.54737 114.052531c-33.248817-60.835783-57.154414-123.162753-71.635241-182.740347 61.616326-17.067105 124.71219-42.778436 185.606222-76.073853zM605.404218 723.691847l114.844724 198.910409c-73.009929 25.629782-170.764248-8.842275-262.635367-84.962728 42.30079-41.380448 92.418664-80.186268 147.790643-113.947681z m159.056098 173.047629L649.88354 698.283413c56.700068-30.289742 114.972873-53.589544 171.486542-68.827615 19.408735 116.172812 0.675694 216.804657-56.909766 267.283678zM624.812953 654.829283l-74.454517-128.964404 195.962984-113.132188c29.474249 55.919525 51.108115 112.86424 64.7851 167.595475-61.639626 16.47296-124.980137 41.671696-186.293567 74.501117z m276.5104-389.281441l-135.3369 78.100936c-38.444673-63.51526-83.657939-120.075529-132.727321-166.675133a581.702854 581.702854 0 0 0 63.235662-87.374257 460.497285 460.497285 0 0 1 204.828559 175.948454zM648.69525 71.681841a535.895444 535.895444 0 0 1-52.93715 72.229385 560.651483 560.651483 0 0 0-71.938138-50.094574c-28.600507-16.671008-56.804917-29.299501-84.217134-37.862178a462.501068 462.501068 0 0 1 209.092422 15.727367z m-494.223748 147.953742c-12.348895 53.671094-13.152738 116.196112-2.32998 182.903445a547.032749 547.032749 0 0 1-90.496431 10.881007 462.26807 462.26807 0 0 1 92.826411-193.807752zM53.59501 463.829157a592.595512 592.595512 0 0 0 108.425628-12.325596c15.424469 64.144355 41.077551 130.909937 77.017495 196.394031L103.980831 725.893679a460.625434 460.625434 0 0 1-50.385821-262.064522z m75.945704 305.029356l134.801004-77.832988c36.056443 57.58546 77.180594 108.15768 120.774523 150.283722-25.711331 29.194652-47.846143 59.332946-65.705441 89.622688a459.93809 459.93809 0 0 1-189.870086-162.073422z m237.226933 180.818113a539.483613 539.483613 0 0 1 55.628277-74.943813c53.729343 44.67737 109.963415 76.563149 164.182054 93.140958a462.326319 462.326319 0 0 1-219.810331-18.197145z m503.928116-146.683903c6.337546-28.099561 9.541269-58.936849 9.40147-92.162366a565.614341 565.614341 0 0 0-8.399579-92.93126 528.06671 528.06671 0 0 1 91.253675-9.517969 462.687466 462.687466 0 0 1-92.255566 194.611595z" fill="#FF0000" p-id="4679"><title>ArcGis</title></path></svg>' },
        link: 'https://developers.arcgis.com/javascript/3/jsapi/'
      },
      {
        icon: { svg: '<svg t="1731480969712" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4278" width="32" height="32"><path d="M244.3776 628.84l13.66-9.332v32.516h48.53V277.174l-47.498 1.356 0.032 269.682c-51.02 124.32-240.864 77.694-215.888-67.324 18.32-71.47 100.92-114.766 182.566-61.414 0.194-0.388 6.07-38.812 6.07-38.812 0.776-3.23-1.518-4.94-14.08-10.85-123.594-48.32-242.162 45.6-213.4 177.432 16 83.64 140.16 154.326 240.008 81.596z m406.526-283.148h38.036v-58.96h-38.036v58.96z m-41.816 367.842c0 2.294 22.83 33.486 24.348 33.292 4.196-0.194 33.678-41.848 42.976-60.48 13.304-26.638 12.56-16.176 12.174-177.042l-0.58-145.498-37.102 1.1v138.262c0 151.954 0.194 148.532-11.592 171.942-9.248 19.072-27.566 32.728-30.224 38.424z m-193.624-413.66c-3.018 0.732-1.34 14.432-1.34 14.432l128.384 0.97s1.904-10.818 1.518-12.722c-0.58-3.23-4.36-3.424-63.32-3.81-34.614-0.388-63.918 0.194-65.24 1.13z m6.628 305.312c-75.176-43.084-75.176-151.378 0-194.46s169.654 11.062 169.654 97.23-94.48 140.314-169.654 97.23z m208.25-97.966c0-116.034-127.342-188.95-228.666-130.932s-101.324 203.848 0 261.864c101.324 58.02 228.666-14.898 228.666-130.932z m178.796-207.346c-3.02 0.732-1.34 14.432-1.34 14.432l128.384 0.97s1.904-10.818 1.516-12.722c-0.58-3.23-4.36-3.424-63.32-3.81-34.614-0.388-63.916 0.194-65.24 1.13z m6.628 305.312c-75.176-43.084-75.176-151.378 0-194.46s169.654 11.062 169.654 97.23-94.48 140.314-169.654 97.23zM1024.0156 507.22c0-116.034-127.342-188.95-228.666-130.932s-101.324 203.848 0 261.864C896.6736 696.172 1024.0156 623.254 1024.0156 507.22z" fill="#F54A3C" p-id="4279"></path></svg>' },
        link: 'https://dojotoolkit.org/api/'
      },
      {
        icon: { svg: '<svg t="1723794303407" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4279" width="200" height="200"><path d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m202.538667 531.285334c81.066667-81.066667 78.208-215.978667-6.741334-300.416-84.906667-84.48-219.306667-87.850667-300.416-6.741334-146.389333 146.346667-99.370667 406.528-99.370666 406.528s260.608 46.506667 406.528-99.370666z m-153.6-281.216l41.770666 85.888 85.930667 41.770666-85.930667 41.728-41.770666 85.930667-41.728-85.930667-85.930667-41.728 85.930667-41.770666 41.728-85.888z" p-id="4280"></path></svg>' },
        link: "https://docs.mapbox.com/mapbox-gl-js/guides/"
      },
      {
        icon: { svg: '<svg t="1723794376797" class="icon" viewBox="0 0 1137 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4422" width="200" height="200"><path d="M568.32 6.257778C288.995556 6.257778 62.577778 232.675556 62.577778 512s226.417778 505.742222 505.742222 505.742222 505.742222-226.417778 505.742222-505.742222c0-279.324444-226.417778-505.742222-505.742222-505.742222z m240.071111 629.76c-172.942222 172.942222-481.848889 117.76-481.848889 117.76s-55.751111-308.337778 117.76-481.848889C540.444444 175.786667 699.733333 179.768889 800.426667 279.893333s104.106667 259.982222 7.964444 356.124445z" fill="#4161F3" p-id="4423"></path><path d="M626.346667 302.648889l-49.493334 101.831111-101.831111 49.493333 101.831111 49.493334 49.493334 101.831111 49.493333-101.831111 101.831111-49.493334-101.831111-49.493333z" fill="#4161F3" p-id="4424"></path></svg>' },
        link: "https://www.naivemap.com/mapbox-gl-js-cookbook/"
      },
      {
        icon: { svg: '<svg t="1728463079566" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4442" width="200" height="200"><path d="M982.528 435.882667c-16.896 0-33.194667 9.386667-46.037333 26.325333l-161.066667 213.077333c-26.666667 35.285333-64.554667 55.509333-103.936 55.509334h-0.597333c-39.424 0-77.312-20.224-103.936-55.509334l-161.066667-213.077333c-12.8-16.938667-29.098667-26.325333-46.08-26.325333-16.853333 0-33.28 9.386667-45.994667 26.325333l-161.152 213.077333c-26.453333 34.986667-64 55.210667-102.997333 55.509334C131.754667 903.936 307.669333 1024 512 1024c282.752 0 512-229.205333 512-511.957333a512 512 0 0 0-3.669333-58.965334c-11.264-11.093333-24.32-17.194667-37.802667-17.194666M683.093333 325.077333a53.504 53.504 0 1 1 0-106.965333 53.504 53.504 0 0 1 0 106.965333M512.042667 0C229.248 0 0 229.162667 0 512.042667c0 44.970667 6.4 88.32 17.322667 129.962666 9.685333 7.466667 20.437333 11.776 31.445333 11.776 16.981333 0 33.28-9.301333 46.08-26.154666L256 414.464c26.581333-35.370667 64.554667-55.552 103.850667-55.552 39.338667 0 77.226667 20.181333 103.893333 55.552l155.008 204.928 6.656 8.234667c12.8 16.810667 29.056 26.026667 45.824 26.154666 16.725333-0.128 33.024-9.386667 45.738667-26.154666l6.826666-8.234667 154.965334-204.928c26.624-35.370667 64.512-55.552 103.808-55.552 6.272 0 12.544 0.682667 18.645333 1.621333C936.618667 151.722667 742.058667 0 512.042667 0" p-id="4443"></path></svg>' },
        link: "https://sandcastle.cesium.com/"
      },
    ]
  }
}
