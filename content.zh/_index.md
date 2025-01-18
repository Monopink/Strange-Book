---
title: 欢迎
bookToC: false
type: docs
description: 欢迎来到Jianghu Wiki，这是一个超越现实、穿越时空的神秘领域。在这个奇幻的数字世界中，你将遇见艺术的魔法、冲浪的禅意和工具的奇妙力量。探索生活服务的未知领域，体验应用软件的超凡能力，掌握云与建站的秘术。在数字生活的迷雾中，商业公司的服务协议成为神秘的咒文，项目说明隐藏着无尽的可能性。填饱肚子的心得、酱汁配料的秘方、煮速冻水饺的魔法步骤，让你在食物的领域掌握无限力量。而在笔记的世界里，Adobe Indesign、Git等工具的知识将引领你穿越虚幻的网络空间。快来开启这段超现实的冒险之旅吧！最佳体验请使用Firefox或Safari浏览器，让你的探索之旅更加神秘莫测。
headCustom: |
  <style type="text/css">
    .oldline {
      display: inline-block;
      margin-left: 4px;
    }
    #keyword {
      width: 100%;
      max-width: 100%;
      padding: 0.5rem; 
    }
    .jh-search-list p {
      line-height: 2.4;
      margin: 1rem 0;
    }
  </style>
afterBodyCustom: |
  <script type="application/javascript">
  let keywordBox = document.getElementById("keyword");
  function google() {
    window.open("https://www.google.com/search?pws=0&gl=us&gws_rd=cr&q=" + keywordBox.value);
  }
  function duckgo() {
    window.open("https://duckduckgo.com/?q=" + keywordBox.value);
  }
  function bing() {
    window.open("https://www.bing.com/search?q=" + keywordBox.value);
  }
  function yandex() {
    window.open("https://yandex.com/search/?text=" + keywordBox.value);
  }
  function baidu() {
    window.open("https://www.baidu.com/s?wd=" + keywordBox.value);
  }

  function github() {
    window.open("https://github.com/search?q=" + keywordBox.value);
  }
  function pinterest() {
    window.open("https://www.pinterest.com/search/pins/?q=" + keywordBox.value);
  }
  function neodb() {
    window.open("https://neodb.social/search/?q=" + keywordBox.value);
  }
  function qimai() {
    window.open("https://www.qimai.cn/search/index/country/cn/search/" + keywordBox.value);
  }
  function steamdb() {
    window.open("https://steamdb.info/search/?a=app&q=" + keywordBox.value);
  }
  function steam() {
    window.open("https://store.steampowered.com/search/?term=" + keywordBox.value);
  }
  function giphy() {
    window.open("https://giphy.com/search/" + keywordBox.value);
  }
  function forvo() {
    window.open("https://forvo.com/search/" + keywordBox.value + "/en/");
  }

  function wayback() {
    window.open("https://web.archive.org/web/*/" + keywordBox.value);
  }
  function webcheck() {
    window.open("https://web-check.xyz/results/" + keywordBox.value);
  }
  function domainr() {
    window.open("https://domainr.com/?q=" + keywordBox.value);
  }
  function whois() {
    window.open("https://html.zone/whois/" + keywordBox.value);
  }
  function cnicp() {
    window.open("https://www.icpapi.com/" + keywordBox.value);
  }
  function ipshu() {
    window.open("https://ipshu.com/ipv4/" + keywordBox.value);
  }
  function bczs() {
    window.open("http://ip.bczs.net/" + keywordBox.value);
  }
  function baiduip() {
    window.open("https://qifu.baidu.com/wise/#/?activeId=SEARCH_IP_ADDRESS&ip=" + keywordBox.value);
  }

  function v2ex() {
    window.open("https://www.google.com/search?pws=0&gl=us&gws_rd=cr&q=site:v2ex.com/t+" + keywordBox.value);
  }
  function taobaopc() {
    window.open("https://s.taobao.com/search?q=" + keywordBox.value);
  }
  function zhihu() {
    window.open("https://www.zhihu.com/search?q=" + keywordBox.value);
  }
  function so360() {
    window.open("https://www.so.com/s?q=" + keywordBox.value);
  }
  function sougou() {
    window.open("https://www.sogou.com/web?query=" + keywordBox.value);
  }

  function googletrans2zh() {
    window.open("https://translate.google.com/?sl=auto&tl=zh-CN&op=translate&text=" + keywordBox.value);
  }
  function googletrans2en() {
    window.open("https://translate.google.com/?sl=auto&tl=en&op=translate&text=" + keywordBox.value);
  }
  function dictionary() {
    window.open("https://www.merriam-webster.com/dictionary/" + keywordBox.value);
  }
  function baiduyue() {
    window.open("https://fanyi.baidu.com/#zh/yue/" + keywordBox.value);
  }

  let flag = 0;

  function getIP(json) {
    if (json && json.ip && keywordBox.value === "" && flag == 0) {
      keywordBox.value = json.ip;
      flag = 1;
    }
  }
  /*
  if (keywordBox.value === "" && flag == 0) {
    fetch("https://api.ipify.org/?format=json")
      .then(response => response.json())
      .then(data => {
        if (keywordBox.value === "" && flag == 0) {
          keywordBox.value = data.ip;
          flag = 1;
        }
      })
      .catch(error => console.error(error));
  }
  */
  function selectText(input) {
    if (flag == 1) {
      input.select();
    }
    flag = 2;
  }
  </script>
  <script type="application/javascript" src="https://api.ipify.org?format=jsonp&callback=getIP"></script>
