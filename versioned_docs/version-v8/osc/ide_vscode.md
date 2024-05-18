---
sidebar_position: 5
---

# IDE 使用之 Visual Studio Code

<< 回到[上一步](./engineering.md#初始化系统) <!-- markup:skip-line -->

春松客服团队使用 [Visual Studio Code](https://code.visualstudio.com/) 作为集成开发环境，它因为更加智能而大幅提升了开发者的工作效率，相比于 IntelliJ IDEA, VSCode 免费并且有大量插件支持。本文使用 `Visual Studio Code` 介绍搭建过程。

## 视频教程

可使用视频《春松客服开发环境搭建之 VSCode + Docker》进行学习，完成本节任务。

* [bilibili](https://www.bilibili.com/video/BV168411d7de)
* [YouTube](https://www.youtube.com/watch?v=ps_YXIWRgbA)

## 安装插件

![Spring Boot Extension Pack](../images/products/ide_vscode_plugin.png)

## 配置环境变量

参照开发环境配置，通过 Profile 文件配置环境变量，并确保相关数据库已经启动。

## 运行

打开 `Spring Boot Dashboard` 工程（通过 Ctrl + Shift + P 打开），右键点击项目，选择 `Run with Profile`, 并勾选上一步设置的环境变量选项即可。

## 下一步

回到[开发环境搭建](./engineering.md#初始化系统)完成后续步骤。
