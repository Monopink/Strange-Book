---
weight: 10
title: "WSA ADB 命令"
description: Windows Subsystem for Android™️ ADB 命令
bookFlatSection: false
bookCollapseSection: false
bookHidden: false
---

# Windows Subsystem for Android ADB 命令

ADB 连接

```
adb connect 127.0.0.1:58526
```

设置代理

```
adb shell "settings put global http_proxy `ip route list match 0 table all scope global | cut -F3`:7890"
```