---

> Hello！请随意浏览

## 🔍搜索

<div class="book-search jh-search" style="margin-bottom: 0.5rem;">
  <input type="text" id="keyword" name="keyword" placeholder="Jianghu 搜索" aria-label="搜索" onclick="selectText(this)"/>
  <div class="jh-search-list">
    <p>
      <a href="#" class="book-btn" onclick="google()" style="color: #4285f4;">Google NCR</a>
      <a href="#" class="book-btn" onclick="duckgo()" style="color: #de5833;">DuckDuckGo</a>
      <a href="#" class="book-btn" onclick="bing()" style="color: #0060df;">Bing</a>
      <a href="#" class="book-btn" onclick="yandex()" style="color: #fc3f1d;">Yandex</a>
      <a href="#" class="book-btn" onclick="baidu()" style="color: #4e6ef2;">百度</a>
    </p>
    <p>
      <a href="#" class="book-btn" onclick="github()" style="color: #9370c6;">GitHub</a>
      <a href="#" class="book-btn" onclick="pinterest()" style="color: #e60023;">Pinterest</a>
      <a href="#" class="book-btn" onclick="neodb()" style="color: #a3c095;">NeoDB</a>
      <a href="#" class="book-btn" onclick="qimai()" style="color: #02b389;">七麦</a>
      <a href="#" class="book-btn" onclick="steamdb()" style="color: #0366d6;">SteamDB</a>
      <a href="#" class="book-btn" onclick="steam()" style="color: #1a9fff;">Steam</a>
      <a href="#" class="book-btn" onclick="giphy()" style="color: #9933ff;">GIPHY</a>
      <a href="#" class="book-btn" onclick="forvo()" style="color: #0000ff;">Forvo</a>
    </p>
    <p>
      <a href="#" class="book-btn" onclick="wayback()" style="color: #d5383f;">IAWM</a>
      <a href="#" class="book-btn" onclick="webcheck()" style="color: #94D512;">Web Check</a>
      <a href="#" class="book-btn" onclick="domainr()" style="color: #117ec8;">Domainr</a>
      <a href="#" class="book-btn" onclick="whois()" style="color: #91d117;">Whois</a>
      <a href="#" class="book-btn" onclick="cnicp()" style="color: #e6bd04;">CNICP</a>
      <a href="#" class="book-btn" onclick="ipshu()" style="color: #50b8fe;">IPSHU</a>
      <a href="#" class="book-btn" onclick="bczs()" style="color: #0088cc;">bczs.net</a>
      <a href="#" class="book-btn" onclick="baiduip()" style="color: #2469f3;">百度IP</a>
    </p>
    <p>
      <a href="#" class="book-btn" onclick="v2ex()" style="color: #aab0c6;">V2EX</a>
      <a href="#" class="book-btn" onclick="taobaopc()" style="color: #ff4400;">淘宝PC</a>
      <a href="#" class="book-btn" onclick="zhihu()" style="color: #056de8;">知乎</a>
      <a href="#" class="book-btn" onclick="so360()" style="color: #0fb264;">360搜索</a>
      <a href="#" class="book-btn" onclick="sougou()" style="color: #fd6853;">搜狗</a>
    </p>
    <p>
      <a href="#" class="book-btn" onclick="googletrans2zh()" style="color: #4b8bf5;">Translate2ZH</a>
      <a href="#" class="book-btn" onclick="googletrans2en()" style="color: #4b8bf5;">Translate2EN</a>
      <a href="#" class="book-btn" onclick="dictionary()" style="color: #d71920;">Webster</a>
      <a href="#" class="book-btn" onclick="baiduyue()" style="color: #5a62ff;">粤语翻译</a>
    </p>
  </div>
</div>

## 📞快速拨号

### 🏄‍♀️冲浪时间

