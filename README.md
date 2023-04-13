# 插件名：plugin-vscode-markdown-add-syntax-mark

## 简介
Add specified symbols to the text specified within the selected content

将指定的符号添加到所选内容中指定的文本中

## 演示
添加引号到英文中

```js
// '演示中文 v-model' -> '演示 `v-model`'
```

## 使用
选择一段文本后，呼出指令面板，`ctrl+shift+p`，然后选择`Markdown-add-syntax-mark`

<img width="591" alt="image" src="https://user-images.githubusercontent.com/96854855/231761814-d1b8d487-d48c-4e03-98b8-cc742e543c78.png">


## 插件配置
`RegexSetting`

控制**匹配的字符串**

**默认情况下，该参数为匹配英文**。

`AddMark`

控制**添加到匹配的字符中的符号**

**默认情况下，该参数为 ` 引号**。

## 其他
为了使用该插件，需要运行在VSCode1.69.0或更高版本。

如果您想为该插件做出贡献或提供有关此插件的反馈，请访问GitHub页面：https://github.com/winchesHe/plugin-vscode-markdown-add-syntax-mark ，感谢您的使用。
