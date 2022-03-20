---
weight: 10
title: "Git 笔记"
bookFlatSection: false
bookCollapseSection: false
bookHidden: false
---

# Git 笔记

## 给不同项目配置不同 Git 账号

给 Git 设置全局账号

```shell
git config --global user.name "Jianghu Wiki"
git config --global user.email "jianghu-wiki@lioil.com"
```

在某个项目下进行特殊设置

```shell
git config user.name "Jianghu Wiki 2"
git config user.email "jianghu-wiki-2@lioil.com"
```

查看该项目配置

```shell
git config --list
```

输出如下信息

```shell
...
user.name=Jianghu Wiki
user.email=jianghu-wiki@lioil.com
...
user.name=Jianghu Wiki 2
user.email=jianghu-wiki-2@lioil.com
...
```

有多个配置时将使用下面的配置