订阅<span class="oldline">｜</span>[Inoreader](https://www.inoreader.com/)<span class="oldline">｜</span>[Feedly](https://feedly.com/i/my)<span class="oldline">｜</span>[The Old Reader](https://theoldreader.com)<span class="oldline">｜</span>[Substack](https://substack.com/home)<span class="oldline">｜</span>[Matters](https://matters.town/)

聚合<span class="oldline">｜</span>[Buzzing](https://www.buzzing.cc/)<span class="oldline">｜</span>[今日热榜](https://tophub.today/)<span class="oldline">｜</span>[有据](https://chinafactcheck.com/)<span class="oldline">｜</span>[realtime.info](http://realtime.info/)

社区<span class="oldline">｜</span>[Reddit](https://www.reddit.com/)<span class="oldline">｜</span>[梦乡](http://yume.ly/)<span class="oldline">｜</span>[批踢踢實業坊](https://www.ptt.cc/bbs/hotboards.html)<span class="oldline">｜</span>[Blind](https://www.teamblind.com/)<span class="oldline">｜</span>[通信人家园](https://www.txrjy.com/forum.php)<span class="oldline">｜</span>[253874](https://www.253874.net)<span class="oldline">｜</span>[虫部落](https://www.chongbuluo.com/)<span class="oldline">｜</span>[NodeSeek](https://www.nodeseek.com/)<span class="oldline">｜</span>[LINUX DO](https://linux.do/latest)<span class="oldline">｜</span>[大佬论坛](https://dalao.net/)<span class="oldline">｜</span>[美卡论坛](https://www.uscardforum.com/top?period=daily)<span class="oldline">｜</span>[V2EX](https://www.v2ex.com/changes)<span class="oldline">｜</span>[4414](https://www.4414.cn/)<span class="oldline">｜</span>[我爱卡](https://bbs.51credit.com/)<span class="oldline">｜</span>[过早客](https://www.guozaoke.com/?tab=latest)<span class="oldline">｜</span>[主机论坛](https://hostloc.com/misc.php?mod=ranklist)<span class="oldline">｜</span>[2047](https://2047.one/)<span class="oldline">｜</span>[中文印刷](https://www.cnprint.org/bbs/index.php)<span class="oldline">｜</span>[钢笔论坛](http://www.penbbs.com/forum.php)<span class="oldline">｜</span>[矿石收音机](http://www.crystalradio.cn/forum.php?mod=guide&view=hot)<span class="oldline">｜</span>[手电大家谈](https://www.shoudian.org/forum.php?mod=guide&view=newthread)<span class="oldline"><span class="oldline">｜</span>[Reddit](https://www.reddit.com/)<span class="oldline">

Blog<span class="oldline">｜</span>[十年之约](https://www.foreverblog.cn/feeds.html)<span class="oldline">｜</span>[笔墨迹](https://blogscn.fun/)<span class="oldline">｜</span>[个站商店](https://storeweb.cn/rss)<span class="oldline">｜</span>[酱紫表](https://qust.me/)<span class="oldline">｜</span>[栋哥的赛博空间](https://liuyandong.com/)<span class="oldline">｜</span>[高海鹏老师](https://www.gaohaipeng.com/)<span class="oldline">｜</span>[docofcard](https://docofcard.com/)<span class="oldline">｜</span>[VPS大玩家](https://www.vpsdawanjia.com/)<span class="oldline">｜</span>[谷姐靓号网](https://www.goojie.eu/)<span class="oldline">｜</span>[虚拟号](https://xunihao.net/)

随机<span class="oldline">｜</span>[虫洞](https://foreverblog.cn/go.html)<span class="oldline">｜</span>[开往](https://www.travellings.cn/go.html)<span class="oldline">｜</span>[笔墨迹](https://blogscn.fun/random.html)<span class="oldline">｜</span>[中文博客列表](https://zhblogs.ohyee.cc/go)

学习<span class="oldline">｜</span>[TypingClub](https://www.typingclub.com/sportal/program-3.game)<span class="oldline">｜</span>[Qwerty Learner](https://qwerty.kaiyi.cool/)

其他<span class="oldline">｜</span>[NameSilo marketplace](https://www.namesilo.com/Marketplace)

[👉所有…](/fav/surf/)

### 🔨工具

云机器<span class="oldline">｜</span>[云手机](https://cloudphoneh5.buy.139.com/#/cloudphone)

工具<span class="oldline">｜</span>[小鹤音形查询](http://react.xhup.club/search)<span class="oldline">｜</span>[Wormhole](https://wormhole.app/)<span class="oldline">｜</span>[Emailnator](https://www.emailnator.com/)<span class="oldline">｜</span>[Voov](https://voovmeeting.com/regist-email.html)｜</span>[HW](https://id1.cloud.huawei.com/CAS/portal/userRegister/regbyphone.html)

---

*本网站使用 [Firefox](/note/firefox-font-fallback/) 或 Safari 浏览将获得最佳体验*