<!-- 常用工具笔记 -->

# utils.tool 工具类

### `检查浏览器版本 - getBroswerV`

```js
export function getBroswerV() {
  var sys = {};
  var ua = navigator.userAgent.toLowerCase();
  var s;
  (s = ua.match(/edge\/([\d.]+)/))
    ? (sys.edge = s[1])
    : (s = ua.match(/rv:([\d.]+)\) like gecko/))
    ? (sys.ie = s[1])
    : (s = ua.match(/msie ([\d.]+)/))
    ? (sys.ie = s[1])
    : (s = ua.match(/firefox\/([\d.]+)/))
    ? (sys.firefox = s[1])
    : (s = ua.match(/chrome\/([\d.]+)/))
    ? (sys.chrome = s[1])
    : (s = ua.match(/opera.([\d.]+)/))
    ? (sys.opera = s[1])
    : (s = ua.match(/360se\/([\d.]+)/))
    ? (sys.thsse = s[1])
    : (s = ua.match(/version\/([\d.]+).*safari/))
    ? (sys.safari = s[1])
    : 0;

  if (sys.edge) return { broswer: "Edge", version: sys.edge };
  if (sys.ie) return { broswer: "IE", version: sys.ie };
  if (sys.firefox) return { broswer: "Firefox", version: sys.firefox };
  if (sys.chrome) return { broswer: "Chrome", version: sys.chrome };
  if (sys.opera) return { broswer: "Opera", version: sys.opera };
  if (sys.safari) return { broswer: "Safari", version: sys.safari };
  if (sys.thsse) return { broswer: "360se", version: sys.thsse };

  return { broswer: "", version: "0" };
}
```

### `js将文本复制到剪切板`

```js
function copyToClipboard(textToCopy) {
  // navigator clipboard 需要https等安全上下文
  if (navigator.clipboard && window.isSecureContext) {
    // navigator clipboard 向剪贴板写文本
    return navigator.clipboard.writeText(textToCopy);
  } else {
    // 创建text area
    let box = document.getElementById("ocr_pic_container");
    let textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    console.log(box, textArea.value);
    // 使text area不在viewport，同时设置不可见
    textArea.style.position = "absolute";
    textArea.style.opacity = 0;
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    box.appendChild(textArea);
    textArea.focus();
    textArea.select();
    return new Promise((res, rej) => {
      // 执行复制命令并移除文本框
      document.execCommand("copy") ? res() : rej();
      textArea.remove();
    });
  }
},
```

### `简单的js鼠标跟踪`

```js
function startOnMouse() {
  // 创建简单的圆形区域跟踪鼠标
  const box = document.createElement("div");
  box.style.width = "100px";
  box.setAttribute("id", "moveMouseBox");
  box.style.height = "100px";
  box.style.border = "1px solid #bfbfbf";
  box.style.borderRadius = "50%";
  box.style.boxSizing = "border-box";
  box.style.position = "absolute";
  box.style.top = "-100px";
  box.style.left = "0px";
  const parent = document.getElementById("app");
  parent.appendChild(box);
  onmousemove = (event) => {
    const y = event.clientY - 50;
    const x = event.clientX - 50;
    box.style.top = y + "px";
    box.style.left = x + "px";
    this.point = {
      x: event.clientX,
      y: event.clientY,
    };
  };
}
```

### `上传文件 - 单文件上传`

```js
// 单文件上传
// otherKey object类型
function uploadFileComponents(file, fileKeyName, otherKey) {
  // 通过传入文件，以及所需要的参数对象进行文件处理。
  const form = new FormData();
  let flag = file.hasOwmProperty("raw");
  if (flag) {
    form.append(fileKeyName, file.raw);
  } else {
    return false;
  }
  for (const key in otherKey) {
    form.append(key, otherKey[key]);
  }
  return form;
}
```

### base64 去背景色

```js
// * dataimg      base64编码图片
// * callback      回调函数
changeImage(dataImg, callback) {
  let self = this;
  var base64Img = documencreateElement("base64Img"),
    canvas = document.createEleme("canvas"),
    context = canvas.getConte("2d");
  // 创建新图片
  var img = new Image();
  img.src = dataImg;
  img.addEventListener(
    "load",
    function () {
      // 绘制图片到canvas上
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0)
      // 将canvas的透明背景设置色
      var imageData = contexgetImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );
      for (var i = 0; i imageData.data.length; i +4) {
        //rgb大于250的透明度y均成0
        if (
          imageData.data[i] 250 &&
          imageData.data[i + 1] 250 &&
          imageData.data[i + 2] 250
        ) {
          imageData.data[i + 3] 0;
        }
      }
      context.putImageDa(imageData, 0, 0);
      self.baseImg = canvatoDataURL("image/png"); /回base64
      if (typeof callback !=undefined) {
        if (callback) callba(self.baseImg);
      }
    },
    false
  );
},

// 调用

changeImage(base64Data,(res)=>{
  console.log('修改后base64数据',res);
})
```

### formData预览数据结构

```js
const form = new FormData();
form.append('key1',1111);
form.append('key2',2222);
const data = {};
for (const [key, value] of form.entries()) {
   data[key] = value;
}
console.log(data);

```
