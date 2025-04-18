<!--  -->

# Promise

## 方法

> Promise.all()
>
> Promise.race()
>
> Promise.allSettled()

### .all 方法

Promise.all(promises)

.all 方法可以将需要执行的多个 promise 封装成一个 promise 对象，通过`.all`方法处理

```js
let promises = [promise1, promise2, promise3];
Promise.all(promises);
```

同时也可以使用 promise 搭配的`.then`方法来进行下一步操作

```js
let promises = [promise1, promise2, promise3];
Promise.all(promises).then((resArr) => {
  assert.deepEqual(arr, [promise1, promise2, promise3]);
});
```

同时也可以使用 catch 来捕获错误信息

```js
let promises = [promise1, promise2, promise3];
Promise.all(promises)
  .then((resArr) => {
    // 事实上，arr表示promise方法，[]数组中是对应方法的参数。 - Api
    // 使用assert.deepEqual()方法进行递归调用赋值 - 参数
    assert.deepEqual(arr, [promise1, promise2, promise3]);
  })
  .catch((err) => {
    assert.equal(err, "ERROR");
  });
```

# fetch请求封装 - SSE请求

```js
// 封装fetch请求
export default class EventStreamRequest {
  constructor(url, options = {}) {
    this.url = url;
    this.options = options;
    this.controller = new AbortController();
    this.signal = this.controller.signal;
    this.isListening = false; // 新增的状态标志
    this.retryInterval = this.options.retryInterval || 3000; // 默认重试间隔为3秒
  }
  async start() {
    if (this.isListening) return; // 如果已经在监听，则不再启动新的监听
    this.isListening = true;
    const attemptConnect = async () => {
      try {
        const response = await fetch(this.url, {
          method: 'POST',
          responseType:'text/event-stream; charset=utf-8',
          headers: {
            'Content-Type': 'application/json',
            // ...this.options.headers,
          },
          signal: this.signal,
          body: JSON.stringify(this.options.data)
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch event stream with status ${response.status}`);
        }

        this.processStream(response.body.getReader());
      } catch (error) {
        this.handleError(error);
        // setTimeout(attemptConnect, this.retryInterval); // 错误发生后尝试重新连接
      }
    };

    attemptConnect(); // 尝试连接
  }

  processStream(reader) {
    const decoder = new TextDecoder();
    let buffer = '';

    const processChunk = async ({ done, value }) => {
      if (done) {
        this.isListening = false; // 流结束时更新状态标志
        return;
      }

      buffer += decoder.decode(value, { stream: true });

      let index;
      while ((index = buffer.indexOf('\n\n')) !== -1) {
        const eventData = buffer.slice(0, index).trim();
        buffer = buffer.slice(index + 2);
        this.handleEvent(eventData);
      }

      reader.read().then(processChunk);
    };

    reader.read().then(processChunk);
  }

  handleEvent(eventData) {
    // console.log('Received event:', eventData);
    // 可以在这里调用外部传入的处理器
    if (typeof this.options.onEvent === 'function') {
      this.options.onEvent(eventData);
    }
  }

  handleError(error) {
    console.error('EventStream error:', error);
    if (typeof this.options.onError === 'function') {
      this.options.onError(error);
    }
  }

  abort() {
    if (this.isListening) {
      this.controller.abort();
      this.isListening = false;
      console.log('EventStream request aborted');
    }
  }
}
```
