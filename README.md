# project-splitter-vscode-plugin

## 功能
分为VSCode 插件，webpack 插件，gulp 插件
### VSCode 插件功能
1. 可以看到当前在哪个工程下2
2. 可以切换到其他工程
3. 可以全局预览所有工程，或指定的多个工程
4. 在文件树上也会显示抽取后的文件
5  以文件为单位的切割内容中不能包含其他插值
6. 可以快速启动、禁用插件，启用状态下，只能查看抽取后的代码，禁用状态下，可以查看完整的代码源文件（包括代码插值符、和文件后缀插值符）

> 快速启/禁用是否需要把代码插值和后缀插值分开对待？？？

### webpack 插件功能

### gulp 插件工程



## 技术要点
1. 即使多个平台，实质上还是一套代码
2. 可以使用插值来区分多个工程代码，也可以用文件后缀的形式来区分工程代码
3. 在 Visual Studio Code 上以插件的方式来运行
4  而且还要创建一个 gulp,webpack 插件来做编译的前置处理，处理内容即使把指定平台的代码抽出来。
5. VS code 里面看到的即使抽取后的代码
6. gulp,webpack 插件的详情见其他工程


## 协议
###  右键菜单
  通过编辑器的邮件菜单可以插值，也可以手工编写插值符来插值。
  
### 插值符号
> 之前的代码
** 工程A **
``` javascript
     public void sayHello(){
      console.log("I'm project A");
     }
```

** 工程B **
``` javascript
    public void sayHello(){
      console.log("I'm project B");
    }
```

> 使用插值符号将片段合并为一个工程里
** 工程X **
``` javascript
    public void sayHello(){
      /** @split-for A */
      {
        console.log("I'm project A");
      }
      
      /** @split-for B */
      {
        console.log("I'm project B");
      }
    }
```
**注意**，插值符号下必须要跟随一对`{}`，告诉哪些代码是对应改插值符号的。

### 文件后缀

## API

### 插值符号
* @spt-for [CODE]
指定的代码片段只能应用于指定的平台,

**CODE**:指定平台的代码，多个代码以英文逗号分隔。如果该配置项为空，则针对所有平台，如果改配置项中包含一个不存在的平台代码，则会忽略。
> 平台代码需要在 `.editor-splitter.conf` 中配置，配置方法见后续文章


* @spt-else [CODE]
指定的代码片段只能应用于其他的平台


### 文件后缀
* xxx.`spt-for-[CODE]`.js
指定的文件只能应用于指定的平台

* xxx.`spt-else-[CODE]`.js
指定的文件只能应用于其他平台
