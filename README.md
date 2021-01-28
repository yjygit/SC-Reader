# redofd 版式软件WEB阅读器



### 介绍
redofd是一款可运行在PC、微信、QQ、支付宝、小程序浏览器的OFD阅读器（IE不支持），文档渲染完美符合《GBT 33190-2016 电子文件存储与交换格式版式文档》规范，可加载本地磁盘、远端URL和业务侧服务端文件，服务端模式支持加密传输,文件不落地，轻松实现各种场景的OFD文档阅读赋能。


### 特点

- 单包融合
- 无插件
- 前端渲染
- 简洁SDK
- Retina屏支持
- 前后端文件支持

### 能力清单

- 缩略图
- 大纲
- 语义树
- 注释
- 书签
- 图层
- 电子印章
- 验签
- 多文档
- 附件
- 元数据导出
- 打印


### 安装教程

1.  引用主包

    `<script src="./SCOFDReader.umd.min.js"></script>`

2.  实例化阅读器，指定渲染容器

    `<div id="ofdview">我是渲染容器</div>`

3.  初始化

```
    let containerID="#ofdview";

    //创建一个阅读器

    let ofd = new SCOFDReader(containerID,'1234567',{options});

    //文件在服务器可设置服务端地址，本地阅读无需设置

    ofd.setFileServURL("http://ip:port/fs/");

```
### 初始化可选配置
```
  * @param {Object} options 配置项 
  * {
  *    //默认配置项
  *    ratio: 2,               //默认渲染倍率
  *    scale: 1,               //默认缩放比,
  *    rotate: 0,
  *    showTools: true,        //显示顶部工具栏 (全局)
  *    showState: true,        //显示状态栏 (全局)
  *    showOpenFile: false,    //无已打开文档时显示打开文件选项
  *    showContextMenu: true,  //显示右键菜单
  *    showDocListBar: true,   //在无打开文档的情况下也显示文件列表工具条
  *    size: {                 //阅读器工作区大小
  *       width: '100%',
  *       height: '100%'
  *    },
  *    mode:{
  *       view: 1,            //显示模式 {1:单页, 2:双页}
  *       scroll: 2,          //翻页模式 {1:单页, 2:连续}
  *       mouse: 1,           //鼠标样式 {1:默认, 2:抓手}
  *    },
  *    visibleOffset: 50,      //判定显示区域的偏移量(单位px)
  *    hclass: void 0,         //页面高亮层class名称
  * }
  * @return {void}
  */
```

 **[在线体验](http://screader.scofd.com/home/pc/demo1.html)** 

上述工具如在使用中遇到问题，请加下方官方QQ群反馈，谢谢。

![avatar](QQ群二维码.png)

Copyright © 2021 youhong All Rights Reserved. [**友虹（北京）科技有限公司**](http://www.scofd.com/) 版权所有