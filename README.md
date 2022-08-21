# vscode-cloud-snippets

vscode插件，支持从服务端获取代码片段提示，在js文件和ts文件代码编辑时，输入@@xxx的时候，就会触发提示

```javascript
@@antd:select
```

使用antd:select去服务端获取对应的代码片段，返回的数据是数组，包含多个提示

[![vscode-cutpic.png](/Users/haha/Downloads/vscode-cutpic.png)](https://postimg.cc/HVD07M1p)

会记录选择的代码片段情况，然后在关闭任一文件的时候进行上报，便于服务端进行更合理的关键字匹配，返回更合适的结果

## 改造

需提供自己的服务端逻辑，直接改request.ts里的请求接口即可，目前使用的mock接口

```json5
{
    "code": 0,
    "data": [
        {
           "prefix": "antf:select",
           "body": "import React from 'react';\nconst App = () => {\n   return (<div>hello world</div>)\n}",
           "description": "Code snippet for react function component"
        },
        {
           "prefix": "antd:input",
           "body": "import Vue from 'vue';\nconst App = () => {\n   return (<div>hello world</div>)\n}",
           "description": "Code snippet for react function component"
        }
    ]
}
```

## 开发

```javascript
npm run watch
```
