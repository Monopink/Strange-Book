---
title: 调色盘
bookToC: false
type: docs
headCustom: |
  <style type="text/css">
    .markdown {
      background-color: #202429;
    }
    .picker {
      display: inline-block;
      box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(3, 1, 1, 0.08);
    }
  </style>
  <script type="module" src="/js/acolorpicker.js"></script>
---

<div class="picker" acp-color="#EFE9E7" acp-palette="PALETTE_MATERIAL_CHROME" acp-palette-editable></div>

<script type="text/javascript">
  AColorPicker.from('.picker')
    .on('change', (picker, color) => {
      document.body.style.backgroundColor = color;
    })
    .on('coloradd', (picker, color) => {
      // color added: color
      // modified palette: picker.palette
    })
    .on('colorremove', (picker, color) => {
      // color removed: color
      // modified palette: picker.palette
    });
</script>
