---
weight: 10
title: "Bitwarden 域名匹配"
bookFlatSection: false
bookCollapseSection: false
bookHidden: false
---

# Bitwarden 域名匹配

## 自定义 Domain Rules

> weiyun.com, androidapp://com.tencent.mobileqq

> wechat.com, androidapp://com.tencent.mm

> alipay.com, androidapp://com.alipay.mobile

> taobao.com, tmall.com, e22a.com, cainiao.com, androidapp://com.tmall.wireless, androidapp://com.taobao.taobao

## 使用正则表达式排除二级域名

以 qq.com 为例

匹配规则：

```
^https?://?[a-z0-9.]*[/\.](?<![/\.](exmail|weixin|wechat|wx[0-9]*|om|weread)\.)qq\.com(?!\.)
```
