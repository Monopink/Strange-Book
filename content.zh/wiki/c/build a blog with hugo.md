---
weight: 10
title: "使用 Hugo 搭建个人博客"
bookHidden: false
---

# 使用 Hugo 搭建个人博客

## 你将会获得

一个轻巧、漂亮、自定义而且容易部署的静态网页博客；依托于 Github Pages 服务，整个过程完全免费。 适用于 Windows、Linux、FreeBSD 和 macOS。

博客的网页（文章内容）使用 `Markdown` 语法撰写生成，在一般情况下网站的每次生成部署，都需要一台已经做好环境配置和相关准备的电脑。也可以利用 Github Actions 达到只需一个浏览器、随写随更新的效果。

## 关于 Hugo

Hugo 是由 Go 语言实现的静态网站生成器，简单、易用、高效、易扩展、快速部署。

Hugo 不仅仅可以用来搭建博客，还有可以搭建公司主页、个人简历、项目文档等等非常多类别的主题（Themes，我习惯称之为主题）。你也可以编写或修改主题来搭建自己想要的网站。

[Hugo 主页](https://gohugo.io/)

[Hugo Documentation](https://gohugo.io/documentation/)

[Hugo 中文文档](https://www.gohugo.org/)

## 准备

### Git

过程中需要用到 Git 环境，也可以用 GitHub Desktop。本文以 Git 为例。

### Github

注册一个 Github 帐号。

### 确定主题（Themes）

与 Hexo（另一个静态网页生成工具） 不同的是，Hugo 没有附带默认主题，需要另外加入主题否则无法生成网站。在以下网站或通过搜索引擎、Github 找到一个你喜欢的主题。

[Hugo Themes](https://themes.gohugo.io/)

[Hugo 皮肤列表](https://themes.gohugo.io/)

你可以通过主题作者已经搭建好的 Demo 页面（如果有的话）提前体验到成品效果。

**如果你想尽可能简单地搭建好网站的话，在选择之初就应检查主题各项功能是否满足你的需要**，例如：

- 是否为响应式
- 是否对 SEO 友好
- 是否具备暗色模式
- 是否具备多语言支持
- 文章列表是否具备摘要
- 内容排版、字体是否是你想要的
- 是否支持你需要的评论系统、网站分析系统、社交网站链接

等等，当然你也可以自己修改主题以达到目的。

同时也要仔细阅读一下主题的文档，有的主题有其他的依赖组件可能需要更多步骤，或者不是标准的 Hugo 主题本文不适用。

选好之后，将主题的文件或 Git 链接保存起来备用。

## 安装 Hugo

### 使用包管理工具安装

macOS 可以通过 Homebrew 进行安装

```shell
brew install hugo
```

Windows 可以通过 Scoop 安装

```shell
scoop install hugo
```

### 或手动下载安装

在 [Hugo Releases](https://github.com/gohugoio/hugo/releases) 下载最对应版本版本并安装。

Windows 需要将程序路径加入系统 `PATH`。

### 测试

输入以下命令确认 Hugo 已经成功安装。

```shell
hugo version
```

若输出相应版本信息则为成功安装。

## 创建一个网站

### 生成项目文件

在你的电脑里面选一个风水宝地，输入以下命令生成一个名为 `blog` 的网站项目。

```shell
hugo new site blog
```

Hugo 会在该目录下生成一个目录`blog`，进入该目录。

```shell
cd blog
```

将已经找好的主题文件解压放入 `blog/theme` 目录内，或通过 Git 克隆仓库。这里以一个名为 Paper 的主题为例，目录命名为 `hugo-paper`。

```shell
git clone https://github.com/nanxiaobei/hugo-paper themes/hugo-paper
```

部分主题会附带一个示例网站，存放在 `hugo-paper/exampleSite` 中。将这个目录中的内容拷贝到项目根目录 `blog` 中，覆盖原来的文件。

现在目录结构如下：

```shell
blog
├── archetypes
├── content       # 存放网站的内容
│   ├── homepage     # 存放网站的页面
│   ├── post         # 存放网站的文章
│   ├──_index.md
│   ├── about.md
│   └── archives.md
├── data
├── layouts
├── static
├── themes        # 存放主题文件
│   └── hugo-paper   # Paper 主题文件
├── config.toml   # 网站配置文件
└── ...
```

编辑配置文件 `blog/config.toml` 确保主题被选用：

```toml
theme = "hugo-paper"
```

`theme` 的值要和主题目录名一致。

此时 Hugo 网站文件就已经准备就绪了。

### 启动网站

在 `blog` 目录下输入命令：

```shell
hugo server
```

看到输出有这样的信息的时候，就说明网站已经成功启动。

```shell
...
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```

Hugo 默认部署在 1313 端口，如果该端口被占用，则会部署在其他端口。

在浏览器输入地址 `http://localhost:1313/ ` 就可以看到网站了。

## 写一篇文章

以 Paper 主题为例，网站的文章存储在 `blog/content/post` 中，不同主题可能稍有不同；现在这里面已经有了一些主题作者存放的用于展示主题的示例文章，将其删除。

新建一个 `my-diary.md` 文件，或输入以下命令：

```shell
hugo new post/my-diary.md
```

打开文件，如果是 Hugo 帮你创建的话文件已经自动添加了一些元数据，也可以自己手动添加：

```yaml
---
title: "my-diary"
date: 2021-01-01T00:00:01+08:00
draft: true
---
```

你也可以添加更多的内容丰富这篇文章：

```yaml
---
title: "我的日记"
date: 2021-01-01T00:00:01+08:00
draft: false
description: "我的春游日记"
keywords: 
  - "春游"
tags: 
  - "鸡爪"
  - "火腿肠"
categories: 
  - "日记"
author: "Dangel"
---

文章内容
```

其中 `draft` 代表草稿，自动生成时默认为 `true` 值，表示启动和部署网站时不会包含这篇文章（除非你使用 `hugo server -D` 命令启动），`false` 值或没有这一项则会正常显示。

保存文件后，网站内容会自动更新。

## 部署网站

### 新建 Github 仓库

在 Github 中新建一个名为 `<你的用户名>.github.io` 的仓库，用于存放网页文件。

这里假设用户名为 `smilonely` 部署好后网站的链接为 `smilonely.github.io`。

如果这个仓库你已经使用或者你不想使用，你可以自定义一个仓库名字，假设为 `my-blog` ，那么你需要推送到这个仓库的 `gh-pages` 分支，网站链接为 `smilonely.github.io/my-blog`。

### 生成网站文件

在生成之前先完善好配置文件 `blog/config.toml`：

```toml
baseURL = "https://smilonely.github.io/"
# 网站链接

title = "Jianghu Wiki"
# 网站标题

author = "Dangel"
# 文章作者，若文章没有定义以此显示

copyright = "Copyright © 2021 Jianghu Wiki."
# 版权信息

theme = "hugo-paper"
# 主题
```

除上面这些之外，其他的配置项不同主题各不相同，按具体情况来修改。

完善好后输入命令：

```shell
Hugo
```

网站文件会生成在 `blog/public` 中。

打开主页文件 `blog/public/index.html` 看一看效果是否正常，如果出现丢失样式等问题则需要修改该文件 CSS 和 JS 文件引用位置。

在 `blog/public/index.html` 中查找 `css`，将查找结果：

```html
<link rel="stylesheet" href="/sass/main.xxx.css">
```

更改为：

```html
<link rel="stylesheet" href="./sass/main.xxx.css">
```

JS 文件同理，保存后检查网页是否恢复正常。

*这个问题我还没找出原因，找到之后我会更新这个地方。*

### 推送到 Github

进入 `public` 目录，将这个目录下文件推送到你的 Github 仓库。

```shell
cd public
git init
git remote add origin https://smilonely.github.io/
git add .
git commit -m "First commit"
git push -u origin main
```

注意将链接替换为你的仓库链接。

待推送完成后，在浏览器输入链接即可访问你的网站。

### 更新网站

在给网站加入了新的改动之后，再一次生成网站文件，并同步到仓库，这样你的网站就会更新这些变化。

```shell
Hugo
cd public
git add .
git status
git commit -m "Update blog"
git push
```

现在你有自己的博客啦。

## 完成？这只是开始

享受创作吧，不要让你的博客荒废😎。