---
weight: 10
title: "微信 PC 端多开"
bookFlatSection: false
bookCollapseSection: false
bookHidden: false
---

# 微信 PC 端多开

```
@echo off
title open wechat

taskkill /f /im wechat.exe

start "" "C:\"Program Files (x86)"\Tencent\WeChat\WeChat.exe"
start "" "C:\"Program Files (x86)"\Tencent\WeChat\WeChat.exe"
start "" "C:\"Program Files (x86)"\Tencent\WeChat\WeChat.exe"
```
