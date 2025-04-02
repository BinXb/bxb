# 对于前端使用ai框架探索

## semi-design-vue

> 来源蚂蚁框架

实现功能 - 

> sse格式输出
> 接收指定命令处理
> 思考过程可折叠 - 适配deepseek等模型
> 清除上下文
> 请求错误返回
> fetch请求封装

```jsx
import { Chat, MarkdownRender, Spin, Toast, Avatar, AvatarGroup, Tooltip, Space,Collapse } from '@kousum/semi-ui-vue';
import { defineComponent, ref, onMounted } from 'vue';
import { IconChevronUp } from '@kousum/semi-icons-vue';
import { getNewAgentSessionApi, sendMessageApi } from "../api/baseinfo";
import http from '../config/httpConfig';
import EventStreamRequest from '../config/httpFetch';
import { baseUrl } from '../config/baseUrl';

// 请求成功
const successMessage = {
  role: 'assistant',
  id: '1',
  createAt: 1715676751920,
  content: "请求成功"
};
// 等待中
const wattingMessage = {
  id: 'loading',
  role: 'assistant',
  status: 'loading'
};
// 请求失败
const errorMessage = {
  role: 'assistant',
  id: 'error',
  content: '请求错误',
  status: 'error'
};
const defaultMessage = [
  {
    role: 'assistant',
    id: '1',
    createAt: 1715676751919,
    content: ASSISTANT
  }
]
const roleInfo = ROLE_INFO;
const commonOuterStyle = {
  border: '1px solid var(--semi-color-border)',
  borderRadius: '16px',
  minHeight: '100%',
  height: '100%',
  margin: '0 auto',
  width: '100%',
  boxSizing: 'border-box'
};
let id = 0;
function getId() {
  return `id-${id++}`;
}
// 上传文件地址
const uploadProps = {
  action: 'https://api.semi.design/upload'
};

let post_message = ref('');// 指令输出结果
let post_switch = ref(true);//是指令输出还是问答输出
let post_think = ref(false); // 是否有思考过程


const CustomRender = defineComponent(() => {
  const sessionId = localStorage.getItem('chatSessionId');
  const intervalId = ref();
  const message = ref(defaultMessage);
  const onChatsChange = (chats) => {
    message.value = (chats);
  };
  const onMessageSend = async (content, attachment) => {
    message.value = [
      ...message.value,
      {
        role: 'assistant',
        status: 'loading',
        createAt: Date.now(),
        id: getId()
      }
    ];
    let data = {
      sessionId: sessionId,
      question: content
    };
    const form = new FormData();
    const eventStream = new EventStreamRequest(baseUrl + 'llm/chatStream', {
      data, onEvent: (eventData) => {
        if (eventData.indexOf("is running...") === -1) {
          // 判断是指令输出还是正常问答输出
          if (eventData.length >= 12) {
            // 预检查
            const regex = /^data:\{\"code\"/;
            const flag = regex.test(eventData);
            if (flag) {
              post_switch.value = true;
              // 指令输出
              let msg = eventData.slice(5);
              // let json = JSON.stringify(data);
              post_message.value = msg;
              
              const newAssistantMessage = {
                role: 'assistant',
                id: getId(),
                createAt: Date.now(),
                content: '问题检索完成',
              }
              message.value = [...message.value.slice(0, -1), newAssistantMessage]
            } else {
              const regexEnd = /^data:\[\{\{END\}\}\]/;
              const flagEnd = regexEnd.test(eventData);
              if (flagEnd) {
                if (post_switch.value){
                  // 指令抛出
                  window.parent.postMessage(post_message.value, '*');
                }else{
                  // 问答结束
                }
              }else{
                post_switch.value = false;
                post_message.value = "";
                // 问答输出
                // 空格换成 &sp;; ，换行换成&nl;;
                // 如果有思考过程 - 截取思考过程
                if (eventData.indexOf('<think>') > -1 && eventData.indexOf('</think>') === -1){
                  post_think.value = true;
                  let msgStr = eventData.replace(/&sp;;/g, ' ').replace(/&nl;;/g, '\n')
                  let msg = msgStr.slice(12);
                  if (msg.indexOf('</think>')> -1){
                    // 思考结束
                    let resultStr = msg.slice(msg.indexOf(0,'</think>'));
                    let msgStr = resultStr.replace(/&sp;;/g, ' ').replace(/&nl;;/g, '\n');
                    resultThinkResponse(msgStr, msgStr)
                  }else{
                    // 思考进行中
                    let resultStr = msg.slice(msg.indexOf('<think>') + 1);
                    let msgStr = resultStr.replace(/&sp;;/g, ' ').replace(/&nl;;/g, '\n');
                    resultThinkResponse(msgStr, msgStr)
                  }
                  // let msgStr = eventData.replace(/&sp;;/g, ' ').replace(/&nl;;/g, '<br/>').replace(/<think>/g,'');
                  // let msg = msgStr.slice(5);
                  // generateMockResponse(msg);
                } else if (eventData.indexOf('<think>') > -1 && eventData.indexOf('</think>') > -1){
                  // 思考过程之后的回答结果
                  let msgStr = eventData.replace(/&sp;;/g, ' ').replace(/&nl;;/g, '<br />');
                  let resultStr = msgStr.slice(msgStr.indexOf('</think>') + 8);
                  let thinkStr = msgStr.slice(12,msgStr.indexOf('</think>'));
                  // let msg = msgStr.slice(5);
                  // post_think.value = msg;
                  // resultThinkResponse(msg)
                  console.log(msgStr);
                  
                  resultThinkResponse(thinkStr, resultStr);
                }else{
                  post_think.value = false;
                  // 无思考过程返回值
                  let msgStr = eventData.replace(/&sp;;/g, ' ').replace(/&nl;;/g, '<br/>').replace(/<think>/g,'');
                  let msg = msgStr.slice(5);
                  generateMockResponse(msg);
                }
                
              }
            }
          }else{
            console.log(eventData);
          }
        }
      },onError:(error)=>{
        const newAssistantMessage = {
          role: 'assistant',
          id: getId(),
          createAt: Date.now(),
          status: 'error',
          content: ERROR_TEXT,
        }
        message.value = [...message.value.slice(0, -1), newAssistantMessage]
      }
    });
    eventStream.start();
  };
  // 输出think结果
  const resultThinkResponse = (think,content) => {
    let newMessage = {
      role: 'think',
      id: getId(),
      createAt: Date.now(),
      content: content,
      think: think,
      post_think:true,
    };
    message.value = [...message.value.slice(0, -1), newMessage];
    intervalId.current = id;
  };
  // 输出结果
  const generateMockResponse = (content) => {
    const lastMessage = message.value[message.value.length - 1];
    // console.log(content);
    let newMessage = {
      role: 'assistant',
      id: getId(),
      createAt: Date.now(),
      content: content,
    };
    // console.log(lastMessage);

    message.value = [...message.value.slice(0, -1), newMessage];
    intervalId.current = id;
  };
  // 清除上下文
  const clearContext = () => {
    getNewAgentSessionApi().then((result) => {
      localStorage.setItem('chatSessionId', result);
    }).catch((err) => {
      console.log(err);
    });
  };
  // 重新提问
  const onMessageReset = (msg) => {
    generateMockResponse(msg.content);
  };
  // 停止生成
  const onStopGenerator = (msg) => {
    console.log(msg);
    http.cancelRequest();
    Toast.success('已取消');
    const cancel = {
      role: 'assistant',
      id: 'cancel',
      content: '已取消',
      createAt: 1715676751920,
    }
    setTimeout(() => {
      message.value = [...message.value.slice(0, -1), cancel]
    }, 500)
  }
  // 助手和用户对话背景色
  const renderByRole = ({ role, status }) => {
    if (status === 'error'){
      return { backgroundColor: ERROR_BG_COLOR }//错误消息背景色
    }
    return role === 'assistant'
      ? { backgroundColor: ASSISTANT_BG_COLOR } // 助理消息背景色
      : { backgroundColor: USER_BG_COLOR }; // 用户消息背景色
  }
  // 对话渲染
  const renderContent = (props) => {
    const { role, message, defaultNode, className } = props;
    console.log(message.role, post_think.value);
    if (message.content) {
      return <div class={className} style={renderByRole(message)}>
        {message.post_think && message.post_think===true ?(
          <Collapse expandIconPosition="left">
            <Collapse.Panel header="思考" showArrow={true} itemKey={message.id}>
              <MarkdownRender raw={`<myThink>${message.think}</myThink>`} components={components} />
            </Collapse.Panel>
          </Collapse>
        ):''}
        <MarkdownRender raw={message.content} />
      </div>
    } else {
      return <div class={className}>
        <Spin />
      </div>
    }
  };
  const components = () => {
    const components = {};
    components['myThink'] = ({ children, onClick }) => {
      return <p style={{ marginBottom: "12px" }}> {children} </p>
    }
  }
  const handleBefore = (file)=>{
    console.log(file);

    return
  }
  onMounted(async () => {
    try {
      const result = await getNewAgentSessionApi();
      message.value = defaultMessage;
      localStorage.setItem('chatSessionId', result);
    } catch (err) {
      message.value = [errorMessage];
    }
  });
  return () => (
    <Chat
      style={commonOuterStyle}
      chats={message.value}
      roleConfig={roleInfo}
      chatBoxRenderConfig={{ renderChatBoxContent: renderContent }}
      onChatsChange={onChatsChange}
      onMessageSend={onMessageSend}
      onStopGenerator={onStopGenerator}
      showClearContext={true}
      onClear={clearContext}
      onMessageReset={onMessageReset}
      uploadProps={{ uploadProps: uploadProps, disabled:true }}
      uploadTipProps={{ content :'上传功能开发中...'} }
    />
  );
})
export default CustomRender;
```

**fetch请求封装**

```js
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
