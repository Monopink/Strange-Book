---
title: 调色盘
bookToC: false
type: docs
headCustom: |
  <style type="text/css">
    .filled-logo {
      fill: var(--body-font-color);
    }
    .picker {
      display: inline-block;
      box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(3, 1, 1, 0.08);
    }
  </style>
  <script type="text/javascript" src="/js/acolorpicker.js"></script>
afterBodyCustom: |
  <script type="text/javascript">
    AColorPicker.from('.picker')
      .on('change', (picker, color) => {
        var filledLogo = document.getElementsByClassName('filled-logo');
        filledLogo[0].style.fill = color;
        filledLogo[1].style.fill = color;
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
---

<p>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 324.08" width="300px" aria-label="Jh Logo">
    <path class="filled-logo" d="M268.15,50.3c21.22,0,31.84,13.86,31.85,41.58V0h-57V63.15c5.77-8.57,14.15-12.85,25.15-12.85Z"/>
    <path class="filled-logo" d="M270.38,195.6V95.28c0-12.48-4.1-18.72-12.29-18.72-10.06,0-15.09,7.64-15.09,22.91v96.12h-29.62V0h-21.79V149.21c0,31.67-14.91,47.5-44.71,47.5-5.96,0-10.71-.38-14.25-1.12v-27.94c2.79,.75,6.15,1.12,10.06,1.12,12.11,0,18.16-6.24,18.16-18.72V0H.52V274.82c.31,.07,.62,.15,.93,.22,8.01,1.89,15.58,3.68,31.13,3.68s23.12-1.79,31.13-3.68c8.39-1.98,17.06-4.03,34.14-4.03s25.76,2.05,34.14,4.03c8.01,1.89,15.58,3.68,31.13,3.68v13.1c-17.08,0-25.76-2.05-34.14-4.03-8.01-1.89-15.58-3.68-31.13-3.68s-23.12,1.79-31.13,3.68c-8.39,1.98-17.06,4.03-34.14,4.03-15.68,0-24.27-1.73-32.07-3.54v36.37H300V195.6h-29.62Z"/>
  </svg>
</p>

<div class="picker" acp-color="#EFE9E7" acp-palette="PALETTE_MATERIAL_CHROME" acp-palette-editable></div>
