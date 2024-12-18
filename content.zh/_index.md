---
title: 欢迎
bookToC: false
type: docs
description: 欢迎来到Jianghu Wiki，这是一个超越现实、穿越时空的神秘领域。在这个奇幻的数字世界中，你将遇见艺术的魔法、冲浪的禅意和工具的奇妙力量。探索生活服务的未知领域，体验应用软件的超凡能力，掌握云与建站的秘术。在数字生活的迷雾中，商业公司的服务协议成为神秘的咒文，项目说明隐藏着无尽的可能性。填饱肚子的心得、酱汁配料的秘方、煮速冻水饺的魔法步骤，让你在食物的领域掌握无限力量。而在笔记的世界里，Adobe Indesign、Git等工具的知识将引领你穿越虚幻的网络空间。快来开启这段超现实的冒险之旅吧！最佳体验请使用Firefox或Safari浏览器，让你的探索之旅更加神秘莫测。
headCustom: |
  <style type="text/css">
    #keyword {
      width: 100%;
      max-width: 100%;
      padding: 0.5rem; 
    }
    .jh-search-list {
      p {
        line-height: 2.4;
        margin: 1rem 0;
        a {
          border: 1px solid var(--gray-80);
          padding: .5rem 1rem;
          font-size: .875rem;
        }
      }
      p:link {
        color: inherit !important;
      }
      p:visited {
        color: inherit !important;
      }
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
    window.open("https://whois.domaintools.com/" + keywordBox.value);
  }
  function cnicp() {
    window.open("https://icp.chinaz.com/" + keywordBox.value);
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

  function googletrans() {
    window.open("https://translate.google.com/?sl=auto&tl=zh-CN&op=translate&text=" + keywordBox.value);
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
      <a href="#" onclick="google()" style="border-color: #4285f4;">Google NCR</a>
      <a href="#" onclick="duckgo()" style="border-color: #de5833;">DuckDuckGo</a>
      <a href="#" onclick="bing()" style="border-color: #0060df;">Bing</a>
      <a href="#" onclick="yandex()" style="border-color: #fc3f1d;">Yandex</a>
      <a href="#" onclick="baidu()" style="border-color: #4e6ef2;">百度</a>
    </p>
    <p>
      <a href="#" onclick="github()" style="border-color: #6e5494;">GitHub</a>
      <a href="#" onclick="pinterest()" style="border-color: #e60023;">Pinterest</a>
      <a href="#" onclick="neodb()" style="border-color: #c0d9b4;">NeoDB</a>
      <a href="#" onclick="qimai()" style="border-color: #02b389;">七麦</a>
      <a href="#" onclick="steamdb()" style="border-color: #0366d6;">SteamDB</a>
      <a href="#" onclick="steam()" style="border-color: #1a9fff;">Steam</a>
      <a href="#" onclick="giphy()" style="border-color: #9933ff;">GIPHY</a>
    </p>
    <p>
      <a href="#" onclick="wayback()" style="border-color: #ab2e33;">IAWM</a>
      <a href="#" onclick="webcheck()" style="border-color: #B6FF25;">Web Check</a>
      <a href="#" onclick="domainr()" style="border-color: #0e5f96;">Domainr</a>
      <a href="#" onclick="whois()" style="border-color: #91d117;">Whois</a>
      <a href="#" onclick="cnicp()" style="border-color: #fdd000;">CNICP</a>
      <a href="#" onclick="ipshu()" style="border-color: #50b8fe;">IPSHU</a>
      <a href="#" onclick="bczs()" style="border-color: #0088cc;">bczs.net</a>
      <a href="#" onclick="baiduip()" style="border-color: #2469f3;">百度IP</a>
    </p>
    <p>
      <a href="#" onclick="v2ex()" style="border-color: #aab0c6;">V2EX</a>
      <a href="#" onclick="taobaopc()" style="border-color: #ff4400;">淘宝PC</a>
      <a href="#" onclick="zhihu()" style="border-color: #056de8;">知乎</a>
      <a href="#" onclick="so360()" style="border-color: #0fb264;">360搜索</a>
      <a href="#" onclick="sougou()" style="border-color: #fd6853;">搜狗</a>
    </p>
    <p>
      <a href="#" onclick="googletrans()" style="border-color: #4b8bf5;">Translate</a>
      <a href="#" onclick="baiduyue()" style="border-color: #2932e1;">粤语翻译</a>
    </p>
  </div>
</div>

## 📞快速拨号

### 🏄‍♀️冲浪时间

订阅<span class="oldline">｜</span>[Inoreader](https://www.inoreader.com/)<span class="oldline">｜</span>[Feedly](https://feedly.com/i/my)<span class="oldline">｜</span>[The Old Reader](https://theoldreader.com)<span class="oldline">｜</span>[Substack](https://substack.com/home)<span class="oldline">｜</span>[Matters](https://matters.town/)

聚合<span class="oldline">｜</span>[Buzzing](https://www.buzzing.cc/)<span class="oldline">｜</span>[今日热榜](https://tophub.today/)<span class="oldline">｜</span>[摸摸鱼](https://momoyu.cc)<span class="oldline">｜</span>[有据](https://chinafactcheck.com/)<span class="oldline">｜</span>[realtime.info](http://realtime.info/)

社区<span class="oldline">｜</span>[Reddit](https://www.reddit.com/)<span class="oldline">｜</span>[批踢踢實業坊](https://www.ptt.cc/bbs/hotboards.html)<span class="oldline">｜</span>[Blind](https://www.teamblind.com/)<span class="oldline">｜</span>[通信人家园](https://www.txrjy.com/forum.php)<span class="oldline">｜</span>[253874](https://www.253874.net)<span class="oldline">｜</span>[虫部落](https://www.chongbuluo.com/)<span class="oldline">｜</span>[NodeSeek](https://www.nodeseek.com/)<span class="oldline">｜</span>[LINUX DO](https://linux.do/latest)<span class="oldline">｜</span>[大佬论坛](https://dalao.net/)<span class="oldline">｜</span>[美卡论坛](https://www.uscardforum.com/top?period=daily)<span class="oldline">｜</span>[V2EX](https://www.v2ex.com/changes)<span class="oldline">｜</span>[4414](https://www.4414.cn/)<span class="oldline">｜</span>[我爱卡](https://bbs.51credit.com/)<span class="oldline">｜</span>[过早客](https://www.guozaoke.com/?tab=latest)<span class="oldline">｜</span>[主机论坛](https://hostloc.com/misc.php?mod=ranklist)<span class="oldline">｜</span>[2047](https://2047.one/)<span class="oldline">｜</span>[中文印刷](https://www.cnprint.org/bbs/index.php)<span class="oldline">｜</span>[钢笔论坛](http://www.penbbs.com/forum.php)<span class="oldline">｜</span>[Matrix 社区](https://sspai.com/matrix/hot)

Blog<span class="oldline">｜</span>[十年之约 Feed](https://www.foreverblog.cn/feeds.html)<span class="oldline">｜</span>[十年之约 虫洞](https://foreverblog.cn/go.html)<span class="oldline">｜</span>[开往](https://www.travellings.cn/go.html)<span class="oldline">｜</span>[酱紫表](https://qust.me/)<span class="oldline">｜</span>[栋哥的赛博空间](https://liuyandong.com/)<span class="oldline">｜</span>[高海鹏老师](https://www.gaohaipeng.com/)<span class="oldline">｜</span>[docofcard](https://docofcard.com/)<span class="oldline">｜</span>[VPS大玩家](https://www.vpsdawanjia.com/)<span class="oldline">｜</span>[谷姐靓号网](https://www.goojie.eu/)<span class="oldline">｜</span>[虚拟号](https://xunihao.net/)

学习<span class="oldline">｜</span>[TypingClub](https://www.typingclub.com/sportal/program-3.game)<span class="oldline">｜</span>[Qwerty Learner](https://qwerty.kaiyi.cool/)

其他<span class="oldline">｜</span>[NameSilo marketplace](https://www.namesilo.com/Marketplace)

[👉所有…](/fav/surf/)

### 🔨工具

云机器<span class="oldline">｜</span>[云手机](https://cloudphoneh5.buy.139.com/#/cloudphone)

工具<span class="oldline">｜</span>[小鹤音形查询](http://react.xhup.club/search)<span class="oldline">｜</span>[Wormhole](https://wormhole.app/)<span class="oldline">｜</span>[Emailnator](https://www.emailnator.com/)<span class="oldline">｜</span>[Voov](https://voovmeeting.com/regist-email.html)｜</span>[HW](https://id1.cloud.huawei.com/CAS/portal/userRegister/regbyphone.html)

---

*本网站使用 [Firefox](/note/firefox-font-fallback/) 或 Safari 浏览将获得最佳体验*