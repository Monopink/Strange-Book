---
weight: 10
title: "iOS 在本机切换地图等系统 App 语言"
bookFlatSection: false
bookCollapseSection: false
bookHidden: false
---

# iOS 在本机切换地图等系统 App 语言

参考自 Hackl0us 的文章[《#骚操作# 英文系统下使用全中文地图导航……》](https://mp.weixin.qq.com/s/xOjQXMULyIEmH8rqu5E6cw)，事情的前因后果可看其中的内容，Hackl0us 已经讲得很清楚这里就不再重复了。

原文所说的方法需要使用电脑连接手机备份来达到修改系统应用语言的目的，这个方法思路很好，但是操作起来略微复杂。这里以地图应用 Maps 为例，在 iPhone 或 iPad 本机，不需要借助其他设备来修改应用语言。

但是前提是设备需要已经越狱或者安装 TrollStore 巨魔商店，并且安装文件管理器，这里我以 Filza 为例。

下面开始。

1. 通过可能的方法安装 Filza。

2. 在 Filza 中点底栏中间的⭐星星图标，选择`Apps manager`。

3. 在列表中找到`Maps`进入，接着进入`Library` → `Preferences`。

4. 找到 `com.apple.Maps.plist`，进入。

5. 点击`Root`一行右端的❕感叹号进入。

6. 滑倒最底点击`Add item ...`，新建一项。

7. 点击修改新添加的`New item`，将`NAME`改为`AppleLanguages`，`TYPE`改为`Array`。

8. 还是这里，在`VALUE`下点击`Add item ...`，新建`Item 0`。

9. 点击修改新添加的`Item 0`，将`VALUE`修改为`zh-Hant`。语言标志含义如下：
- `zh-Hans` 简体中文
- `zh-Hant` 繁体中文
- `en-US` 美式英语

10. 上面一步是将简体中文作为第一选择语言，如果还需添加第二选择语言（例如英语）则重复 8-9 步添加`Item 1`即可，以此类推。

11. 修改完成后记得保存`plist`文件内容。

12. 打开 Maps 应用则会应用新设置的语言顺序。如果没有变就划掉 Maps 应用后台，检查上面步骤所添加的`AppleLanguages`内容是否还在，如果不在则重新添加，然后不要打开 Maps，重启手机或 Respring 再打开 Maps 应用检查效果。