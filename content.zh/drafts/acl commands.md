---
weight: 10
title: "ACL 命令"
bookFlatSection: false
bookCollapseSection: false
bookHidden: false
---

# ACL 命令

## 安装软件

1. Powersheel 输入：

```shell
$cred = Get-Credential
```

2. 输入用户名及密码

3. 继续输入：

```
Start-Process powershell -ArgumentList '-Command Start-Process powershell' -Credential $cred -LoadUserProfile
```

4. 新窗口输入

```shell
$env:__COMPAT_LAYER = 'RunAsInvoker'
```
```
cd ~
```
```
& '软件包路径'
```

