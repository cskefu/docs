---
sidebar_position: 2
---

# 应用部署

春松客服适应各种部署方式，本文使用 Docker 和 Docker compose 的方式，适合体验、开发、测试和上线春松客服，此种方式简单快捷。

重要提示：部署应用后，必须按照《系统初始化》[^initdoc]文档进行系统初始化，再使用，不做初始化，会造成坐席无法分配等问题。

[^initdoc]: 系统初始化文档，https://docs.cskefu.com/docs/initialization/

## 准备条件

### 前提

| 项目                | 说明                                                          |
| ------------------- | ------------------------------------------------------------- |
| 操作系统            | Linux (CentOS 7.x, Ubuntu 16.04+ 等)，**推荐使用 Ubuntu LTS** |
| Docker 版本         | Docker version 1.13.x 及以上                                  |
| Docker Compose 版本 | version 1.23.x 及以上                                         |
| 防火墙端口          | 8035, 8036                                                    |
| 其他软件            | git                                                           |
| 内存                | 开发测试 >= 8GB \| 生产环境 >= 16GB                           |
| CPU 颗数            | 开发测试 >= 2 \| 生产环境 >= 4                                |
| 硬盘                | >= 20GB                                                       |

<!-- markup:table-caption 部署依赖资源的最低配置 -->

### 安全组

如果使用云主机，要考虑到不同云服务提供商的安全组设置，允许 8035 和 8036 端口下行。

## 克隆代码

```Bash
git clone -b develop https://github.com/cskefu/cskefu.git cskefu.develop
cd cskefu.develop
```

以上命令中，`develop` 代表开发中的大版本，当前是 [cskefu/cskefu](https://github.com/cskefu/cskefu) v8。

| 分支 | 说明 | 版本 |
| --- | --- | --- |
| master | 当前稳定版本 | v7.x | 
| develop | 当前开发版本 | v8.x |

克隆代码时，按照需要指定分支信息；本部署文档针对 v8.x。

