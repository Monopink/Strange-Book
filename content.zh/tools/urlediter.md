---
title: URL处理
bookToC: false
type: docs
afterBodyCustom: |
  <script>
      function processText() {
          var inputText = document.getElementById("inputText").value;
          var urlRegex = /(https?:\/\/[^\s]+)/;
          var urlMatch = inputText.match(urlRegex);

          if (urlMatch && urlMatch.length > 0) {
              var url = urlMatch[0];
              var decodedUrl = decodeURIComponent(url);

              var resultDiv = document.getElementById("output");
              resultDiv.innerHTML = "<strong>原始URL:</strong><br>" + url + "<br><br>";
              resultDiv.innerHTML += "<strong>解码后的URL:</strong><br>" + decodedUrl;
          } else {
              alert("输入文本中没有找到URL。");
          }
      }
  </script>
---

<textarea id="inputText" rows="5" cols="50" placeholder="在这里粘贴文本"></textarea><br>
<button onclick="processText()">处理文本</button><br><br>
<div id="output"></div>