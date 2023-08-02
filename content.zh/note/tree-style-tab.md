---
weight: 10
title: "TST style rules"
description: Windows Subsystem for Android™️ ADB 命令
bookFlatSection: false
bookCollapseSection: false
bookHidden: false
---

# TST style rules

```css
/* Show title of unread tabs with red and italic font */
/*
:root.sidebar tab-item.unread .label-content {
  color: red !important;
  font-style: italic !important;
}
*/

/* Add private browsing indicator per tab */
/*
:root.sidebar tab-item.private-browsing tab-label:before {
  content: "🕶";
}
*/

tab-item-substance {
  border: none; 
}

tab-item  tab-item-substance {
  --tab-size: 33px !important;
  height: var(--tab-size);
}

/* As little space before the tab name as possible.
   The fold/unfold icon is not affected. */
tab-item:not(.pinned) tab-item-substance {
  padding-left: 10px !important; /* !important is required when there are enough tabs to cause a scrollbar */
}

tab-item.unread .label-content {
  font-style: italic;
}
```

