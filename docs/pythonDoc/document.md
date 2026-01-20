## 安装并激活虚拟系统

安装uv

激活 虚拟系统

### 安装uv

[uv中文网](https://uv.doczh.com/getting-started/installation/)

```powershell
# pip安装uv
pip install uv
# 检查是否安装成功
uv --version
# 成功则会输出版本号

# uv创建虚拟环境，进入项目文件夹，打开powershell
uv venv .venv
# 激活虚拟环境 - powershell下的激活命令
.venv\Scripts\activate
# 激活虚拟环境 - bash下的激活命令
source .venv/Scripts/activate

# 激活成功后命令提示符会改变
(.venv) PS C:\path\to\your\my-project>
```

### 安装fastapi

[fastapi](https://fastapi.org.cn/tutorial/#install-fastapi)

```powershell
# 接着在下面输入
pip install "fastapi[standard]"
# 创建一个main.py文件
# 输入以下内容
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}
    
# 保存完毕之后黑窗口执行
fastapi dev main.py
```

