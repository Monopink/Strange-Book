---
weight: 10
title: "Git 笔记"
bookFlatSection: false
bookCollapseSection: true
bookHidden: true
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
git config user.name "xiaojia"
git config user.email "xiaojia@jd.com"
```